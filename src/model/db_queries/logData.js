const db = require("../db/db_connection");

//add the log data into logs table

const logData = obj =>
  new Promise((resolve, reject) => {
    const { completion, confidence, notes } = obj;
    console.log("inside db the obj", obj);
    db.query(
      `INSERT INTO logs (completion, confidence, notes, task_id, user_id)
VALUES ($1,$2,$3,$4,$5)
ON CONFLICT (task_id, user_id) DO UPDATE SET
    completion = EXCLUDED.completion,
    confidence = EXCLUDED.confidence,
    notes = EXCLUDED.notes,
    task_id = EXCLUDED.task_id,
    user_id = EXCLUDED.user_id;
    `,
      [completion, confidence, notes, 1, 5],
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          console.log("what is the res", res);
          resolve(res);
        }
      }
    );
  });

module.exports = logData;

// ONCONFLIT do postgres
// insert or update
