const db = require("../db/db_connection");



const checkTasksList = (taskName, cb) => {
    db.query("SELECT * FROM tasks", (err, res) => {
        const taskCheck = res.rows.includes(item => item.name === taskName);
        const valid = taskCheck ? taskCheck.password : undefined
        cb(null, valid)
      })
};


// const getUserFromDatabase = (email, cb) => {
//   const database = db.get("data")
//   const user = database.find(user => user.email === email)
//   const password = user ? user.password : undefined
//   cb(null, password)
// }


module.exports = checkTasksList;
