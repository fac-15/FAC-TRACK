const db = require("../db/db_connection");

//add the log data into logs table
//currently gets an error and rejects when trying to insert
const logData = (obj) => new Promise((resolve, reject) => {
  const { completed, confidence, notes } = obj;
  console.log("inside db the obj",obj);
    db.query("INSERT INTO logs (completed, confidence, notes, task_id, user_id) VALUES ($1, $2, $3, $4, $5)",
    [completed, confidence, notes, 1, 2], (err, res) => {
      if (err) {
        reject("Could not insert in logs table ", err);
      } else {
        console.log("this is res", res);
        resolve(res);
      }
    });
});





module.exports = logData;
