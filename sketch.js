var hr,mn,sc;
var scAngle,hrAngle,mnAngle;
function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,60,0,360);


}

function draw() {
  background(255,255,255);  
  
  drawSec();
  drawMin();
  drawHr();
  drawSprites();
}
function drawSec(){

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,100,200,100);
  pop();
}
function drawMin(){

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(10);
  line(0,0,100,0);
  pop();
}
function drawHr(){

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(13);
  line(0,100,200,100);
  pop();
}