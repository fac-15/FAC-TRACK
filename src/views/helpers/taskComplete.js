const taskComplete = completion => {
  const complete = {
    true: "tick",
    false: "arrow"
  };

  return complete[completion];
};

module.exports = taskComplete;
