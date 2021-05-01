const $nav = document.querySelector(".nav");
const $hamburger = document.querySelector(".nav-hamburger");
const $header = document.querySelector(".header");

$hamburger.addEventListener("click", () => {
  $nav.classList.toggle("is-visible");
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    $header.classList.add("is-sticky");
  } else {
    $header.classList.remove("is-sticky");
  }
});
