const db = require("../db/db_connection");

const taskExist = task =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM tasks WHERE task_slug = '${task}'`, (err, res) => {
      if (err) {
        reject("week name not in the database", err);
      } else {
        resolve(res.rows);
      }
    });
  });

module.exports = taskExist;
