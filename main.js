const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-Links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
scrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
scrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollReveal().reveal(".header_links", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".steps_card", {
    ...scrollRevealOption,
    interval: 500,
});
