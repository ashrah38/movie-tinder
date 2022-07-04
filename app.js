const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
require("./models/db-connection.js");
require("./api-requests/imdbrequest.js");
// initializing port
app.listen(port, () => console.log("port initialized"));
// serving static files
app.use(
  "/node_modules/bootstrap/dist",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist"))
);
app.use("./assets", express.static("assets"));
// importing routes
app.use("/", require("./routes/index.js"));
