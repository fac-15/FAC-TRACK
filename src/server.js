const app = require("./app");

app.listen(app.get("port"), () => {
  console.log("FAC-TRACK is running on", app.get("port"));
});
