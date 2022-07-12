// step1: make get request to server and retrieve movies.
// step2: make moviecards and populate array.
// step3: add functionality to buttons and swipes.
import { getMoviesFromServerAndDisplay } from "./getting-movies-from-server.js";
import { addSwipingFuncionalityToCards } from "./swiping-functionality.js";
import { sendDataToServer } from "./track-likes-dislikes.js";

const likedMoviesCodes = ["1231"];
const dislikedMovieCodes = ["3232"];
const moviesAlreadySwipedOn = ["5454"];

getMoviesFromServerAndDisplay();
addSwipingFuncionalityToCards();
// every 10s, send updated data to server.
setInterval(
  () =>
    sendDataToServer(
      likedMoviesCodes,
      dislikedMovieCodes,
      moviesAlreadySwipedOn
    ),
  10000
);
