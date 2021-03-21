var Wall;
var Bullet;
var Speed, Weight, Thickness;

function setup() 
{
  createCanvas(1600,400);

 
  Speed = random(223,321);
  Weight = random(30,52);
  Thickness = random(22,83);


  Bullet = createSprite(50,200,50,5);
  Bullet.velocityX = Speed;
  Bullet.shapeColor = color(225);


  Wall = createSprite(1250,200,Thickness,height/2);
  Wall.shapeColor = color(255,255,255);


  
}   

function draw() {


  background(0,0,0);  
  
  
 if (hasCollided(Bullet,Wall))
 {
  Bullet.velocityX = 0;
  var Damage = 0.5*Weight*Speed*Speed/(Thickness*Thickness*Thickness);

  if (Damage > 10)
  {
      Wall.shapeColor = color(255,0,0);
  }

  if (Damage < 10)
  {

    Wall.shapeColor = color(0,255,0);
  }
 }
 

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  BulletRightEdge=lbullet.x +lbullet.width;
  WallLeftEdge=lwall.x;
  if (BulletRightEdge>=WallLeftEdge)
  {
    return true;
  }
  return false;
}

