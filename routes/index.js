const express = require("Express");
const router = express.Router();
const path = require("path");
const viewsDirectory = path.join(__dirname, "../views");

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: viewsDirectory });
});

module.exports = router;
