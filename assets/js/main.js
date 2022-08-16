const headerToggle = document.querySelector("#header__toggle");
const haederMenu = document.querySelector(".header-menu");

headerToggle.addEventListener("click", function (e) {
    e.preventDefault();
    haederMenu.classList.toggle("menu-active");
});
