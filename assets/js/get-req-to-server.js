const getMoviesFromServer = (genreOne, genreTwo, genreThree) => {
  fetch("http://localhost:3000/movies?genreOne=Action")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((entry) => {
        const image = entry.image;
        const title = entry.title;
        const genres = entry.genres;
        const releasedate = entry.releasedate;
        const runtime = entry.runtimeStr;
        const plot = entry.plot;
        const cast = entry.stars;
      });
    });
};

const prepareCardsForEachMovie = (
  image,
  title,
  genres,
  releasedate,
  runtime,
  plot,
  cast
) => {};
