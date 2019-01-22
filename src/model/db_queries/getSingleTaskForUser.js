const db = require("../db/db_connection");

const getSingleTaskForUser = (task_id, username) =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT * from logs l INNER JOIN users u on u.id = l.user_id INNER JOIN tasks t on l.task_id = t.id where t.id = $1 AND u.username = $2`,
      [task_id, username],
      (err, res) => {
        if (err) {
          reject("User has not made a log for this task", err);
        } else {
          resolve(res.rows);
        }
      }
    );
  });

module.exports = getSingleTaskForUser;
