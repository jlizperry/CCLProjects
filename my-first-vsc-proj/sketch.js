// let ballA;
let balls = [];

function setup() {
  createCanvas(600, 600);

  // ballA = new Ball(100, 100);
  // ballB = new Ball (random(width),random(height))

  for (let i = 0; i < 1; i++) {
    balls[i] = new Ball(random(width), random(height));
  }
}

function draw() {
  background(0);
  // ballA.display();
  // ballA.move();
  // ballA.bounce();
  // ballA.changeColor();
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
    balls[i].bounce();
    balls[i].changeColor();
  }
}
//add new balls by mousepress
function mousePressed(){
  balls.push(new Ball (mouseX,mouseY))
}

//________________Class: Ball
class Ball {
  //constructor
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = random(5,20);
    this.xSpd = random(-10, 10);
    this.ySpd = random(-2, 2);
  }

  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  bounce() {
    if (this.x < 1 || this.x > width - 1) {
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 1 || this.y > height - 1) {
      this.ySpd = this.ySpd * -1;
    }
  }

  changeColor() {
    if (this.x < 0 || this.x > width) {
      fill(random(255), random(255), random(255));
    }
    if (this.y < 0 || this.y > height) {
      fill(random(255), random(255), random(255));
    }
  }

  display() {
    ellipse(this.x, this.y, this.dia, this.dia);
  }
}
