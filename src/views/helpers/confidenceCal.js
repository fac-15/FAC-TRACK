const confidenceCal = confidence => {
  console.log(typeof confidence);
  const agregate = [];
  console.log("log from confidenceCal helper :", confidence);
  // console.log("logging week 2 confidence :", confidence[1]);

  for (let i = 1; i < 3; i++) {
    const result = confidence.filter(instance => instance.week_id === i);
    // console.log(result);

    let culmination = 0;
    let count = 0;
    for (let i = 0; i < result.length; i++) {
      culmination += result[i].confidence;
      count++;
    }

    const answer = culmination / count;
    const object = { confidence: answer };
    agregate.push(object);
  }
  console.log(agregate);
  return agregate;
};

module.exports = confidenceCal;
