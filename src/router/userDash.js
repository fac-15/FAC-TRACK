const dbhelpers = require("../model/db_queries/index.js");

// outputs details for a specific user on the dashboard
const userDash = (weeks, username) => {

    return new Promise((resolve, reject) => {
    
        // 1. already got all weeks
        // 2. get all user logs
        // 3. loop through all weeks and attach logs to week, if they exist
        // 4. loop through each log, and match id to week id

        // 2. query database to get user logs
        dbhelpers.getAllTasksForUser(username)
            .then(userLogs => {

                // 3. loop through all weeks
                weeks.map(week => {

                    const isComplete = [];
                    const confLevels = [];
                    // 4. match ids
                    userLogs.map(log => {
                        if (log.week_id === week.id) {
                            isComplete.push(log.completion);
                            confLevels.push(log.confidence);
                        }
                    })

                    // use week.id to get the number of tasks for the week from the database
                    
                    // count number of 'true's in isComplete array
                    // divide total number of tasks for the week by sum of confidence levels

                    // add completion and confidence to object
                    week.completed_tasks = isComplete.length > 0 ? isComplete : '';
                    week.confidence_levels = confLevels.length > 0 ? confLevels : '';
                    // the above is the same as:
                    // if (isComplete.length > 0){
                    //     week.completed_tasks = isComplete
                    // }

                    console.log(week);

                })
                resolve(weeks);

            })
            .catch(logsErr => {
                console.log("error getting user logs ", logsErr);
                reject(logsErr);
            });

    })
  }
  
  module.exports = userDash;