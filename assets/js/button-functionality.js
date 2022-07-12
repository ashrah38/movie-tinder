import { trackMovies } from "./track-likes-dislikes.js";

export const addButtonFunctionality = () => {
  const moreInfoBtns = document.querySelectorAll(".more-info-btn");
  const closeInfoBtns = document.querySelectorAll(".close-info-btn");
  const likeBtn = document.querySelector(".like-btn");
  const dislikeBtn = document.querySelector(".dislike-btn");
  const cardDeck = document.querySelector(".card-stack");

  moreInfoBtns.forEach((moreInfoBtn) => {
    moreInfoBtn.addEventListener("click", (event) => {
      event.target.nextElementSibling.style.display = "inline";
    });
  });

  closeInfoBtns.forEach((closeInfoBtn) => {
    closeInfoBtn.addEventListener("click", (event) => {
      event.target.parentElement.parentElement.style.display = "none";
    });
  });

  likeBtn.addEventListener("click", () => {
    let topCard = cardDeck.lastChild;
    let movieId = topCard.id;
    topCard.style.transform = "translate(3000px) rotate(30deg)";
    trackMovies(movieId, "like");
    setTimeout(() => {
      cardDeck.removeChild(document.getElementById(movieId));
    }, 200);
  });
  dislikeBtn.addEventListener("click", () => {
    let topCard = cardDeck.lastChild;
    let movieId = topCard.id;
    topCard.style.transform = "translate(-3000px) rotate(-30deg)";
    trackMovies(movieId, "dislike");
    setTimeout(() => {
      cardDeck.removeChild(document.getElementById(movieId));
    }, 100);
  });
};
