const { Pool } = require("pg");
const url = require("url");

const env = require("env2");
env("./config.env");

// get local database by default
let DB_URL = process.env.LOCAL_URL;

// get test database for tests
if (process.env.NODE_ENV === "test") {
  DB_URL = process.env.TEST_DB_URL;
}

// no database, throw an error
if (!DB_URL) {
  throw new Error("Environment variable DATABASE_URL must be set");
}

const params = url.parse(DB_URL);
const [username, password] = params.auth.split(":");

// set options
const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2
};

if (username) {
  options.user = username;
}
if (password) {
  options.password = password;
}

options.ssl = options.host !== "localhost";

module.exports = new Pool(options);
