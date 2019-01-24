module.exports = {
  
  // weeks
  weekExist: require("./weekExist"),
  getAllWeeks: require("./getAllWeeks"),

  // tasks
  taskExist: require("./taskExist"),
  getAllTasks: require("./getAllTasks"),
  getTaskForUser: require("./getTaskForUser"),
  getAllTasksForUser: require("./getAllTasksForUser"),
  getSingleTaskForUser: require("./getSingleTaskForUser"),
  getTasksByWeek: require("./getTasksByWeek"),
  getTaskBySlug: require("./getTaskBySlug"),
  getTasksById: require("./getTasksById"),
  
  // logs
  logData: require("./logData"),

  // unused
  // getTaskByTaskId
  // getConfidenceForUser
  // getRepoLink
  
};
