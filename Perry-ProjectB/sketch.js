let colorPicker;
let fontReg;
let headbutton = [];
let eyesone = [];
let eyestwo = [];
let noseone = [];
let nosetwo = [];
let mouthone = [];
let hairone = [];
function setup() {
  createCanvas(600, 600);
  background(180);
  noStroke();

  //canvas for character
  fill(255);
  rect(10, 10, 580, 300, 20);

  //customization options select
  rect(10, 320, 580, 270, 20);

  colorPicker = createColorPicker("#EED3A5");
  colorPicker.position(730, 440);
  

  headbutton.push(new headButton(27, 360, 30));
  eyesone.push(new eyesOne(135, 360, 5));
  eyestwo.push(new eyesTwo(243, 360, 30));
  noseone.push(new noseOne(351, 360, 30));
  nosetwo.push(new noseTwo(449, 360, 30));
  mouthone.push(new mouthOne(27, 470, 5));
  hairone.push(new hairOne(135, 470, 5));
}

function draw() {
  fill(0);
  textSize(20);
  text("color:", 528, 345);
  // fill(colorPicker.color())
  // circle(width/2,height/4,100)
  text("base-", 35, 350);
  text("eyes-", 138, 350);
  text("noses-", 358, 350);
  text("mouths-", 27, 460);
  text("hair-", 138, 460);

  for (let i = 0; i < headbutton.length; i++) {
    let btn = headbutton[i];
    btn.checkMouse();
    btn.display();
  }

  for (let i = 0; i < eyesone.length; i++) {
    let eye1 = eyesone[i];
    eye1.checkMouse();
    eye1.display();
  }
  for (let i = 0; i < eyestwo.length; i++) {
    let eye2 = eyestwo[i];
    eye2.checkMouse();
    eye2.display();
  }
  for (let i = 0; i < noseone.length; i++) {
    let no1 = noseone[i];
    no1.checkMouse();
  }
  for (let i = 0; i < nosetwo.length; i++) {
    let no2 = nosetwo[i];
    no2.checkMouse();
  }
  for (let i = 0; i < mouthone.length; i++) {
    let mouth1 = mouthone[i];
    mouth1.checkMouse();
    //mouth1.display();
  }
  for (let i = 0; i < hairone.length; i++) {
    let hair1 = hairone[i];
    hair1.checkMouse();
  }
}
class headButton {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    // color
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouse() {
    let distance = dist(this.x + 50, this.y + 30, mouseX, mouseY);
    if (distance < 40) {
      // mouse is in the area
      fill(27, 150, 222);
      push();
      stroke(27, 150, 222);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      fill(27, 150, 222);
      ellipse(this.x + 42, this.y + 49, 25, 15);
      pop();
      noStroke();

      if (mouseIsPressed) {
        push();
        translate(0, -30);
        noFill();
        push();
        blendMode(MULTIPLY);
        stroke(colorPicker.color());
        strokeWeight(1);
        ellipse(288, 295, 150, 70);
        pop();
        noStroke();
        fill(colorPicker.color());
        rect(270, 238, 35, 40, 20);
        rect(257, 260, 60, 20, 20);
        circle(287, 165, 180);
        ellipse(287, 274, 60, 30);
        pop();
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      push();
      stroke(0);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      fill(70);
      ellipse(this.x + 42, this.y + 49, 25, 15);
      pop();
      noStroke();
    }
  }
  display() {
    push();
    noStroke();
    circle(this.x + 42, this.y + 25, 30);
    rect(this.x + 37, this.y + 35, 10, 10, 20);
    pop();
  }
}

class eyesOne {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    // color
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouse() {
    let distance = dist(this.x + 50, this.y + 30, mouseX, mouseY);
    if (distance < 40) {
      // mouse is in the area
      fill(27, 150, 222);
      push();
      stroke(27, 150, 222);
      strokeWeight(2);

      noFill();
      rect(this.x, this.y, 85, 68, 20);
      pop();
      noStroke();

      if (mouseIsPressed) {
        noStroke();
        push();
        strokeWeight(1);
        stroke(0);
        fill(255);
        ellipse(247, 125, 30, 40);
        ellipse(330, 125, 30, 40);
        fill(colorPicker.color());
        circle(252, 125, 20);
        circle(335, 125, 20);
        noStroke();
        fill(255);
        circle(246, 119, 10);
        circle(329, 119, 10);
        pop();
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      push();
      stroke(0);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      strokeWeight(1);
      fill(255);
      ellipse(this.x + 63, this.y + 33, 20, 25);
      ellipse(this.x + 23, this.y + 33, 20, 25);
      pop();
      noStroke();
    }
  }
  display() {
    push();
    stroke(0);
    strokeWeight(1);
    circle(this.x + 66, this.y + 33, 15);
    circle(this.x + 26, this.y + 33, 15);
    fill(255);
    noStroke();
    circle(this.x + 60, this.y + 30, 9);
    circle(this.x + 20, this.y + 30, 9);
    pop();
  }
}

class eyesTwo {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    // color
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouse() {
    let distance = dist(this.x + 50, this.y + 30, mouseX, mouseY);
    if (distance < 40) {
      // mouse is in the area
      fill(27, 150, 222);
      push();
      stroke(27, 150, 222);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      pop();
      noStroke();

      if (mouseIsPressed) {
        noStroke();
        push();
        stroke(0);
        strokeWeight(1);
        fill(255);
        ellipse(247, 125, 30, 40);
        ellipse(330, 125, 30, 40);
        fill(colorPicker.color());
        noStroke();
        circle(241, 123, 13);
        circle(252, 123, 13);
        triangle(235, 126, 246, 137, 258, 126);
        fill(255);
        ellipse(238, 126, 10, 5);

        fill(colorPicker.color());
        circle(324, 123, 13);
        circle(335, 123, 13);
        triangle(318, 126, 329, 137, 341, 126);
        fill(255);
        ellipse(321, 126, 10, 5);
        pop();
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      push();
      stroke(0);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      strokeWeight(1);
      fill(255);
      ellipse(this.x + 63, this.y + 33, 20, 25);
      ellipse(this.x + 23, this.y + 33, 20, 25);
      pop();
      noStroke();
    }
  }
  display() {
    push();
    circle(this.x + 59, this.y + 31, 8);
    circle(this.x + 66, this.y + 31, 8);
    triangle(
      this.x + 54,
      this.y + 30,
      this.x + 63,
      this.y + 42,
      this.x + 71,
      this.y + 30
    );
    circle(this.x + 20, this.y + 31, 8);
    circle(this.x + 27, this.y + 31, 8);
    triangle(
      this.x + 15,
      this.y + 30,
      this.x + 24,
      this.y + 42,
      this.x + 32,
      this.y + 30
    );

    // circle(this.x + 66, this.y + 33, 15);
    // circle(this.x + 26, this.y + 33, 15);
    // fill(255);
    // noStroke();
    // circle(this.x + 60, this.y + 30, 9);
    // circle(this.x + 20, this.y + 30, 9);
    pop();
  }
}

class noseOne {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    // color
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouse() {
    let distance = dist(this.x + 50, this.y + 30, mouseX, mouseY);
    if (distance < 40) {
      // mouse is in the area
      fill(27, 150, 222);
      stroke(0);
      strokeWeight(1);
      circle(this.x + 38, this.y + 33, 30);
      noStroke();
      fill(255);
      ellipse(this.x + 42, this.y + 28, 10, 6);
      push();
      stroke(27, 150, 222);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 75, 68, 20);
      pop();
      noStroke();

      if (mouseIsPressed) {
        fill(colorPicker.color());
        stroke(0);
        strokeWeight(1);
        ellipse(287, 152, 30);
        noStroke();
        fill(255);
        ellipse(291, 144, 10, 6);
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      stroke(0);
      strokeWeight(1);
      circle(this.x + 38, this.y + 33, 30);
      noStroke();
      fill(255);
      ellipse(this.x + 42, this.y + 28, 10, 6);
      push();
      noFill();
      stroke(0);
      strokeWeight(2);
      rect(this.x, this.y, 75, 68, 20);
      pop();
      noStroke();
    }
  }
}
class noseTwo {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    // color
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouse() {
    let distance = dist(this.x + 50, this.y + 30, mouseX, mouseY);
    if (distance < 40) {
      // mouse is in the area
      fill(27, 150, 222);
      stroke(0);
      strokeWeight(1);
      triangle(
        this.x + 40,
        this.y + 10,
        this.x + 20,
        this.y + 50,
        this.x + 60,
        this.y + 50
      );
      push();
      noStroke();
      blendMode(MULTIPLY);
      fill(27, 150, 222);
      triangle(
        this.x + 40,
        this.y + 13,
        this.x + 50,
        this.y + 50,
        this.x + 60,
        this.y + 50
      );
      pop();
      fill(255);
      noStroke();
      ellipse(this.x + 47, this.y + 40, 10, 7);
      push();
      stroke(27, 150, 222);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 75, 68, 20);

      noStroke();

      if (mouseIsPressed) {
        stroke(0);
        strokeWeight(1);
        fill(colorPicker.color());
        push();
        translate(3, 5);
        triangle(285, 120, 270, 161, 300, 161);
        noStroke();
        push();
        blendMode(MULTIPLY);
        fill(colorPicker.color());
        triangle(286, 124, 290, 161, 300, 161);
        pop();
        fill(255);
        ellipse(291, 152, 10, 5);
        pop();
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      stroke(0);
      strokeWeight(1);
      triangle(
        this.x + 40,
        this.y + 10,
        this.x + 20,
        this.y + 50,
        this.x + 60,
        this.y + 50
      );
      push();
      noStroke();
      blendMode(MULTIPLY);
      fill(colorPicker.color());
      triangle(
        this.x + 40,
        this.y + 13,
        this.x + 50,
        this.y + 50,
        this.x + 60,
        this.y + 50
      );
      pop();
      fill(255);
      noStroke();
      ellipse(this.x + 47, this.y + 40, 10, 7);
      push();
      noFill();
      stroke(0);
      strokeWeight(2);
      rect(this.x, this.y, 75, 68, 20);
      pop();
      noStroke();
    }
  }
}
class mouthOne {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    // color
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouse() {
    let distance = dist(this.x + 50, this.y + 30, mouseX, mouseY);
    if (distance < 40) {
      // mouse is in the area
      noFill();
      stroke(27, 150, 222);
      strokeWeight(2);
      curve(
        this.x + 10,
        this.y - 2,
        this.x + 20,
        this.y + 22,
        this.x + 55,
        this.y + 22,
        this.x + 60,
        this.y - 5
      );
      stroke(27, 150, 222);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 75, 45, 20);

      noStroke();

      if (mouseIsPressed) {
        push();
        //blendMode(MULTIPLY);
        stroke(colorPicker.color());
        noFill();
        translate(9, -5);
        curve(262, 128, 271, 190, 290, 190, 312, 128);
        pop();
      }
    } else {
      // mouse is out of the area
      stroke(colorPicker.color());
      strokeWeight(2);
      curve(
        this.x + 10,
        this.y - 2,
        this.x + 20,
        this.y + 22,
        this.x + 55,
        this.y + 22,
        this.x + 60,
        this.y - 5
      );
      noFill();
      stroke(0);
      strokeWeight(2);
      rect(this.x, this.y, 75, 45, 20);

      noStroke();
    }
  }
}
class hairOne {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    // color
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouse() {
    let distance = dist(this.x + 50, this.y + 30, mouseX, mouseY);
    if (distance < 40) {
      // mouse is in the area
      fill(27, 150, 222);
      push();
      stroke(27, 150, 222);
      strokeWeight(2);
      push()
      translate(this.x+48,this.y+26)
      rotate(PI/5)
      ellipse(0,0,20,8)
      pop()
      push()
      translate(this.x+34,this.y+26)
      rotate(PI/-5)
      ellipse(0,0,20,8)
      pop()
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      pop();
      noStroke();

      if (mouseIsPressed) {
      noStroke()
    
  fill(colorPicker.color())
  push()
  translate(335,72)
  rotate(PI/5)
  ellipse(2,8,123,45)
  pop()
  push()
  translate(230,70)
  rotate(PI/-5)
  ellipse(5,15,123,45)
  pop()
  
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      push();
      stroke(0);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      circle(this.x + 42, this.y + 35, 30);
      pop();
      push()
      translate(this.x+48,this.y+26)
      rotate(PI/5)
      ellipse(0,0,20,8)
      pop()
      push()
      translate(this.x+34,this.y+26)
      rotate(PI/-5)
      ellipse(0,0,20,8)
      pop()
      noStroke();
    }
  }
}
