const fs = require("fs");
const path = require("path");
// const { Client } = require("pg");
// const { getConfig } = require("db_connection.js");

// const runSqlFile = fpath => async () => {
//   const sql = fs.readFileSync(fpath, "utf8");
//   const config = getConfig(process.env.NODE_ENV);
//   const client = new Client(config.psql);
//
//   await client.connect();
//   await client.query(sql);
//   await client.end();
// };

const buildDatabase = () => {
  dbConnection.query(sql, (err, res) => {
    if (err) {
      console.log("Database build error :", err);
    } else {
      console.log("Database created!");
      dbConnection.end(() => {
        console.log("Connection closed");
      });
    }
  });
};

const build = runSqlFile(path.resolve(__dirname, "schema.sql"));
const destroy = runSqlFile(path.resolve(__dirname, "drop.sql"));
const empty = runSqlFile(path.resolve(__dirname, "empty.sql"));
const populate = runSqlFile(path.resolve(__dirname, "demo_data.sql"));
const refresh = async () => {
  await destroy();
  await build();
  await populate();
};

module.exports = {
  build,
  destroy,
  empty,
  populate,
  refresh
};
