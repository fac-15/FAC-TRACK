const dbhelpers = require("../model/db_queries/index.js");



// 1.
const weekView = week => {
    return new Promise((resolve, reject) => {

            dbhelpers
                .weekExist(week)
                .then(weekData => {
                // 3. if found, get week details
                if (weekData.length > 0) {


                    // 4. get week name and id
                    const weekName = weekData[0].week_name;
                    const weekId = weekData[0].id;

                    // 5. get tasks for by the user for the week
                    dbhelpers
                    .getTaskForUser("dave", weekId)
                    .then(logData => {
                        // console.log("response from getTasksByWeek/router index: ", logData);

                        // _____________________________
                        // need to output unlogged tasks:

                        // 6. get all tasks for the week - ignoring user logs
                        // - need to get url_slug from weeks too
                        dbhelpers
                        .getTasksByWeek(weekId)
                        .then(taskRes => {
                            // 1. make 2 arrays of logged and unlogged ids
                            // 2. if id(s) exists in unlogged that doesn't exist in log, get that id(s)
                            // 3. push item(s) with id(s) to logData array unlogged item

                            // 1.
                            const logged = [];
                            const allTasks = [];
                            logData.map(log => logged.push(log.task_id));
                            taskRes.map(task => allTasks.push(task.id));

                            // 2.
                            const notCompleted = allTasks.filter(obj => logged.indexOf(obj) == -1);


                            // must have unlogged tasks to run this
                            if (notCompleted.length > 0) {
                            dbhelpers
                            .getTasksById(notCompleted)
                                .then(response => {
                                // console.log(response)


                                const allTasksForWeek = [...logData, ...response];
                                
                                // render with with unlogged tasks added to logData
                                res.render("week", {
                                    name: weekName,
                                    tasks: allTasksForWeek,
                                    number: weekId
                                });
                                }
                                )
                                .catch(error => console.log('error getting outstanding tasks: ', error));

                            }
                            
                            // user has made a log for all tasks
                            else {

                            // render the week with all tasks
                            res.render("week", {
                                name: weekName,
                                tasks: logData,
                                number: weekId
                            });

                            }

                            
                        })
                        .catch(taskErr => {
                            console.log(taskErr);
                        });

                    })
                    .catch(err => {
                        // console.log("/weeks error: ", err);
                        res.status(err, 500);
                    });
                } else {
                    // console.log("week not found");
                    res.render("404");
                    return;
                }
                })
                .catch(err => {
                console.log(err);
                });
    }

module.exports = weekView;