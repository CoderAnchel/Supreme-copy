const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const nav_Responsive = document.querySelector(".nav1-responsive");

burger.addEventListener("click", () => {
    close.classList.toggle("opn");
    burger.classList.toggle("cls");
    nav_Responsive.classList.toggle("opn")
});

close.addEventListener("click", () => {
    burger.classList.toggle("opn");
    close.classList.toggle("cls");
});