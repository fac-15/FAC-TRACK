const express = require("express");
const dbhelpers = require("../model/db_queries/index.js");
// data processing functions
const userLogs = require("./userLogs.js");
const taskCount = require("./taskCount.js");

// create a new router
const router = express.Router();

// home route
router.get("/", (req, res) => {
  res.render("home");
});

// dashboard
router.get("/dashboard", (req, res) => {
  // 1. set the username to get the correct logs
  const userName = "dave";

  // 2. get all weeks
  dbhelpers
    .getAllWeeks()
    .then(allWeeks => {
      // 3. userLogs function matches logs to weeks (by id)
      userLogs(allWeeks, userName)
        .then(logsRes => {
          // 4. taskCount adds number of tasks for each week
          taskCount(logsRes)
            .then(taskRes => {
              //console.log(taskRes);
              res.render("dashboard", { weeks: taskRes });
            })
            .catch(taskErr => {
              console.log("taskCount function error: ", taskErr);
            });
        })
        .catch(logsErr => {
          console.log("userLogs function error: ", logsErr);
        });
    })
    .catch(err => {
      console.log("getAllWeeks error: ", err);
      res.status(err, 500);
    });
});

// week route(s)
router.get("/:week", (req, res) => {
  

  // 1. check url
  const week = req.params.week;
  //console.log("req.params :", req.params);

  // 2. see if item in url matches a url_slug for week in the database
  dbhelpers
    .weekExist(week)
    .then(weekData => {
      // 3. if found, get week details
      if (weekData.length > 0) {
        //console.log("Success", data);

        // console.log(data[0].week_name);
        // 4. get week name and id
        const weekName = weekData[0].week_name;
        const weekId = weekData[0].id;

        // 5. get tasks for by the user for the week
        dbhelpers
          .getTaskForUser("dave", weekId)
          .then(logData => {
            // console.log("response from getTasksByWeek/router index: ", logData);

            // _____________________________
            // need to output unlogged tasks:

            // 6. get all tasks for the week - ignoring user logs
            // - need to get url_slug from weeks too
            dbhelpers
              .getTasksByWeek(weekId)
              .then(taskRes => {
                // 1. make 2 arrays of logged and unlogged ids
                // 2. if id(s) exists in unlogged that doesn't exist in log, get that id(s)
                // 3. push item(s) with id(s) to logData array unlogged item

                const logged = [];
                const allTasks = [];
                logData.map(log => logged.push(log.task_id));
                taskRes.map(task => allTasks.push(task.id));

                const notCompleted = allTasks.filter(obj => logged.indexOf(obj) == -1);
                console.log('not completed ', notCompleted);

                // a better solution from here, ain't gonna lie:
                // https://stackoverflow.com/questions/15912538/get-the-unique-values-from-two-arrays-and-put-them-in-another-array
                // const allTasks = taskRes.filter(
                //   obj => logData.indexOf(obj) == -1
                // );
                //console.log(allTasks, "user logs: ", logData);
                // doesn't get url slug


                if (notCompleted.length > 0) {
                  // calling getTaskByTaskId
                  dbhelpers
                  .getTaskByTaskId(notCompleted)
                    .then(response => console.log(response))
                    .catch(error => console.log(error));

                }
                
                






                // render the week with all tasks
                res.render("week", {
                  name: weekName,
                  tasks: logData,
                  number: weekId
                });
              })
              .catch(taskErr => {
                console.log(taskErr);
              });

            // res.render("week", {
            //   name: weekName,
            //   tasks: logData,
            //   number: weekId
            // });
          })
          .catch(err => {
            // console.log("/weeks error: ", err);
            res.status(err, 500);
          });
      } else {
        // console.log("week not found");
        res.render("404");
        return;
      }
    })
    .catch(err => {
      console.log(err);
    });
});

// task routes
router.get("/:week/:tasks", (req, res) => {
  // 1. check url
  const week = req.params.week;

  // 2. see if item in url matches a url_slug for week in the database
  dbhelpers
    .weekExist(week)
    .then(data => {
      // 3. if found, get week details
      if (data.length > 0) {
        // console.log("weekdata: ", data);

        // 4. get week name and id and task from url_slug
        const weekId = data[0].id;
        const weekName = data[0].week_name;

        const task_slug = req.params.tasks;
        // console.log(task_slug);

        // 5. get task data
        dbhelpers
          .taskExist(task_slug)
          .then(taskData => {
            // 6. get task data for a specific user
            const task_id = taskData[0].id;

            dbhelpers
              .getSingleTaskForUser(task_id, "dave")
              .then(singleTask => {
                // console.log("user singleTask", singleTask);
                const name = singleTask[0].name;
                const repoLink = singleTask[0].repo_link;
                const completion = singleTask[0].completion;
                const confidence = singleTask[0].confidence;
                const notes = singleTask[0].notes;

                // 7. i) render log WITH user details
                res.render("tasks", {
                  name,
                  repoLink,
                  completion,
                  confidence,
                  notes
                });
              })
              .catch(taskErr => {
                console.log(taskErr);
                // 7. ii) render log WITHOUT user details - none entered for this task
                res.render("tasks", { taskData });
              });

            // 7. render task / log view for a specific user
          })
          .catch(taskErr => {
            console.log("Error loading the error plage", taskErr);
            res.render("404");
            return;
          });
      } else {
        // console.log("week not found");
        res.render("404");
        return;
      }
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/logData", (req, res) => {
  //1. get user id from the url
  const userName = "dave";
  //2. get task id from the url
  const taskSlug = req.params;
  console.log("taskSLug url", taskSlug);
  //3. get the form input request
  const formEntry = req.body;
  console.log("in the app", formEntry);
  //4. add the data to the logs database table
  dbhelpers
    .logData(formEntry)
    .then(userInput => {
      res.redirect("back");
    })
    .catch(err => {
      res.status(400);
      res.redirect("back");
    });
});

// error pages
router.use((req, res) => {
  res.status(404);

  if (req.accepts("html")) {
    res.render("404");
    return;
  }

  if (req.accepts("json")) {
    res.render("500");
    return;
  }

  res.type("txt").send("Not found");
});

module.exports = router;
