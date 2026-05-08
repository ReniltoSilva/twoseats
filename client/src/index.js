const cover_overview_background = document.querySelector(
  ".cover_overview_background",
);
const overview = document.querySelector(".overview");

cover_overview_background.addEventListener("click", () => {
  overview.classList.toggle("hide_overview");
  console.log("hello");
});
