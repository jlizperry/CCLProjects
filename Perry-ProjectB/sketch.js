let colorPicker;
let headbutton = [];
let eyesone = [];
let eyestwo = [];
let noseone = [];
let nosetwo = [];
let mouthone = [];
let mouthtwo = [];
let hairone = [];
let hairtwo = [];
let earsone = [];
let earstwo = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("sketch")
  background(104, 45, 70);
  noStroke();

  //canvas for character
  push();
  stroke("#9E5D78");
  strokeWeight(5);
  fill("#FFF8F2");
  rect(80, 10, 430, 300, 20);

  //customization options select
  rect(10, 320, 580, 270, 20);
  pop();

  colorPicker = createColorPicker("#FFB47E");
  colorPicker.position(525, 70);
  colorPicker.parent("sketch");
  button = createButton("RESET");
  button.parent("sketch");
  button2 = createButton("CANVAS");
  button2.parent("sketch");
  button3 = createButton("SHIRT");
  button3.parent("sketch");
  button2.position(525, 130);
  button3.position(525, 200);
  button.position(10, 30);
  button.size(60, 50);
  button2.size(60, 50);
  button3.size(60, 50);
  button.mousePressed(resets);
  button2.mousePressed(backgroundcol);
  button3.mousePressed(shirtcol);
  button.style("background-color: #FFF8F2;");
  button.mouseOver(() => button.style("background-color: #eb6b6f;"));
  button.mouseOut(() => button.style("background-color: #FFF8F2;"));
  button2.style("background-color: #FFF8F2;");
  button2.mouseOver(() => button2.style("background-color: #eb6b6f;"));
  button2.mouseOut(() => button2.style("background-color: #FFF8F2;"));
  button3.style("background-color: #FFF8F2;");
  button3.mouseOver(() => button3.style("background-color: #eb6b6f;"));
  button3.mouseOut(() => button3.style("background-color: #FFF8F2;"));
  headbutton.push(new headButton(27, 360, 30));
  eyesone.push(new eyesOne(135, 360, 5));
  eyestwo.push(new eyesTwo(243, 360, 30));
  noseone.push(new noseOne(351, 360, 30));
  nosetwo.push(new noseTwo(449, 360, 30));
  mouthone.push(new mouthOne(27, 470, 5));
  mouthtwo.push(new mouthTwo(27, 525, 5));
  hairone.push(new hairOne(135, 470, 5));
  hairtwo.push(new hairTwo(243, 470, 5));
  earsone.push(new earOne(351, 470));
  earstwo.push(new earTwo(459, 470));
}

function resets() {
  fill("#FFF8F2");
  rect(80, 10, 430, 300, 20);
}
function backgroundcol() {
  fill(colorPicker.color());
  rect(80, 10, 430, 300, 20);
}
function shirtcol() {
  fill(colorPicker.color());
  ellipse(288, 265, 148, 70);
}

function draw() {
  // print(mouseX, mouseY);
  fill(104, 45, 70);
  textSize(20);
  textFont("monospace", 17);

  text("base-", 35, 350);
  text("eyes-", 138, 350);
  text("noses-", 358, 350);
  text("mouths-", 27, 460);
  text("hair-", 138, 460);
  text("ears-", 351, 460);

  fill("#F3EAE2");
  text("color", 525, 40);
  text("select", 525, 60);

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
    // no1.remove();
  }
  for (let i = 0; i < nosetwo.length; i++) {
    let no2 = nosetwo[i];
    no2.checkMouse();
    //no2.remove()
  }
  for (let i = 0; i < mouthone.length; i++) {
    let mouth1 = mouthone[i];
    mouth1.checkMouse();
    //mouth1.display();
  }
  for (let i = 0; i < mouthtwo.length; i++) {
    let mouth2 = mouthtwo[i];
    mouth2.checkMouse();
    //mouth1.display();
  }
  for (let i = 0; i < hairone.length; i++) {
    let hair1 = hairone[i];
    hair1.checkMouse();
  }
  for (let i = 0; i < hairtwo.length; i++) {
    let hair2 = hairtwo[i];
    hair2.checkMouse();
  }
  for (let i = 0; i < earsone.length; i++) {
    let ear1 = earsone[i];
    ear1.checkMouse();
  }
  for (let i = 0; i < earstwo.length; i++) {
    let ear2 = earstwo[i];
    ear2.checkMouse();
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
      fill(229, 82, 92);
      push();
      stroke(229, 82, 92);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      fill(229, 82, 92);
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
      stroke(104, 45, 70);
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
      fill(229, 82, 92);
      push();
      stroke(229, 82, 92);
      strokeWeight(2);

      noFill();
      rect(this.x, this.y, 85, 68, 20);
      pop();
      noStroke();

      if (mouseIsPressed) {
        noStroke();
        push();
        fill(255);
        ellipse(247, 125, 30, 40);
        ellipse(330, 125, 30, 40);
        push();
        blendMode(MULTIPLY);
        noFill();
        stroke(colorPicker.color());
        strokeWeight(2);
        ellipse(247, 125, 30, 40);
        ellipse(330, 125, 30, 40);
        pop();
        fill(colorPicker.color());
        circle(252, 125, 20);
        circle(335, 125, 20);
        push();
        blendMode(MULTIPLY);
        noFill();
        stroke(colorPicker.color());
        strokeWeight(2);
        circle(252, 125, 20);
        circle(335, 125, 20);
        pop();
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
      stroke(104, 45, 70);
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
    stroke(104, 45, 70);
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
      fill(229, 82, 92);
      push();
      stroke(229, 82, 92);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      pop();
      noStroke();

      if (mouseIsPressed) {
        noStroke();
        push();
        fill(255);
        ellipse(247, 125, 30, 40);
        ellipse(330, 125, 30, 40);
        push();
        blendMode(MULTIPLY);
        noFill();
        stroke(colorPicker.color());
        strokeWeight(2);
        ellipse(247, 125, 30, 40);
        ellipse(330, 125, 30, 40);
        pop();
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
      stroke(104, 45, 70);
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
      fill(229, 82, 92);
      stroke((229, 82, 92));
      strokeWeight(1);
      circle(this.x + 38, this.y + 33, 30);
      noStroke();
      fill(255);
      ellipse(this.x + 42, this.y + 28, 10, 6);
      push();
      stroke(229, 82, 92);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 75, 68, 20);
      pop();
      noStroke();

      if (mouseIsPressed) {
        fill(colorPicker.color());
        ellipse(287, 152, 30);
        noStroke();
        push();
        blendMode(MULTIPLY);
        noFill();
        stroke(colorPicker.color());
        strokeWeight(2);
        ellipse(287, 152, 30);
        pop();
        fill(255);
        ellipse(291, 144, 10, 6);
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      stroke(104, 45, 70);
      strokeWeight(1);
      circle(this.x + 38, this.y + 33, 30);
      noStroke();
      fill(255);
      ellipse(this.x + 42, this.y + 28, 10, 6);
      push();
      noFill();
      stroke(104, 45, 70);
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
      fill(229, 82, 92);
      stroke(229, 82, 92);
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
      fill(229, 82, 92);
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
      stroke(229, 82, 92);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 75, 68, 20);

      noStroke();

      if (mouseIsPressed) {
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
        push();
        blendMode(MULTIPLY);
        noFill();
        stroke(colorPicker.color());
        strokeWeight(2);
        translate(3, 5);
        triangle(285, 120, 270, 161, 300, 161);
        pop();
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      stroke(104, 45, 70);
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
      stroke(104, 45, 70);
      strokeWeight(2);
      rect(this.x, this.y, 75, 68, 20);
      pop();
      noStroke();
    }
  }
  remove() {
    let distance = dist(388, 397, mouseX, mouseY);
    if (distance < 40 && mouseIsPressed) {
      // push();
      // blendMode(REMOVE);
      // fill(colorPicker.color());
      // stroke(0);
      // strokeWeight(2);
      // push();
      //   translate(3, 5);
      //   triangle(285, 120, 270, 161, 300, 161);
      //   noStroke();
      // pop();
      // pop()
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
    if (distance < 30) {
      // mouse is in the area
      noFill();
      stroke(229, 82, 92);
      strokeWeight(2);

      stroke(229, 82, 92);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 75, 45, 20);
      push();
      fill(229, 82, 92);
      translate(this.x + 38, this.y + 17);
      rotate(PI * 2);
      push();
      arc(0, 0, 20, 30, 0, PI, CHORD);
      pop();
      arc(0, 6, 13, 15, 0, PI, CHORD);
      pop();
      noStroke();

      if (mouseIsPressed) {
        fill(colorPicker.color());
        push();
        translate(287, 180);
        rotate(PI * 2);
        push();
        blendMode(MULTIPLY);
        arc(0, 0, 35, 40, 0, PI, CHORD);
        pop();
        arc(0, 10, 27, 20, 0, PI, CHORD);
        pop();
        push();
        translate(287, 180);
        rotate(PI * 2);
        blendMode(MULTIPLY);
        noFill();
        stroke(colorPicker.color());
        strokeWeight(2);
        arc(0, 0, 35, 40, 0, PI, CHORD);
        pop();
      }
    } else {
      // mouse is out of the area
      stroke(colorPicker.color());
      strokeWeight(2);
      push();
      fill(colorPicker.color());
      translate(this.x + 38, this.y + 17);
      rotate(PI * 2);
      push();
      blendMode(MULTIPLY);
      arc(0, 0, 20, 30, 0, PI, CHORD);
      pop();
      arc(0, 6, 13, 15, 0, PI, CHORD);
      pop();
      noFill();
      stroke(104, 45, 70);
      strokeWeight(2);
      rect(this.x, this.y, 75, 45, 20);

      noStroke();
    }
  }
}
class mouthTwo {
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
    if (distance < 30) {
      // mouse is in the area
      noFill();
      stroke(229, 82, 92);
      strokeWeight(2);

      stroke(229, 82, 92);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 75, 45, 20);
      push();
      fill(229, 82, 92);
      translate(this.x + 38, this.y + 30);
      rotate(PI);
      push();
      arc(0, 0, 20, 30, 0, PI, CHORD);
      pop();
      arc(0, 6, 13, 15, 0, PI, CHORD);
      pop();
      noStroke();

      if (mouseIsPressed) {
        fill(colorPicker.color());
        push();
        translate(287, 200);
        rotate(PI);
        push();
        blendMode(MULTIPLY);
        arc(0, 0, 35, 40, 0, PI, CHORD);
        pop();
        arc(0, 10, 27, 20, 0, PI, CHORD);
        pop();
        push();
        translate(287, 200);
        rotate(PI);
        blendMode(MULTIPLY);
        noFill();
        stroke(colorPicker.color());
        strokeWeight(2);
        arc(0, 0, 35, 40, 0, PI, CHORD);
        pop();
      }
    } else {
      // mouse is out of the area
      stroke(colorPicker.color());
      strokeWeight(2);
      push();
      fill(colorPicker.color());
      translate(this.x + 38, this.y + 30);
      rotate(PI);
      push();
      blendMode(MULTIPLY);
      arc(0, 0, 20, 30, 0, PI, CHORD);
      pop();
      arc(0, 6, 13, 15, 0, PI, CHORD);
      pop();
      noFill();
      stroke(104, 45, 70);
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
      fill(229, 82, 92);
      push();
      triangle(
        this.x + 25,
        this.y + 30,
        this.x + 35,
        this.y + 30,
        this.x + 27,
        this.y + 15
      );
      triangle(
        this.x + 47,
        this.y + 30,
        this.x + 57,
        this.y + 30,
        this.x + 52,
        this.y + 15
      );

      stroke(229, 82, 92);
      strokeWeight(2);
      push();
      translate(this.x + 48, this.y + 26);
      rotate(PI / 5);
      ellipse(0, 0, 20, 8);
      pop();
      push();
      translate(this.x + 34, this.y + 26);
      rotate(PI / -5);
      ellipse(0, 0, 20, 8);
      pop();
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      pop();
      noStroke();

      if (mouseIsPressed) {
        noStroke();
        fill(colorPicker.color());
        push();
        translate(284, 70);
        rotate(PI * 13);
        arc(0, 0, 140, 75, 0, PI, CHORD);
        pop();
        push();
        blendMode(MULTIPLY);
        fill(colorPicker.color());
        triangle(194, 111, 221, 72, 183, 46);
        triangle(350, 70, 380, 111, 395, 46);
        pop();
        push();
        translate(335, 72);
        rotate(PI / 5);
        ellipse(2, 8, 123, 45);
        pop();
        push();
        translate(230, 70);
        rotate(PI / -5);
        ellipse(5, 15, 123, 45);
        pop();
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      push();
      stroke(104, 45, 70);
      strokeWeight(2);
      push();
      fill(colorPicker.color());
      noStroke();
      blendMode(MULTIPLY);
      triangle(
        this.x + 25,
        this.y + 30,
        this.x + 35,
        this.y + 30,
        this.x + 27,
        this.y + 15
      );
      triangle(
        this.x + 47,
        this.y + 30,
        this.x + 57,
        this.y + 30,
        this.x + 52,
        this.y + 15
      );
      pop();
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      circle(this.x + 42, this.y + 35, 30);
      pop();
      push();
      translate(this.x + 48, this.y + 26);
      rotate(PI / 5);
      ellipse(0, 0, 20, 8);
      pop();
      push();
      translate(this.x + 34, this.y + 26);
      rotate(PI / -5);
      ellipse(0, 0, 20, 8);
      pop();
      noStroke();
    }
  }
}
class hairTwo {
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
      fill(229, 82, 92);
      push();
      stroke(229, 82, 92);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      circle(this.x + 42, this.y + 35, 30);
      pop();
      push();
      translate(this.x + 48, this.y + 26);
      rotate(PI / 5);
      ellipse(0, 0, 20, 8);
      pop();
      push();
      translate(this.x + 34, this.y + 26);
      rotate(PI / -5);
      ellipse(0, 0, 20, 8);
      pop();
      circle(this.x + 30, this.y + 20, 15);
      circle(this.x + 50, this.y + 20, 15);
      noStroke();

      if (mouseIsPressed) {
        noStroke();
        fill(colorPicker.color());
        push();
        translate(284, 70);
        rotate(PI * 13);
        arc(0, 0, 170, 75, 0, PI, CHORD);

        pop();
        triangle(285, 65, 302, 69, 300, 110);
        circle(198, 79, 60);
        circle(373, 79, 60);
        push();
        translate(335, 72);
        rotate(PI / 5);
        ellipse(2, 8, 123, 45);
        pop();
        push();
        translate(230, 70);
        rotate(PI / -5);
        ellipse(5, 15, 123, 45);
        pop();
        push();
        blendMode(MULTIPLY);
        stroke(colorPicker.color());
        strokeWeight(5);
        noFill();
        translate(230, 90);
        rotate(PI / 8.8);
        arc(0, 0, 85, 85, 2.5, PI + QUARTER_PI, OPEN);
        pop();
        push();
        blendMode(MULTIPLY);
        stroke(colorPicker.color());
        strokeWeight(5);
        noFill();
        translate(338, 90);
        rotate(PI * 8.85);
        arc(0, 0, 85, 85, 2.5, PI + QUARTER_PI, OPEN);
        pop();
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      push();
      stroke(104, 45, 70);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      circle(this.x + 42, this.y + 35, 30);
      pop();
      push();
      translate(this.x + 48, this.y + 26);
      rotate(PI / 5);
      ellipse(0, 0, 20, 8);
      pop();
      push();
      translate(this.x + 34, this.y + 26);
      rotate(PI / -5);
      ellipse(0, 0, 20, 8);
      pop();
      circle(this.x + 30, this.y + 20, 15);
      circle(this.x + 50, this.y + 20, 15);
      noStroke();
    }
  }
}
class earOne {
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
      fill(229, 82, 92);
      push();
      stroke(229, 82, 92);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      pop();
      push();
      translate(this.x + 26, this.y + 35);
      rotate(PI / 2.25);
      arc(0, 0, 15, 20, 0, PI, CHORD);
      push();
      blendMode(MULTIPLY);
      arc(0, 0, 9, 13, 0, PI, CHORD);
      pop();
      pop();
      push();
      translate(this.x + 57, this.y + 35);
      rotate(PI / -2.15);
      arc(0, 0, 15, 20, 0, PI, CHORD);
      push();
      blendMode(MULTIPLY);
      arc(0, 0, 9, 13, 0, PI, CHORD);
      pop();
      pop();
      noStroke();

      if (mouseIsPressed) {
        fill(colorPicker.color());
        push();
        translate(199, 150);
        rotate(PI / 2.25);
        arc(0, 0, 35, 50, 0, PI, CHORD);
        push();
        blendMode(MULTIPLY);
        arc(0, 0, 15, 20, 0, PI, CHORD);
        pop();
        pop();
        push();
        translate(373, 150);
        rotate(PI / -2.15);
        arc(0, 0, 35, 50, 0, PI, CHORD);
        push();
        blendMode(MULTIPLY);
        arc(0, 0, 15, 20, 0, PI, CHORD);
        pop();
        pop();
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      push();
      stroke(104, 45, 70);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      circle(this.x + 42, this.y + 35, 30);
      pop();
      push();
      translate(this.x + 26, this.y + 35);
      rotate(PI / 2.25);
      arc(0, 0, 15, 20, 0, PI, CHORD);
      push();
      blendMode(MULTIPLY);
      arc(0, 0, 9, 13, 0, PI, CHORD);
      pop();
      pop();
      push();
      translate(this.x + 57, this.y + 35);
      rotate(PI / -2.15);
      arc(0, 0, 15, 20, 0, PI, CHORD);
      push();
      blendMode(MULTIPLY);
      arc(0, 0, 9, 13, 0, PI, CHORD);
      pop();
      pop();
      noStroke();
    }
  }
}
class earTwo {
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
      fill(229, 82, 92);
      push();
      stroke(229, 82, 92);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      pop();
      triangle(
        this.x + 26,
        this.y + 25,
        this.x + 26,
        this.y + 41,
        this.x + 10,
        this.y + 33
      );
      triangle(
        this.x + 57,
        this.y + 25,
        this.x + 58,
        this.y + 41,
        this.x + 75,
        this.y + 33
      );
      noStroke();

      if (mouseIsPressed) {
        fill(colorPicker.color());
        triangle(195, 135, 199, 165, 165, 148);
        triangle(379, 135, 375, 165, 413, 148);
        push();
        blendMode(MULTIPLY);
        triangle(195, 137, 199, 163, 181, 148);
        triangle(379, 137, 375, 163, 397, 148);
        pop();
      }
    } else {
      // mouse is out of the area
      fill(colorPicker.color());
      push();
      stroke(104, 45, 70);
      strokeWeight(2);
      noFill();
      rect(this.x, this.y, 85, 68, 20);
      circle(this.x + 42, this.y + 35, 30);
      pop();
      triangle(
        this.x + 26,
        this.y + 25,
        this.x + 26,
        this.y + 41,
        this.x + 10,
        this.y + 33
      );
      triangle(
        this.x + 57,
        this.y + 25,
        this.x + 58,
        this.y + 41,
        this.x + 75,
        this.y + 33
      );
      push();
      blendMode(MULTIPLY);
      triangle(
        this.x + 26,
        this.y + 26,
        this.x + 26,
        this.y + 40,
        this.x + 15,
        this.y + 33
      );
      triangle(
        this.x + 57,
        this.y + 26,
        this.x + 58,
        this.y + 40,
        this.x + 68,
        this.y + 33
      );
      pop();
      noStroke();
    }
  }
}
