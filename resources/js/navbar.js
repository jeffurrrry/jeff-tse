// html for the navbar
$("body").prepend(
    `<div id="navbar">
      <a href="index.html">home</a>
      <a href="about.html">about</a>
      <a href="projects.html">projects</a>
      <a href="contact.html" class="right">contact me</a>
    </div>`);


// make navbar disappear when scrolling down
document.addEventListener("DOMContentLoaded", function () {

    var prevScroll = 20;

    window.onscroll = function () { 
        var scroll = window.pageYOffset;

        // if the offset is greater than before, it means scrolled
        // so the navbar should transition up
        if (scroll >= prevScroll) {
            navbar.style.top = "-54px";
        }
        else {
            navbar.style.top = "0px";
        }
        prevScroll = scroll;
    }
});