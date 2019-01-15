const express = require("express");

// create a new router
const router = express.Router();

// home route
router.get("/", (req, res) => {
  res.render("home");
});

// dashboard route
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

// week test route will have to be dynamic
// https://stackoverflow.com/questions/25623041/how-to-configure-dynamic-routes-with-express-js

// week route(s)
router.get('/:name(node|express|testing)?', (req, res) => {
  const name = req.params.name;
  res.render('week', {name});
});


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
