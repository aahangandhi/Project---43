var hr,min,sec;
var hrAngle,minAngle,secAngle;
var unlockInfo;
var open, openIMG;
var close, closeIMG;

function preload(){
  closeIMG = loadImage("close.jpg");
  openIMG = loadImage("open.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight - 110);

  close = createSprite(-320,700);
  close.addImage(closeIMG);
  close.scale = 2;

  angleMode(DEGREES);

  unlockInfo = new StoryInfo(0,0)

  

}

function draw() {
  background(0,0,0); 
  translate(200,200);
  rotate(-90);

  if(gameState === 2&&hr === 12&&min === 00){
    close.destroy();

    open = createSprite(-320,700);
  open.addImage(openIMG);
  open.scale = 2;
  }

  hrAngle = map(hr%12,0,12,0,360);
  minAngle = map(min,0,60,0,360);
  secAngle = map(sec,0,60,0,360);

  hr = hour();
  min = minute();
  sec = second();

  push();  
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();  
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();  
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  strokeWeight(7);
  point(0,0);
  noFill();

  //sec
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle)

  //min
  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle)

  //hr
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle)

unlockInfo.display();

  drawSprites();
}