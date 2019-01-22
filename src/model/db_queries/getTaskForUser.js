const db = require("../db/db_connection");

// SELECT completion, confidence, notes, username from logs l inner join users u on u.id = l.user_id INNER
//   JOIN tasks t on l.task_id = t.id INNER JOIN weeks w on t.week_id = w.id  WHERE username = 'dave';

// SELECT completion, confidence, notes, username, week_name from logs l inner join users u on u.id = l.us
//  er_id INNER JOIN tasks t on l.task_id = t.id INNER JOIN weeks w on t.week_id = w.id  WHERE username = 'dave';

// SELECT completion, confidence, notes, username, week_name from logs l inner join users u on u.id = l.us
//  er_id INNER JOIN tasks t on l.task_id = t.id INNER JOIN weeks w on t.week_id = w.id  WHERE username = 'dave' and week_name = 'To
//  olkit'

// the winning formula:
// SELECT completion, confidence, notes, username, name from logs l inner join users u on u.id = l.user_id
//   INNER JOIN tasks t on l.task_id = t.id INNER JOIN weeks w on t.week_id = w.id  WHERE username = 'dave' and week_id = 1

// get ALL tasks and their status for a particular user, by user id
// - want to do this by username
// - want to add in week also!
const getTaskForUser = (username, weekId) => new Promise((resolve, reject) => {
    db.query(
      `SELECT completion, confidence, task_id, name from logs l inner join users u on u.id = l.user_id INNER JOIN tasks t on l.task_id = t.id INNER JOIN weeks w on t.week_id = w.id  WHERE username = '${username}' and week_id = ${weekId}`,
      (err, res) => {
        if (err) {
          reject("no weeks found in database ", err);
        } else {
          resolve(res.rows);
        }
      }
    );
  });

module.exports = getTaskForUser;
