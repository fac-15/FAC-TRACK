const dbhelpers = require("../model/db_queries/index.js");

// similar to userLogs.js
// - adds a number of tasks to each week object in an array

// 1. take array of weeks with user details (added in router/index.js)
// 2. get all tasks from database
// 3. loop through all weeks
// 4. create array of tasks for each week
// 5. add array length as task_count property on each week object

// 1.
const taskCount = weeks => {
    return new Promise((resolve, reject) => {

        // 2.
        dbhelpers.getAllTasks()
            .then(tasks => {

                // 3.
                weeks.map(week => {

                    // 4.
                    const tasksForWeek = [];
                    tasks.map(task => {
                        if (task.week_id === week.id) {
                            tasksForWeek.push(task.week_id);
                        }
                    })

                    // 5.
                    week.task_count = tasksForWeek.length;

                })
                resolve(weeks);
            })
            .catch(tasksErr => {
                console.log("error getting tasks ", tasksErr);
                reject(tasksErr);
            });
            
        })
    }

module.exports = taskCount;