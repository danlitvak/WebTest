let pos;
let vel;
let acc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pos = new p5.Vector(width/2, height/2);
  vel = new p5.Vector(0, 0);
  acc = new p5.Vector(0, 0);
}

function draw() {
  background(0);
  noCursor();

  acc.add(
    p5.Vector.sub(pos, new p5.Vector(mouseX, mouseY)).limit(1).div(-1000)
  ).mult(0.8);
  vel.add(acc);
  pos.add(vel);

  translate(pos);
  stroke(255);
  noFill();
  circle(0, 0, 30);
  let theta = atan2(mouseY - pos.y, mouseX - pos.x);
  rotate(theta);
  arc(0, 0, 40, 40, - 0.5, + 0.5);
  resetMatrix();
  line(pos.x, pos.y, mouseX, mouseY);
  circle(mouseX, mouseY, 10);
}