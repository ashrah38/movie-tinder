const express = require("Express");
const router = express.Router();
const path = require("path");
const viewsDirectory = path.join(__dirname, "../views");

router.get("/", (req, res) => {
  res.sendFile("homepage.html", { root: viewsDirectory });
});

module.exports = router;
