// grabs the hamburger icon and the navbar from the HTML and store them in variables
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// When the hamburger icon is clicked, two things toggle:
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}