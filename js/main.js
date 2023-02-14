const selectElement = (s) => document.querySelector(s);
const selectElementAll = (s) => document.querySelectorAll(s);

const toggleOpen = selectElement("#toggle-open");
const toggleClose = selectElement("#toggle-close");
const navBar = selectElement("#nav-bar");
const links = selectElementAll(".nav-link");
const container = selectElementAll(".container");

// toggle open when click
toggleOpen.addEventListener("click", () => {
    navBar.style.width = "250px";
});

// toggle close when click
toggleClose.addEventListener("click", () => {
    navBar.style.width = "0";
});

// close side bar after clicking any links
// links.forEach((link) => {
//     link.addEventListener("click", () => {
//         navBar.style.width = "0";
//     });
// });