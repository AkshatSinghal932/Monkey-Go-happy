var monkey , monkey_running,PLAY="1",END="2";
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0,ground,invisibleGround,gameState=PLAY,monkeyImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 monkeyImage=loadImage("sprite_0.png");
}



function setup() {
  invisibleGround=createSprite(200,380,800,1);
  monkey=createSprite(50,350,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
 
  ground = createSprite(200,380,800,10);

  ground.velocityX=-5;
  FoodGroup=new Group();
  monkey.debug=true
  obstacleGroup=new Group();
}


function draw() {
  background("white"); 
  
  if(gameState==PLAY){
  score=score+Math.round(getFrameRate()/63)
  
if(ground.x<0){
   ground.x=200; 
   }
monkey.velocityY=monkey.velocityY+0.8;    

  if(keyDown("space") && monkey.y>300){
    monkey.velocityY=-12;
   }
if(monkey.isTouching(obstacleGroup)){
   gameState=END;

       }
  }
  else if(gameState==END){
  ground.velocityX=0;
  banana.velocityX=0;
  obstacle.velocityX=0;
  monkey.destroy();
    textSize(24);
    
    text ("The Monkey Broke His Leg",100,150);

  }

  monkey.collide(invisibleGround); 
  spawnObstacle();
  SpawnBanana();
  textSize(20);
  text("Survival Time : "+score,150,80)
  drawSprites();  
 console.log(gameState);
}

function SpawnBanana(){
  if(frameCount%100==0){
  banana=createSprite(480,200);
  banana.addImage(bananaImage);
  banana.velocityX=-5;  
  banana.scale=0.1
  FoodGroup.add(banana);  
  banana.lifetime=150;
  banana.debug=true;
}
}

function spawnObstacle(){
  if(frameCount%150==0){
  obstacle=createSprite(480,320,10,10);
  obstacle.velocityX=-5;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.3;
  obstacle.lifetime=150;
  obstacle.debug=true;
  obstacle.setCollider("rectangle",0,0,300,300);
  obstacleGroup.add(obstacle);
}
}





