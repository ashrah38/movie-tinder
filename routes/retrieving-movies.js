const express = require("Express");
const movieModel = require("../models/movies-model.js");
const router = express.Router();
// users can pick 3 genres at the choose category screen
// then, movies fitting 2 of the 3 genres will be retrieved from the database
// each user will have a list of movies they have already viewed - imdbid will be cross-checked to ensure that there are no duplicates.

router.get("/", (req, res) => {
  if (req.body) {
    const genres = req.body.genres;
    const alreadyWatched = req.body.imdbids;
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
    .then((res) => res.send(JSON.stringify(res)));
});

module.exports = router;
