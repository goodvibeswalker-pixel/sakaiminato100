const themeButtons = document.querySelectorAll(".theme-card-button");
const themeDetail = document.querySelector("#themeDetail");
const detailPrompt = document.querySelector("#detailPrompt");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    themeButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-expanded", "false");
    });

    button.classList.add("is-active");
    button.setAttribute("aria-expanded", "true");
    detailPrompt.classList.add("is-hidden");
    themeDetail.classList.add("is-visible");
    themeDetail.focus({ preventScroll: true });
  });
});
