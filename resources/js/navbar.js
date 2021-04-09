// make navbar disappear when scrolling down


document.addEventListener("DOMContentLoaded", function () {

    var prevScroll = 20;

    window.onscroll = function () { 
        var scroll = window.pageYOffset;

        if (scroll >= prevScroll) {
            navbar.classList.add("disappear");
        }
        else {
            navbar.classList.remove("disappear");
        }
        prevScroll = scroll;
    }
});