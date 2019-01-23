const db = require("../db/db_connection");

const getTaskBySlug = task_slug =>
  new Promise((resolve, reject) => {
    db.query(
      "SELECT * from tasks WHERE task_slug = $1",
      [task_slug],
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.rows);
        }
      }
    );
  });

module.exports = getTaskBySlug;
