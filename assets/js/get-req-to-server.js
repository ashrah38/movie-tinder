const movieCardOne = document.querySelector(".mc-one");
const movieCardTwo = document.querySelector(".mc-two");
const movieCardThree = document.querySelector(".mc-three");
const movieCardFour = document.querySelector(".mc-four");
const movieCardFive = document.querySelector(".mc-five");
let listOfMovieCards = [];
const getMoviesFromServer = () => {
  fetch("http://localhost:3000/movies?genreOne=Action")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((entry) => {
        prepareCardsForEachMovie(
          entry.image,
          entry.title,
          entry.genres,
          entry.releasedate,
          entry.runtimeStr,
          entry.plot,
          entry.stars
        );
      });
      return listOfMovieCards;
    })
    .then((listOfMovieCards) => {});
};

const prepareCardsForEachMovie = (
  image,
  title,
  genres,
  releasedate,
  runtime,
  plot,
  cast
) => {
  let movieCard = `<div class="card movie-card">
  <img class="card-img-top img-responsive" src="${image}" alt="" />
  <button class="btn btn-info btn-sm show-info">More Info</button>
  <div class="more-info text-white px-3 py-3">
    <button class="close-info">
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

getMoviesFromServer();
