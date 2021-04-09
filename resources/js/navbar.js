// make navbar stick to the top even when scrolling

// when page scrolls, execute addSticky() function
window.onscroll = function() {addSticky()};

// get the navbar
var navbar = document.getElementsByClassName("navbar");

// get the offset posisiont of the navbar
var sticky = navbar.offsetTop;

// add sticky id to the navbar when scroll and remove when it's the top
function addSticky() {
    if (window.pageYOffset >= sticky) 
        navbar.classList.add("sticky");
    else
        navbar.classList.remove("sticky")
}
