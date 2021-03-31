var id = null;
const numOfBirds = 3;

var elem = document.getElementById("jsBird");

// adds the inputed number of identical birds to an array
function createBirds(num) {
  var bird;
  for (var i = 0; i < num; i++) {
    bird[i] = document.createElement("img");
    bird[i].src = "../images/bird_side.png";
  }
  return bird;
}

var bird = createBirds(numOfBirds);

// appends all the birds in the bird array to the elem
for (var i = 0; i < numOfBirds; i++) {
  elem.appendChild(bird[i]);
}

// animating the bird (have to figure out how to do it to each bird)
var posX = 0;
var posY = elem.style.getPropertyValue("top");
posY = posY.substring(0, posY.length - 2);
var adder = .05;
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
    elem.style.top = String(parseInt(posY) + 30 
                      * Math.sin(posX * 2 * Math.PI / 75)) + "px";
  }
}