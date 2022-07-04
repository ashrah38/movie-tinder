// Request to obtain complete movie directory from IMDB (just to be made once, and then, you can just update daily)
// Each page contains 50 titles, run the query for pages 1-40 to obtain movies

const axios = require("axios");
const movieModel = require("../models/movies-model.js");
const options = require("./imdbrequest.js");
require("../models/db-connection.js");

const addMovieDetailsToDb = (response) => {
  const results = response.data.results;
  results.forEach((movie) => {
    const newModel = new movieModel({
      imdbid: movie.imdbid,
      imageurl: movie.imageurl[0],
      title: movie.title,
      genre: movie.genre,
      type: "Movie",
      imdbrating: movie.imdbrating,
      synopsis: movie.synopsis,
      releasedate: movie.released,
    });
    newModel.save((err, result) => {
      if (err) {
        // console.log(err);
      } else {
        // console.log(result);
      }
    });
  });
};

const getMovieDetailsFromIMDB = () => {
  axios
    .request(options)
    .then(function (response) {
      addMovieDetailsToDb(response);
    })
    .catch(function (error) {
      // console.error(error);
    });
};

getMovieDetailsFromIMDB();

/*
How will the movie entries be stored in the db
- imdb code
- title
- type
- genre [array]
- imdb rating
- release date
- synopsis
- image url
*/
