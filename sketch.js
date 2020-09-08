var hr , mn,sec 
var sc , scAngle

function setup() {
  hr = hour();
  mn = minute();
  sec = second();
  angleMode(DEGREES);
  createCanvas(800,800);
}

function draw() {
  background(0,0,0);
    push();
  scAngle = map(sc % 12,0,60,0,360)
  stroke(255,0,0) 
  strokeWeight(7)
  line(300,200,200,200)
  translate(0,0)
  pop()

  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(300,300,200,200)
pop()

push()
rotate(scAngle)
stroke(255,0,200)
strokeWeight(7)
line(200,290,200,200)
pop()

  drawSprites();
}