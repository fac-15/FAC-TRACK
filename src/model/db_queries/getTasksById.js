const db = require("../db/db_connection");

// take a list of task ids
// ...in a rather hacky way

// this stuff not working:
// https://stackoverflow.com/questions/8611843/sql-select-multiple-rows-using-where-in-one-table
// https://stackoverflow.com/questions/10738446/postgresql-select-rows-where-column-array
const getTasksById = ids => {

  // make the query
  const query = {
    1 : 'SELECT t.id, name, task_slug, url_slug FROM tasks t INNER JOIN weeks w ON t.week_id = w.id WHERE t.id = $1', 
    2 : 'SELECT t.id, name, task_slug, url_slug FROM tasks t INNER JOIN weeks w ON t.week_id = w.id WHERE t.id in ($1, $2)',
    3 : 'SELECT t.id, name, task_slug, url_slug FROM tasks t INNER JOIN weeks w ON t.week_id = w.id WHERE t.id in ($1, $2, $3)',
    4 : 'SELECT t.id, name, task_slug, url_slug FROM tasks t INNER JOIN weeks w ON t.week_id = w.id WHERE t.id in ($1, $2, $3, $4)',
    5 : 'SELECT t.id, name, task_slug, url_slug FROM tasks t INNER JOIN weeks w ON t.week_id = w.id WHERE t.id in ($1, $2, $3, $4, $5)',
    6 : 'SELECT t.id, name, task_slug, url_slug FROM tasks t INNER JOIN weeks w ON t.week_id = w.id WHERE t.id in ($1, $2, $3, $4, $5, $6)',
    7 : 'SELECT t.id, name, task_slug, url_slug FROM tasks t INNER JOIN weeks w ON t.week_id = w.id WHERE t.id in ($1, $2, $3, $4, $5, $6, $7)',
    8 : 'SELECT t.id, name, task_slug, url_slug FROM tasks t INNER JOIN weeks w ON t.week_id = w.id WHERE t.id in ($1, $2, $3, $4, $5, $6, $7, $8)',
  };
  // console.log(query[ids.length]);

  
  // add the data
  const data = {
    1 : [ids[0]],
    2 : [ids[0], ids[1]],
    3 : [ids[0], ids[1], ids[2]],
    4 : [ids[0], ids[1], ids[2], ids[3]],
    5 : [ids[0], ids[1], ids[2], ids[3], ids[4]],
    6 : [ids[0], ids[1], ids[2], ids[3], ids[4], ids[5]],
    7 : [ids[0], ids[1], ids[2], ids[3], ids[4], ids[5], ids[6]],
    8 : [ids[0], ids[1], ids[2], ids[3], ids[4], ids[5], ids[6], ids[7]]
  }
  // console.log(data[ids.length]);



  return new Promise((resolve, reject) => {

    // make the query
    // - looks at number of unlogged tasks
    db.query(
      query[ids.length],
      data[ids.length],
      (err, res) => {
        if (err) {
          // ! cant add string, err here
          reject(err);
        } else {
          resolve(res.rows); // res.rows
        }
      }
    );
  });
};


module.exports = getTasksById;