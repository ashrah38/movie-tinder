import { trackMovies } from "./track-likes-dislikes.js";

export const addSwipingFuncionalityToCards = () => {
  const AllMovieCards = document.querySelectorAll(".movie-card");
  AllMovieCards.forEach((movieCard) => {
    const hammertime = new Hammer(movieCard);

    hammertime.on("pan", (event) => {
      movieCard.classList.add("moving");
    });

    hammertime.on("pan", (event) => {
      if (event.center.x === 0 && event.center.y === 0) return;
      var xMulti = event.deltaX;
      var yMulti = event.deltaY;
      var rotate = xMulti * yMulti * 0.0;

      event.target.style.transform =
        "translate(" +
        event.deltaX +
        "px, " +
        event.deltaY +
        "px) rotate(" +
        rotate +
        "deg)";
    });

    hammertime.on("panend", (event) => {
      movieCard.classList.remove("moving");
      const moveOutWidth = document.body.clientWidth;
      const keep =
        Math.abs(event.deltaX) < 90 || Math.abs(event.velocityX) < 0.5;

      if (keep) {
        event.target.style.transform = "";
      } else {
        const endX = Math.max(
          Math.abs(event.velocityX) * moveOutWidth,
          moveOutWidth
        );
        const toX = event.deltaX > 0 ? endX : -endX;
        const endY = Math.abs(event.velocityY) * moveOutWidth;
        const toY = event.deltaY > 0 ? endY : -endY;
        const xMulti = event.deltaX;
        const yMulti = event.deltaY;
        const rotate = xMulti * yMulti * 0.04;

        event.target.style.transform =
          "translate(" +
          toX +
          "px, " +
          (toY + event.deltaY) +
          "px) rotate(" +
          rotate +
          "deg)";
        updateSwipedCardsAndTrackInfo(event);
      }
    });
  });
};

const updateSwipedCardsAndTrackInfo = (event) => {
  const cardDeck = document.querySelector(".card-stack");
  const eventDeltaX = event.deltaX;
  const movieId = event.target.id;
  let flag = "";
  if (eventDeltaX < 0) {
    flag = "dislike";
  } else {
    flag = "like";
  }
  trackMovies(movieId, flag);
  setTimeout(() => {
    cardDeck.removeChild(document.getElementById(movieId));
  }, 400);
};
