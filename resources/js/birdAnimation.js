var id = null;
      var elem = document.getElementById("jsBird");
      elem.style.backgroundImage(URL("../images/bird_side.png"));
      elem.style.width = 50 + "px";
      elem.style.top = 300 + "px";
      var pos = 0;
      var adder = .1;
      // var off = False;
      clearInterval(id);
      id = setInterval(frame, 5);
      function frame() {
        if (pos >= 100) {
          pos = 99;
          adder *= -1;
        }
        else {
          pos += adder;
          elem.style.left = pos + "vw";
        }
      }