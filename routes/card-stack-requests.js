const express = require("Express");
const router = express.Router();
const movieModel = require("../models/movies-model.js");
// users can pick 3 genres at the choose category screen
// then, movies fitting 2 of the 3 genres will be retrieved from the database
// each user will have a list of movies they have already viewed - imdbid will be cross-checked to ensure that there are no duplicates.

router.get("/", (req, res) => {
  if (req.query) {
    const gOne = req.query.gOne;
    const gTwo = req.query.gTwo;
    const gThree = req.query.gThree;
  }
  // Testing purposes
  const genreOne = "Action";
  const genreTwo = "Adventure";
  const genreThree = "Comedy";
  movieModel
    .find({
      genres: { $regex: genreOne, $options: "i" },
      genres: { $regex: genreTwo, $options: "i" },
      genres: { $regex: genreThree, $options: " i" },
    })
    .then((response) => res.send(JSON.stringify(response)));
});

router.post("/", (req, res) => {
  if (req.body) {
    const likedMovies = req.body.likedMovies;
    const dislikedMovies = req.body.dislikedMovies;
    const alreadyWatched = req.body.alreadyWatched;
  }
});

module.exports = router;
