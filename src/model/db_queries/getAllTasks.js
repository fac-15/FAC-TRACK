// used on dashboard
// - get all tasks
const db = require('../db/db_connection');

const getAllTasks = () => {

    return new Promise((resolve, reject) => {
        db.query('SELECT * from tasks', (err, res) => {
            if (err) {
                reject('week id not found in database ', err);
            }
            else {
                resolve(res.rows);
            }
        })
    })
}

module.exports = getAllTasks;