// used on dashboard
// - enter username
const db = require('../db/db_connection');

const getAllTasksForUser = username => {

    return new Promise((resolve, reject) => {
        db.query(`SELECT completion, confidence, week_name, week_id, username from tasks t INNER JOIN weeks w on w.id = t
        .week_id INNER JOIN logs l on t.id = l.task_id INNER JOIN users u on l.user_id = u.id WHERE username = '${username}'`, (err, res) => {
            if (err) {
                reject('week id not found in database ', err);
            }
            else {
                resolve(res.rows);
            }
        })
    })
}

module.exports = getAllTasksForUser;