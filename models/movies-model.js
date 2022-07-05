const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  imdbid: { type: String, unique: true },
  image: String,
  title: String,
  runtimeStr: String,
  genres: String,
  imDbRating: String,
  plot: String,
  stars: String,
  releasedate: String,
});

const movieModel = mongoose.model("movieModel", movieSchema);
module.exports = movieModel;
