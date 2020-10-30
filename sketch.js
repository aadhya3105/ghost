var tower , towerImage
var door , doorImage
var climber , climberImage
var ghost , ghostImage
var climbersGroup
var doorsGroup
var end
var play
var gameState = "play"


function preload(){
  towerImage = loadImage("tower.png")
  doorImage = loadImage("door.png")
  climberImage = loadImage("climber.png")
  ghostImage = loadImage("ghost-standing.png");
  
}

function setup(){
  createCanvas(600,600)
  tower = createSprite(300,300)
  tower.addImage(towerImage);
  tower.velocityY = 2;
  
  ghost = createSprite(300,300);
  ghost.addImage(ghostImage);
  ghost.scale=0.5; 
  
  climbersGroup = new Group()
  
  doorsGroup = new Group()
  
}

function draw(){
  background("black");
  if(tower.y >600){
    tower.y = 300;
  }
  if(gameState==="play"){
    
  if(keyDown("space")){
    ghost.velocityY = -5;
  }
  ghost.velocityY = ghost.velocityY+0.8  
  
  if(keyDown("left")){
    ghost.x=ghost.x-3;  
  }
  
  if(keyDown("right")){
    ghost.x=ghost.x+3;  
  }
    if(ghost.y>600){
      gameState = "end"
    }
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
    gameState="end";
  }
  
  spawnDoors();
  
drawSprites();
  
  }
   if(gameState==="end"){
     textSize(30)
     fill("yellow")
     text("Game Over",230,200)
     
   }
}


 function spawnDoors(){
  if(frameCount%150===0){
  door = createSprite(Math.round(random(200,500)),0)
  door.addImage(doorImage);
  door.velocityY = 2;
  door.limetime=300;
    doorsGroup.add(door);
  climber = createSprite(door.x,door.y+40);
  climber.addImage(climberImage);
  climber.velocityY = 2;
  climber.limetime = 300;
  climbersGroup.add(climber);
    
  }
   
   
  
  
}
