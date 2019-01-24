const db = require("../db/db_connection");

const getTaskByTaskId = id => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT t.id, name, task_slug, url_slug FROM tasks t INNER JOIN weeks w ON t.week_id = w.id WHERE t.id = $1`,
      [id],
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
