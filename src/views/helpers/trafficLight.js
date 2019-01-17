const trafficLight = number => {
  const colour = {
    1: "red",
    2: "yellow",
    3: "green"
  };
  return colour[number];
};

module.exports = trafficLight;
