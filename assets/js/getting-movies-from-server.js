import { initCards } from "./card-stack.js";
import { addSwipingFuncionalityToCards } from "./swiping-functionality.js";
import { addButtonFunctionality } from "./button-functionality.js";
const listOfMovieCards = [];
const cardStack = document.querySelector(".card-stack");

export const getMoviesFromServerAndDisplay = async (gOne, gTwo, gThree) => {
  fetch(
    `http://localhost:3000/movies?genreOne=${gOne}&genreTwo=${gTwo}&genreThree=${gThree}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((entry) => {
        prepareCardsForEachMovie(
          entry.imdbid,
          entry.image,
          entry.title,
          entry.genres,
          entry.releasedate,
          entry.runtimeStr,
          entry.plot,
          entry.stars,
          listOfMovieCards
        );
      });
      return listOfMovieCards;
    })
    .then((listOfMovieCards) => {
      listOfMovieCards.forEach((card) => {
        cardStack.innerHTML += card;
      });
      addSwipingFuncionalityToCards();
      addButtonFunctionality();
      setTimeout(() => initCards(), 3000);
    });
};

const prepareCardsForEachMovie = (
  id,
  image,
  title,
  genres,
  releasedate,
  runtime,
  plot,
  cast,
  listOfMovieCards
) => {
  let movieCard = `<div class="movie-card" id="${id}">
  <img
    class="movie-card-image"
    src="${image}"
    alt=""
  />
  <button class="more-info-btn btn-sm btn-info">More Info</button>
  <div class="more-info text-white px-3 py-3">
    <button class="close-info-btn text-white">
      <i class="bi bi-x-lg"></i>
    </button>
    <h2 class="movie-title">${title}</h2>
    <h4 class="genres">${genres}</h4>
    <h6 class="release-date">${releasedate}</h6>
    <h6 class="run-time">${runtime}</h6>
    <p class="plot my-5">${plot}</p>
    <p class="cast">${cast}</p>
  </div>
</div>`;
  listOfMovieCards.push(movieCard);
};
