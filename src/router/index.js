const express = require("express");

// create a new router
const router = express.Router();

// home route
router.get("/", (req, res) => {
  res.render("home");
});


module.exports = router;
