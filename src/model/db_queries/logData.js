const db = require("../db/db_connection");

//add the log data into logs table

const logData = obj =>
  new Promise((resolve, reject) => {
    const { completion, confidence, notes } = obj;
    console.log("inside db the obj", obj);
    db.query(
      "INSERT INTO logs (completion, confidence, notes, task_id, user_id) VALUES ($1, $2, $3, $4, $5)",
      [completion, confidence, notes, 1, 2],
      (err, res) => {
        if (err) {
          reject("Could not insert in logs table ", err);
        } else {
          console.log("what is the res", res);
          resolve(res);
        }
      }
    );
  });

module.exports = logData;
