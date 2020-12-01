var bullet, wall;
var speed,weight,thickness;
var damage;
var lbullet,lwall;
var bulletRightEdge,wallLeftEdge;


function setup() {
  createCanvas(800,400);

  speed=random(30,80);
  weight=random(30,52);
  thickness=random(22,100);

  bullet=createSprite(50, 200, 50, 10);

  bullet.velocityX=speed;

  bullet.shapeColor=("white");

  wall=createSprite(700,200,thickness,height/2);
  wall.shapeColor=("lightBlue");

}

function draw() {
  background("grey");  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
   
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  

  if(damage<wall.width/2){
//good
    wall.shapeColor=color("lightGreen");
  }

  if(damage>wall.width/2 ){
   //average
    wall.shapeColor=color("red");
  }

  

  }
  drawSprites();
}

//function hasCollided(bullet, wall){
 // bulletRightEdge= bullet.x + bullet.width;
  
 // wallLeftEdge=wall.x;
  
 // if(bulletRightEdge>=wallLeftEdge){
 //   return true
 // }
 // return false;
  
  //}
  