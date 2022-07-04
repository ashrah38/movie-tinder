// Request to obtain complete movie directory from IMDB (just to be made once, and then, you can just update daily)
// There are 26 genres in total. Aim to obtain 1000 movies for each genre (without currently accounting for duplicates).
// Make an API request to retrieve the top 250 movies pertaining to one genre, and repeat 8 times (1-250)(251-500)(501-750)(751-1000) and so on.
// Do this for each of the genres and keep storing to the database.
// PROGRESS
// Action (1-1000) Adventure (1-1000) Animation () Biography () Comedy () Crime () Documentary () Drama () Family ()
// Fantasy () Film-Noir () Game-Show () History () Horror () Music () Musical () Mystery () News () Reality_TV ()
// Romance () Sci_Fi () Sport () Talk_Show () Thriller () War () Western ()
require("dotenv").config();
const api_key = process.env.API_KEY;
const axios = require("axios");
const movieModel = require("../models/movies-model.js");
require("../models/db-connection.js");

const options = {
  method: "GET",
  url: `https://imdb-api.com/API/AdvancedSearch/${api_key}?title_type=feature,tv_movie,short&genres=adventure&languages=en&moviemeter=751,1000&count=250`,
  headers: {},
};

const getMovieDetailsFromIMDB = () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results.length);
      addMovieDetailsToDb(response);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const addMovieDetailsToDb = (response) => {
  const results = response.data.results;
  results.forEach((movie) => {
    const newModel = new movieModel({
      imdbid: movie.id,
      image: movie.image,
      title: movie.title,
      runtimeStr: movie.runtimeStr,
      genres: movie.genres,
      imDbRating: movie.imDbRating,
      plot: movie.plot,
      stars: movie.stars,
      releasedate: movie.description,
    });
    newModel.save((err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  });
};

getMovieDetailsFromIMDB();
