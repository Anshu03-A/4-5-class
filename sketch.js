
var b, a;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  a = createSprite(800, 400,80,80);
  a.shapeColor = "green";

  b = createSprite(100, 100, 50, 50);
  b.shapeColor = "green";
  
  c = createSprite(500,300,100,100)
  c.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
  a.x = World.mouseX;
  a.y = World.mouseY;

  if(isTouching(a,c)){
    a.shapeColor = "blue";
   c.shapeColor = "blue";
  }
  
  else {
    a.shapeColor = "green"
    c.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




