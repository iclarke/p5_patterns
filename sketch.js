let x=200; // Starting x coordinate for the pendulum
let y=200; // Starting y position for the pendulum
let angle;
let bob;
let len;
let angleV = 0;
let angleA = 0;
let gravity=0.1;

function setup() {
  createCanvas(600, 400);
  origin = createVector(300,0);
  angle = PI/4;
  bob = createVector()
  len = 300;

}

function draw() {
  background(0);
  let force = gravity * sin(angle);
  angleA = -1* force / len;
  angleV += angleA;
  angle += angleV;
  
  angle += 0.01;
  stroke(255);
  strokeWeight(8);
  fill(127);
  bob.x = len*sin(angle) + origin.x;
  bob.y = len*cos(angle) + origin.y; 
  line(origin.x,origin.y,bob.x,bob.y);
  circle(bob.x,bob.y,64);
}
