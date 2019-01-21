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
router.get("/:id/dashboard", (req, res, next) => {
  // enter user id to get:
  // - average confidence
  // - tasks completed
  // dbhelpers
  //   .getAllWeeks()
  //   .then(data => {
  //     // console.log("response from database", data);
  //     res.render("dashboard", { weeks: data });
  //   })
  //   .catch(err => {
  //     // console.log("/dashboard error: ", err);
  //     res.status(err, 500);
  //   });

  const user_id = req.params.id;
  dbhelpers
    .getConfidenceForUser(user_id, 1)
    .then(data => {
      console.log(
        "response from getConfidenceForUserByWeek/router index: ",
        data
      );
      res.render("dashboard", { data });
    })
    .catch(err => {
      // console.log("/weeks error: ", err);
      res.status(err, 500);
    });
});

// week route(s)
router.get(
  "/:id/week-:name(1_toolkit|2_testing|3_api|4_node-core|5_node-2|6_postgresql|7_authentication|8_express-handlebars)?",
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
// router.get("/:week/:id/:tasks/", (req, res) => {
//
// //
//   const weekName = req.params.week;
//   const idName = req.params.week;
//   const taskName = req.params.tasks;
//   console.log(weekName, taskName, req.params);
//
//
//   dbhelpers
//     .getRepoLink(taskName)
//     .then(data => {
//       res.render("log", { data, dataname: weekName, tasks: taskName, });
//     }).catch(err => {
//        console.log("/weeks error: ", err);
//       res.status(err, 500);
//     });
// });

router.get(
  "/:id/:week/:tasks/",
  (req, res, next) => {
    // checking to validiate the route with regx
    const taskName = req.params.tasks;
    const regex = /\w*\s/g;

    // conditional statment to render 404 if the regex does not match the task url

    const found = taskName.match(regex);
    if (!found) {
      res.render("404");
      return;
    }
    // calling on the database to see whether the task is valid
    // dbhelpers.checkTasksList(taskName).then(data => {
    //
    // }

    dbhelpers.checkTasksList(taskName, (err, taskInDatabase) => {
      if (err) {
        // res.statusCode = 500;
        res.end("500");
        return;
      }
      if (taskName === taskInDatabase) {
        next();
      } else {
        res.end("404");
        return;
      }
    });

    //   console.log("this is the data from tasks query",data);
    //   console.log(taskName);
    //   const valid = data.includes(item => item.name === taskName);
    // return valid
    // });
    // console.log("this is the check to see if the above returns true of false",check);

    // middlewear function
    next();

    // query the database and then render the page
  },
  (req, res) => {
    const weekName = req.params.week;
    const idName = req.params.week;
    const taskName = req.params.tasks;

    dbhelpers
      .getRepoLink(taskName)
      .then(data => {
        res.render("log", { data, dataname: weekName, tasks: taskName });
      })
      .catch(err => {
        console.log("/ error: ", err);
        res.status(err, 500);
      });
  }
);

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
