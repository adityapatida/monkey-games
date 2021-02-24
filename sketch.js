var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bananaGroup, bananaImage;
var obstacelGroup, obstaceImage;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  
  createCanvas(600, 200);

  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png"); 

  monkey.scale = 0.1;

  banana = createSprite(80,160,20,50);
  banana.scale = 0.1;
  
  banana.addImage("banana",bananaImage);
  
  obstacelImage = createSprite(300,160,20,50);
  obstacelImage.scale = 0.1;
  
  obstacelImage.addImage("obstacel",obstaceImage);
  
  ground = createSprite(200,190,400,10);
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  obstacelsGroup = createGroup();
  bananaGroup = createGroup();
  
}


function draw() {
  background(180);
  text("SurvivalTime: "+ SurvivalTime, 500,50);

  ground.velocityX = -(4 + 3* SurvivalTime/100)
    
  SurvivalTime=SurvivalTime+Math.round(getFrameRate()/60);
    
    if(SurvivalTime>0 && SurvivalTime%100 === 0)
  
     if (ground.x < 0){
      ground.x = ground.width/2;
     }
        
      if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
  
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(invisibleGround);
  
  drawSprites();
}
  
   if (gameState === END) {
      
      
    
     
        
     if(mousePressedOver(restart)) {
      reset();
    }
   }
     
      ground.velocityX = 0;
      monkey.velocityY = 0
     
     obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
     cloudsGroup.setVelocityXEach(0);
     
    obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
    

function spawnObstacles(){
     if (frameCount % 80 === 0)
   var obstacle = createSprite(600,165,10,40);
   obstacel.velocityX = -(6 + score/100);
   
    
    var rand = Math.round(random(120,200));

obstacel.scale = 0.5;
    obstacel.lifetime = 300;
     obstacelGroup.add(obstacel);
  
  
  function spawnBanana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
  bananaGroup.add(banana);
    
  }
  }
  
}
     
     
     
     
  
  
     









    