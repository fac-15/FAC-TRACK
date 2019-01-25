// unused function

const db = require("../db/db_connection");

const getConfidenceForUser = (user_id, weekId) =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT confidence, week_id from logs l inner join users u on u.id = l.user_id INNER JOIN tasks t on l.task_id = t.id INNER JOIN weeks w on t.week_id = w.id  WHERE user_id = '${user_id}'`,
      (err, res) => {
        if (err) {
          reject("no confidence found in database ", err);
        } else {
          const result = res.rows.filter(filter => filter.week_id === weekId, {

          });
          console.log("this is the result",result);
          let cul = 0;
          let count = 0;

          for(const key in result) {
            console.log(result[key].week_id);
            console.log(result[key].confidence);
              cul += result[key].confidence;

              count++;
          }
    

          const total = cul / count;
          console.log("cul",cul, "count",count, "totalAgr", total);

          resolve(total);
        }
      }
    );
  });

module.exports = getConfidenceForUser;
