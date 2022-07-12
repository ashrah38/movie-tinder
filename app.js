const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
require("./models/db-connection.js");

// built-in middleware to support JSON-encoded bodies for POST requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initializing port
app.listen(port, () => console.log("port initialized"));
// serving static files
app.use(
  "/node_modules/bootstrap/dist",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist"))
);
app.use("/assets", express.static(path.join(__dirname, "/assets")));
// importing routes
app.use("/", require("./routes/index.js"));
app.use("/movies", require("./routes/card-stack-requests.js"));
