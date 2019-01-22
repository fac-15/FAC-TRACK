const db = require("../db/db_connection");

const getConfidenceForUser = (user_id, weekId) =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT confidence, week_id from logs l inner join users u on u.id = l.user_id INNER JOIN tasks t on l.task_id = t.id INNER JOIN weeks w on t.week_id = w.id  WHERE user_id = '${user_id}'`,
      (err, res) => {
        if (err) {
          reject("no confidence found in database ", err);
        } else {
          resolve(res.rows);
        }
      }
    );
  });

module.exports = getConfidenceForUser;
