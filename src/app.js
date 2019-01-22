const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
// yet to write files
const routes = require("./router/index");
const helpers = require("./views/helpers/index");

const dbhelpers = require("./model/db_queries/index.js");
// const postData = require("./model/postData.js");

const app = express();

// set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main",
    helpers
  })
);

// load public folder
app.use(express.static(path.join(__dirname, "/..public"), { maxAge: "30d" }));

app.use(bodyParser.json());

// parse urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "public")));

// post data request from logs, takes the req.body and sends it throught the database query
// page refreshes

app.set("port", process.env.PORT || 5002);
app.use(routes);

module.exports = app;
