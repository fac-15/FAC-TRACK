const dbhelpers = require("../model/db_queries/index.js");

// similar to taskCount.js
// - adds completion and confidence for a particular user to each week object in an array

// 1. take array of weeks, and a specific username (added in router/index.js)
// 2. get all tasks (for a specific user) from database
// 3. loop through all weeks
// 4. create 2 arrays of completions and confidence for each week
// 5. process completion and confidence levels
//    a) count number of 'true's in isComplete array
//    b) get average confidence level (for all tasks logged by user)
// 6. add completed_tasks and confidence_levels as properties on each week object

// 1.
const userLogs = (weeks, username) => {

    return new Promise((resolve, reject) => {
    
        // 1. query database to get user logs
        // 2. loop through all weeks and attach logs to week, if they exist
        // 4. loop through each log, and match id to week id

        // 2.
        dbhelpers.getAllTasksForUser(username)
            .then(userLogs => {

                // 3.
                weeks.map(week => {

                    // 4.
                    const isComplete = [];
                    const confLevels = [];

                    userLogs.map(log => {
                        if (log.week_id === week.id) {
                            isComplete.push(log.completion);
                            confLevels.push(log.confidence);
                        }
                    })

                    // ____________________
                    // 5. (and 6.)
                    // week.<property> adds value to week object

                    // no. of tasks completed
                    week.completed_tasks = isComplete.length > 0 ? isComplete.length : '';

                    // confidence level
                    if (confLevels.length > 0){
                        // a) add levels together
                        const total = confLevels.reduce((previous, current) => current += previous);
                        // b) get average
                        const avg = total / confLevels.length;
                        week.confidence_levels = avg;
                    }

                    // 5. add completion and confidence to object
                    // week.completed_tasks = isComplete.length > 0 ? isComplete : '';
                    // week.confidence_levels = confLevels.length > 0 ? confLevels : '';
                    
                    // the above is the same as:
                    // if (isComplete.length > 0){
                    //     week.completed_tasks = isComplete
                    // }

                })
                // console.log(weeks);
                resolve(weeks);

            })
            .catch(logsErr => {
                console.log("error getting user logs ", logsErr);
                reject(logsErr);
            });

    })
  }
  
  module.exports = userLogs;