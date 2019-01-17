const express = require("express");

// create a new router
const router = express.Router();

// home route
router.get("/", (req, res) => {
  res.render("home");
});



// dashboard route
router.get("/dashboard", (req, res) => {
  
  // const name = req.params.name;
  res.render("dashboard");
});


// week route(s)
router.get('/week-:name(1_toolkit|2_testing|3_api|4_node-core|5_node-2|6_postgresql|7_authentication|8_express-handlebars)?', (req, res) => {

  // write a database query to get task data (by week) for the user:
  // - tasks complete
  // - aggregate confidence
  
  // use the weekName to get tasks for the week
  const weekName = req.params.name.split('_')[1];
  res.render('week', {name: weekName});
});
router.get('/week-1_toolkit/workshop_1', (req, res) =>{

  res.render('log');

  //get repo link

})

router.post('')


// task routes
// 1 - 8



// error pages
router.use( (req, res) => {
  res.status(404);

  if (req.accepts('html')) {
    res.render("404");
    return;
  }

  if (req.accepts('json')) {
    res.render("500");
    return;
  }

  res.type('txt').send('Not found');
});


module.exports = router;
