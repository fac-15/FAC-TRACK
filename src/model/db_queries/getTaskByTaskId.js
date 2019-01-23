const db = require("../db/db_connection");

// take a list of task ids
const getTaskByTaskId = ids => {

  const a = ids.toString();
  console.log('string array: ', a)
  console.log(ids.join(", "));

  const joined = ids.join(", ");

  return new Promise((resolve, reject) => {
    db.query(
      `SELECT t.id, name, task_slug, url_slug FROM tasks t INNER JOIN weeks w ON t.week_id = w.id WHERE t.id = ANY(?::INT[$1])`,
      [ids],
      (err, res) => {
        if (err) {
          reject("error in getTaskByTaskId query", err);
        } else {
          resolve(res.rows);
        }
      }
    );
  });
};

module.exports = getTaskByTaskId;
