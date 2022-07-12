const allMovieCards = document.querySelectorAll(".movie-card");
const cardStack = document.querySelector(".card-stack");
const loader = document.querySelector(".loader");
export const initCards = () => {
  let baseIndex = 40;
  allMovieCards.forEach((card) => {
    card.style.zIndex = baseIndex;
    baseIndex -= 1;
  });
  loader.style.display = "none";
  cardStack.style.display = "flex";
};
