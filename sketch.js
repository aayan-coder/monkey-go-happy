
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivalTime=0
var backgroundImage,back
var PLAY=1 
var END=0
var gameState=1

function preload(){
  
  backgroundImage = loadImage("jungle.jpg")
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600, 475 );
  
  
  ground = createSprite(300, 408, 1000, 15)
  ground.velocityX = -4
  ground.shapeColor = ("green")
  ground.x = ground.width/2
  ground.visible = false
 
  back = createSprite(250, 150, 10, 10)
  back.velocityX = -4
  back.addImage(backgroundImage)
  back.scale = 1.2
  
  monkey = createSprite(150, 385, 20, 20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale=.115
  
  
  FoodGroup = createGroup()
  obstacleGroup = createGroup()
   
  monkey.setCollider("rectangle", 0,0, 190, 600)
}


function draw() {
  background("lightblue")
  
      if(ground.x<0){
    ground.x = ground.width/2
  }
          if(back.x<0){
    back.x = back.width/2
  }
    if(keyDown("space")&& monkey.y>300){
    monkey.velocityY = -16.5
  }
    monkey.velocityY = monkey.velocityY + 0.8

      if(monkey.isTouching(FoodGroup)){
    score = score+2
    FoodGroup.destroyEach()
  }
  

    bananas()
  stones()
  

  
        switch(score){
    case 10: monkey.scale = .120;
            break;
    case 20: monkey.scale = .140
            break;
    case 30: monkey.scale = .160;
            break;  
    case 40: monkey.scale = .180;
            break;
    default: break;    

  }
  

  
 
    

    
    
  if(obstacleGroup.isTouching(monkey)){
     monkey.scale = .115
     score = 0
  }
    


  
 

    
    
  
  monkey.collide(ground)
  

  

  



  

  
  drawSprites()
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: " + score, 395,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 180,50)
  


}

function bananas(){
  if(frameCount % 115 === 0){
    b = createSprite(610, 120, 20, 20)
    b.velocityX = -4
    b.y = Math.round(random(165, 265))
    b.addImage(bananaImage)
    b.scale = .1
    b.lifetime = 160
    
    FoodGroup.add(b)
  }
   
}

function stones(){
  if(frameCount % 270 === 0){
    s = createSprite(610, 370, 20, 20)
    s.velocityX = -4
    s.addImage(obstacleImage)
    s.scale = .18
    s.lifetime = 160
    s.setCollider("rectangle", 0,0, 400, 400)
    obstacleGroup.add(s)
  }

}




