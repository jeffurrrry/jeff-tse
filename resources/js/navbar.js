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