
function setup() {
  let canvas = createCanvas(500, 400);
  //canvas.parent("canvasContainer");
  canvas.id("p5-canvas")
  angleMode (degrees);
}

function draw() {
  background(156,155,140);
  //(177,173,162);
//print(mouseX,mouseY)
//translate(mouseX,mouseY)
//blanket
  fill(210,210,200);
  noStroke();
  rect(0,236,400,600);
  
//wall
  fill(177,173,162);
  rect(300,0,100,200);
  
//pillow
  noStroke();
  fill(178,131,117);
  rect(289,150,400,309,20);
  
//octopus
  fill(123,27,31)
  circle(100,298,45);
  circle(120,320,45);
  circle(160,330,45);
  circle(195,325,45);
  fill(153,55,64);
  ellipse(160,260,170,140);
  fill(9,10,6);
  circle(178,260,19);
  circle(120,260,19);
  
  
//bear 
  fill(156,99,1);
  ellipse(255,220,120,110);
  rect(210,260,89,110,20);
  ellipse(285,290,110,50);
  ellipse(220,292,110,50);
  rect(210,290,45,110,20);
  rect(260,290,45,110,20);
  circle(215,183,40);
  circle(300,183,40);
  fill(206,202,187);
  circle(257,310,45);
  circle(263,230,15);
  circle(250,230,15);
  fill(9,10,6);
  circle(257,226,13);
  circle(277,214,13);
  circle(235,214,13);
  
  //mouth
  let p1 = { x: 150, y:240};
  let p2 = { x: 158, y:275};
  let p3 = { x: 142, y:275};
  let p4 = {x: 150, y:220};
  noFill();
  stroke (0);
  curve(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y)
  
  //
}