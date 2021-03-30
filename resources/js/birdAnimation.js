var id = null;
var elem = document.getElementById("jsBird");
// elem.style.width = "500px";
// elem.style.backgroundImage = "url(../images/bird_side.png)";
var posX = 0;
var posY = elem.style.getPropertyValue("top");
posY = posY.substring(0, posY.length - 2);
var adder = .05;
// var off = False;
clearInterval(id);
id = setInterval(frame, 1);
function frame() {
  if (posX >= 100) {
    posX = 99;
    adder *= -1;
    elem.style.transform = "scaleX(-1)";
  }
  else if (posX <= -5) {
    posX = -4;
    adder *= -1
    elem.style.transform = "scaleX(1)";
  }
  else {
    posX += adder;
    elem.style.left = posX + "vw";
    elem.style.top = String(parseInt(posY) + 30 * Math.sin(posX * 2 * Math.PI / 75)) + "px";
  }
}