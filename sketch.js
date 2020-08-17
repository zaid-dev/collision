var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
  }
  else {
    fixedRect.shapeColor = "green";
  }
  

  drawSprites();
}