const express = require("express");
const dbhelpers = require("../model/db_queries/index.js");


// data processing functions
const userLogs = require("./userLogs.js");
const taskCount = require("./taskCount.js");

// was going to refactor this out, but it makes my head hurt:
// const weekView = require("./weekView.js");


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
              res.render("dashboard", { weeks: taskRes, name: 'Dashboard', backBtn: 'hidden' });
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


                // 1.
                const logged = [];
                const allTasks = [];
                logData.map(log => logged.push(log.task_id));
                taskRes.map(task => allTasks.push(task.id));

                // 2.
                const notCompleted = allTasks.filter(obj => logged.indexOf(obj) == -1);


                // must have unlogged tasks to run this
                if (notCompleted.length > 0) {
                  dbhelpers
                  .getTasksById(notCompleted)
                    .then(response => {
                      // console.log(response)


                      const allTasksForWeek = [...logData, ...response];
                      
                      // render with with unlogged tasks added to logData
                      res.render("week", {
                        name: weekName,
                        tasks: allTasksForWeek,
                        number: weekId
                      });
                    }
                    )
                    .catch(error => console.log('error getting outstanding tasks: ', error));

                }
                
                // user has made a log for all tasks
                else {

                  // render the week with all tasks
                  res.render("week", {
                    name: weekName,
                    tasks: logData,
                    number: weekId
                  });

                }

              })
              .catch(taskErr => {
                console.log(taskErr);
              });
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
  
  // 1. if first part of url matches check url_slug (for week)
  // - add this to the output object - get back to parent page
  const url_slug = req.params.week;

  dbhelpers.weekExist(url_slug)
    .then(weekData => {

      if (weekData.length > 0) {

        // 2. if second part of url matches task_slug
        const task_slug = req.params.tasks;

        dbhelpers.taskExist(task_slug)
          .then(taskData => {



            // 3. get task data for a specific user
            const task_id = taskData[0].id;
            dbhelpers.getSingleTaskForUser(task_id, "dave")
              .then(singleTask => {

                // radio buttons
                const radios = [
                  { label: 'Low', color: 'red', value: 1 },
                  { label: 'Medium', color: 'yellow', value: 2 },
                  { label: 'High', color: 'green', value: 3 }
                ]

                // 4. user has a log for this task
                if (singleTask.length > 0) {
                  
                  // create an object to send to the page
                  const loggedTask = singleTask[0];
                  loggedTask.url_slug = url_slug; // comes from week, not task
                  const { task_id, name, repo_link, completion, confidence, notes, task_slug } = loggedTask;

                  // set checked state of radio buttons
                  const checked = confidence - 1;
                  radios[checked].checked = true;

                  res.render("tasks", { task_id, name, repo_link, completion, confidence, notes, task_slug, url_slug, radios, menu_url: url_slug });
                }

                // 5. user has not logged a task
                else {

                  // create an object to send to the page
                  const unLoggedTask = taskData[0];
                  unLoggedTask.url_slug = url_slug;
                  const { id, name, repo_link, task_slug } = unLoggedTask;
                  // call the id the task_id for use in posting task to database
                  const task_id = id;

                  res.render("tasks", { task_id, name, repo_link, task_slug, url_slug, radios, menu_url: url_slug });
                }

              })
              .catch(taskErr => {
                // console.log('error in getSingleTaskForUser() ', taskErr);
                res.render("404");
                return;
              });

          })
          .catch(taskErr => {
            // console.log("task not found", taskErr);
            res.render("404");
            return;
          });
      }
      
      else {
        // console.log("week not found");
        res.render("404");
        return;
      }
    })
    // error in weekExist function
    .catch(weekErr => {
      // console.log(weekErr);
      res.render("500");
      return;
    });
});




// post request from task view
router.post("/logData", (req, res) => {
  //1. get user id from the url
  const userName = "dave";
  //2. get task id from the url
  const taskSlug = req.params.tasks;
  console.log("taskSLug url", taskSlug);
  const formEntry = req.body;
  const a = { taskSlug, userName, formEntry };
  //3. get the form input request

  console.log("in the app", a);
  //4. add the data to the logs database table
  dbhelpers
    .logData(formEntry)
    .then(userInput => {
      res.redirect("back");
    })
    .catch(err => {
      console.log("this is the err", err);
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
