// need to figure out how to use this file for projects instead of
// imbedded iframe from p5

/*
lightbulb with switch and 
slider for color temperature
*/

//turn variable store on/off, start as off
let turn = true;
//color of lightbulb list
let light = [10,40, 255];
//slider position
let sliderX = 0;
//gradient
let grad = 0;


//setup function
function setup() {
  //change color mode to hue for smooth transition
  //between colors
  colorMode(HSB, 360, 100, 255);
  createCanvas(400, 400);
}

//returns if mouse within a range of coordinates
function withIn(x1, x2, y1, y2) {
  return (mouseX > x1 && mouseX < x2 && 
          mouseY > y1 && mouseY < y2)
}

//function for slider (from scratch???)
function sliderFunc() {
  //draw the slider
  //push and pop so that translations
  //don't affect other drawings
  push();
  translate(50, 340)
  fill(150);
  rect(0, 0, 300, 10, 10);
  fill(250);
  circle(sliderX, 5, 20);
  pop();
  
  //only allows slider to move when on
  if (!turn) {
  //check to see if the mouse is on slider
  //if mouse is pressed on the slider, x pos changes
  if (mouseX > 45 && mouseX < 355)
    if (withIn(sliderX+25, sliderX+75, 325, 355) &&
       mouseIsPressed) {
        sliderX = mouseX-50;
    }
  }
  /* isn't exaclty a smooth drag because mouse has to be
  within the y range of the slider (need fix) */
}

//function for the light switch
function lightSwitch() {
  //push and pop so that translations and rotations
  //don't affect other drawings
  push();
  translate(60, 150);
  stroke(0);
  
  //checks if switch is pressed
  if (!turn) {
    //rotates switch to seem like pressed
    translate(70, 120);
    rotate(PI);
    /* honestly don't know how rotation works
    just guessed and the checked the coordinates */
  }
  
  //drawing the switch
  fill(255);
  rect(0, 0, 70, 120, 10);
  fill(240);
  rect(10, 20, 50, 40);
  fill(200);
  rect(10, 60, 50, 50);
  fill(100);
  rect(10, 10, 50, 10);
  pop();
}

//lightbulb function with HSB vals as parameters
function lightbulb(light) {
  //draw lightbulb
  noStroke();
  
  //lightbulb color depending on input
  //when turn is true, light is off
  if (turn) {
    fill(0,0,100);
  }
  //when it is on, color depends on slider location
  else {
    //condition splits slider into warm and cool colors
    if (sliderX <= 150) {
      //map allows for smooth transition 
      //with color and saturation from HSB mode
      //element 0 in light list is hue
      //element 1 in light list is saturation
      light[0] = map(sliderX, 0, 150, 10, 50);
      light[1] = map(sliderX, 0, 150, 40, 0);
    }
    else {
      light[0] = map(sliderX, 150, 300, 180, 210);
      light[1] = map(sliderX, 150, 300, 0, 40);
    }
    fill(light);
  }
  
  //drawing the lightbulb
  translate(300, 170);
  circle(0, 0, 100);
  rect(-25, 25, 50, 40, 10);
  fill(180);
  rect(-25, 70, 50, 10, 10);
  rect(-25, 85, 50, 10, 10);
  rect(-14,100, 28, 10, 10);
  
}

//function that returns the value of the switch
//created for ease of use for checking mouse position
function click() {
  //check if mouse is pressed in on area of switch
  if (withIn(60, 110, 170, 210)) {
    if (mouseIsPressed) {
      return false;
    }
  }
  //check if mouse is pressed in off area of switch
  else if (withIn(60, 110, 210, 250)) {
    if (mouseIsPressed) {
      return true;
    }
  }
}

//draw function: continuous loop
function draw() {
  
  //condition: off or on for background
  if (turn)
    background(50);
  else {
    //decreases brightness for background with same color
    // background(light[0], light[1], light[2]-130);
    noFill();
    strokeWeight(4);
    grad = 50;
    for (let i = 1; i < 800; i+=4) {
      stroke(light[0], light[1], light[2] - grad);
      circle(300, 170, i);
      grad += 1;
    }
  }
  
  strokeWeight(1);
  //calls slider function
  sliderFunc();
  
  //check and updates turn variable according to switch
  if (click() != undefined)
    turn = click();
  
  //call light switch function to draw according boolean
  lightSwitch(turn);
  
  //call light bulb function with input of color
  lightbulb(light);
  
}