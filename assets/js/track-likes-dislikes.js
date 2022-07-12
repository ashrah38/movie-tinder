// add imdb ids of movies liked and disliked by user to these arrays
// every 60 seconds, send these to the server to update the likes and dislikes of the user
const likedMoviesCodes = [];
const dislikedMovieCodes = [];
const moviesAlreadySwipedOn = [];

export const trackMovies = (movieId, flag) => {
  if (flag == "love") {
    likedMoviesCodes.push(movieId);
    moviesAlreadySwipedOn.push(movieId);
  } else {
    dislikedMovieCodes.push(movieId);
    moviesAlreadySwipedOn.push(movieId);
  }
};

export const sendDataToServer = (
  likedMoviesCodes,
  dislikedMovieCodes,
  moviesAlreadySwipedOn
) => {
  const params = JSON.stringify({
    likedMovies: likedMoviesCodes,
    dislikedMovies: dislikedMovieCodes,
    alreadyWatched: moviesAlreadySwipedOn,
  });
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: params,
  };
  const url = "http://localhost:3000/movies";
  fetch(url, options).then((response) => response.json());
  likedMoviesCodes = [];
  dislikedMovieCodes = [];
  moviesAlreadySwipedOn = [];
};
