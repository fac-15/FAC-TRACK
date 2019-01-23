// get tasks by week
// argument = week number
// SELECT * from tasks INNER JOIN weeks ON tasks.week_id = '2' 
// `SELECT name, repo_link from tasks INNER JOIN weeks ON tasks.week_id = '${week_id}' `
// SELECT * from tasks WHERE week_id = '2' 

const db = require('../db/db_connection');

const getTasksByWeek = week_id => {

    return new Promise((resolve, reject) => {
        db.query(`SELECT id, name, task_slug, repo_link from tasks WHERE week_id = '${week_id}' `, (err, res) => {
            if (err) {
                reject('week id not found in database ', err);
            }
            else {
                resolve(res.rows);
            }
        })
    })
}




// old non promise thing:

// db.query(`SELECT * from tasks INNER JOIN weeks ON tasks.week_id = '${week_id}' `,
// (err, res) => {
//     if (err) {
//         console.log(' database connection error in getAllWeeks :', err);
//         cb(err);
//     }
//     else {
//         cb(null, res.rows);
//     }
// }
// );

module.exports = getTasksByWeek;