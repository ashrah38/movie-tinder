const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  imdbid: { type: String, unique: true },
  imageurl: String,
  title: String,
  genre: [String],
  type: String,
  imdbrating: Number,
  synopsis: String,
  releasedate: Number,
});

const movieModel = mongoose.model("movieModel", movieSchema);
module.exports = movieModel;
