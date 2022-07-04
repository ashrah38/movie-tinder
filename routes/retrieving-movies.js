const express = require("Express");
const movieModel = require("../models/movies-model.js");
const router = express.Router();

// can pick up to 5 genres
router.get("/", (req, res) => {
  if (req.body) {
    const genres = req.body.genres;
  }
  movieModel
    .find({ genre: { $all: genres } })
    .then((res) => res.send(JSON.stringify(res)));
});

module.exports = router;
