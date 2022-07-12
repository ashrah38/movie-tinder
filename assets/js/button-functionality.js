export const addButtonFunctionality = () => {
  const moreInfoOverlays = document.querySelectorAll(".more-info");
  const moreInfoBtns = document.querySelectorAll(".more-info-btn");
  const closeInfoBtns = document.querySelectorAll(".close-info-btn");
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
};
