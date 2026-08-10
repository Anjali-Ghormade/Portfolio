const hambergur = document.getElementById("hambergur");
const navLinks = document.querySelector(".nav2");

hambergur.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});                   