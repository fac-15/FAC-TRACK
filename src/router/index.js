const express = require("express");
const dbhelpers = require("../model/db_queries/index.js");
// const hbhelpers = require("../views/helpers/index.js");

// create a new router
const router = express.Router();

// home route
router.get("/", (req, res) => {
  res.render("home");
});


// dashboard
router.get("/dashboard", (req, res) => {
  // enter user id to get:
  // - average confidence
  // - tasks completed

  const returnArr = item => {
    return item+=item;
  }


  // probably an issue with promises
  // - stuff made in 2nd promise want to be returned in first one
  dbhelpers.getAllWeeks()
    .then(data => {
      // console.log("response from database", data);

      // loop through all (8) weeks
      data.map(item => {

        // set empty arrays for confidence and completion
        // const isComplete = [];
        // const confLevels = [];
        // let a;
        

        // check each user log for the week id
        dbhelpers.getAllTasksForUser('sheila')
          .then(userLogs => {

            // attach any logs that exist for the week to week data:
            // - compare ids to do this

            userLogs.map(log => {
              if (log.week_id === item.id) {

                // a = log.completion+=log.completion;
                // const a = log.completion;

                // const b = log.confidence;
                // isComplete.push(a);
                // confLevels.push(b);
                // console.log(log);

              }

                // log weeks without logs as well
                // console.log(log.completion);
                // console.log(log.confidence);

              // return isComplete;

            })


          })
          .catch(logsErr => {
            console.log("error getting user logs ", logsErr);
            // res.status('error getting user logs ', logsErr, 500);
          });



          // if there are logs for the week, add them to the week object
          // console.log(isComplete)
          // console.log(a);
          // if (a!==undefined){
          //   item.user_details = a;
          // }


          // item.user_details = {
          //   completion: isComplete,
          //   confidence: confLevels
          // }


      }); // end weeks loop

      console.log(data);
      
      
      
      
      


      
      
      // add user details to each week
      // - this works, FYI
      // data.map(item => {
      //   if (item.id === 1) {
      //     // console.log(item);
      //     const user_details = {
      //       name : 'sheila',
      //       week_confidence : '2',
      //       week_complete : '2',
      //     }
      //     item.details = user_details;
      //   } 
      // });
      // console.log(data);


      res.render("dashboard", { weeks: data });
    })
    .catch(err => {
      // console.log("/dashboard error: ", err);
      res.status(err, 500);
    });
});


// week route(s)
router.get(
  "/week-:name(1_toolkit|2_testing|3_api|4_node-core|5_node-2|6_postgresql|7_authentication|8_express-handlebars)?",
  (req, res) => {
    const weekName = req.params.name.split("_")[1];
    // use the weekNumber to access the database list for that weeks task

    const weekNum = req.params.name.split("_")[0];
    // const trafficLight = hbhelpers.confidence;
    // get data for dave
    dbhelpers
      .getTaskForUser("dave", weekNum)
      .then(data => {
        // console.log("response from getTasksByWeek/router index: ", data);
        res.render("week", { name: weekName, tasks: data, number: weekNum });
      })
      .catch(err => {
        // console.log("/weeks error: ", err);
        res.status(err, 500);
      });
  }
);



// task routes
// NOTE: this can be:  http://localhost:5002/dashbsxoard/sd   and still be a valid url
// - in the console, this is a 404 page not found 
router.get("/:week/:tasks/", (req, res) => {

    const weekName = req.params.week;
    const taskName = req.params.tasks;
    // console.log(weekName, taskName);

     dbhelpers
       .getRepoLink(taskName)
       .then(data => {
         console.log("get repo link where taskName equals dataname: ", data);
         res.render("log", { name: weekName, tasks: taskName, repo_link: data });
       })
       .catch(err => {
        //  console.log("/weeks error: ", err);
        res.status(err, 500);
       });

});




// task routes
// 1 - 8

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
