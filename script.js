const burger = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const Kamote = document.querySelector(".Kamote");
burger.addEventListener("click", () => {
  Kamote.classList.toggle("open")
  burger.classList.toggle("open");
  headerNav.classList.toggle("open");
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY >= 100) {
  header.classList.add("blue");
} else {
  header.classList.remove("blue");
}
})

const links = document.querySelectorAll(".footer__links__item h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("open");
    link.querySelector("i").classList.toggle("open");
  });
});

