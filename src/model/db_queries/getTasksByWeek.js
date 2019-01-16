// get tasks by week
// argument = week number
// SELECT * from tasks INNER JOIN weeks ON tasks.week_id = '2' 

const db = require('../db_connection');

const getTasksByWeek = (cb, week_id) => {
    db.query(`SELECT * from tasks INNER JOIN weeks ON tasks.week_id = '${week_id}' `,
    (err, res) => {
        if (err) {
            console.log(' database connection error in getAllWeeks :', err);
            cb(err);
        }
        else {
            cb(null, res.rows);
        }
    });
  };
  
module.exports = getTasksByWeek;