/*
Jeffery Tse
balloon-pump
annimation of pumping a balloon
*/

// balloon object
let balloon = {
    color: [],
  
    //ellipse parameters
    w: 150,
    h: 180,
  
    //size
    scale: 1
  };
  
  //function to create new balloon
  function newBall() {
    let r = random(100, 255);
    let g = random(100, 255);
    let b = random(100, 255);
    balloon.color = [r, g, b, 255];
  }
  
  let pumpY = 100;
  let pumpTop = true;
  let pumpBot = false;
  
  //function that annimates pump moving
  function movePump() {
    if (mouseY > 110 && mouseY < 240)
      pumpY = mouseY;
    else if (mouseY < 100 && mouseY > 0)
      pumpY = map(mouseY, 0, 100, 100, 110);
    else if (mouseY > 240 && mouseY < height)
      pumpY = map(mouseY, 240, height, 240, 250);
    fill(50);
    rect(95, pumpY, 10, 200);
    rect(50, pumpY, 100, 10, 4);
    fill(100);
    ellipse(100, 450, 100, 30);
    fill(255, 50, 50);
    rect(80, 300, 40, 150, 16);
    fill(150);
    rect(80, 300, 40, 20, 5, 5, 0, 0);
  }
  
  function setup() {
    createCanvas(500, 500);
    //random colored balloon
    newBall();
  }
  
  //variable used outside of the draw loop
  let factor = .999;
  let inflate = 5;
  let wait = true;
  let mili;
  let i;
  let popped = false;
  const words = ["oops?", "another one?", "pump it!!",
               "it's not\nthat hard", "come on...",
                "you got\nthis", "given up?"];
  const popWords = ["wow you're\namazing!", "good job!!!",
                    "do it again!", "you're strong!",
                    "mucho swole..", "lol it\nnever ends"];
  
  function draw() {
    background(220);
    strokeWeight(3);
    
  
    //drawing the balloon
    push();
    stroke(50, balloon.color[3]);
    fill(balloon.color);
    translate(width / 2 * 1.3, height / 2);
    scale(balloon.scale);
    quad(-5, 80, 5, 80, 10, 100, -10, 100);
    ellipse(0, 0, balloon.w, balloon.h);
    pop();
  
    //shrinking over time
    balloon.scale *= factor;
    factor -= .0001
    if (balloon.scale < 0.2) {
      background(220);
      if (wait) {
        mili = millis()
        wait = false;
        i = parseInt(random(0,words.length));
      }
      if (!wait && millis() > mili + 1000) {
        balloon.scale = 1;
        factor = .999
        newBall();
        wait = true;
      }
    }
    
    //popping balloon
    if (balloon.scale > 2 && balloon.scale < 6) {
      balloon.scale += .3;
      balloon.color[3] -= 20
    }
    if (balloon.scale > 5.5) {
      background(220);
      if (wait) {
        mili = millis()
        wait = false;
        popped = true;
        i = parseInt(random(0,popWords.length));
      }
      if (!wait && millis() > mili + 1000) {
        balloon.scale = 1;
        factor = .999;
        newBall();
        wait = true;
        popped = false;
      }
    }
    
    //display message
    if(!wait){
      textSize(30);
      textAlign(CENTER, CENTER)
      if (!popped)
        text(words[i], width / 2 * 1.3, height / 2);
      else
        text(popWords[i], width / 2 * 1.3, height / 2);
    }
  
    movePump();
  
    //pumping balloon
    if (pumpY > 230) {
      pumpBot = true;
    }
    if (pumpY < 120) {
      pumpBot = false;
      pumpTop = true;
    }
    if (pumpBot && pumpTop && inflate != 0 && wait) {
      balloon.scale += .025;
      factor = .999
      inflate -= 1;
    } else if (pumpBot && pumpTop && inflate == 0) {
      inflate = 5;
      pumpBot = false;
      pumpTop = false;
    }
    
  
  }