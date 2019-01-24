// unused
const db = require("../db/db_connection");

const getRepoLink = name => {

return new Promise((resolve, reject) => {
    db.query(`SELECT * from tasks WHERE name = '${name}' `, (err, res) => {
        if (err) {
            reject('week id not found in database ', err);
        }
        else {
            resolve(res.rows);
        }
    })
})
}

module.exports = getRepoLink;
