var backImage,player_running,bananaImage,obstacle_img;
var jungle,monkey,obstacleGroup,foodGroup;
var score;

function preload () {
backImage = loadImage("bg.png");
player_running= loadAnimation("01.png, 02.png,03.png,04.png,05.png,06.png,07.png,08.png,09.png,10.png"); 

bananaImage = loadImage("star.jpg");
obstacle_img= loadImage("obs.jpg");  
}

function setup() {
  createCanvas(500, 400);
  
  
  
  ground=createSprite(130,360,400,10);
  ground.visible=false;
  
  jungle= createSprite(400,120,800,10);
  jungle.addAnimation("moving",backImage);
  jungle.velocityX= -9;
  jungle.x = jungle.width/2;

  monkey= createSprite(100,330,20,50);
  monkey.addAnimation("player",player_running);
  monkey.scale= 0.1;
  
  
  foodGroup = new Group();
  obstacleGroup = new Group();

}

function draw() {
  background(220);
 
  
  
   if (keyDown("space")){
    monkey.velocityY= -10;
  }
  
    if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
    if (foodGroup.isTouching(monkey)){
  foodGroup.destroyEach();
  obstacleGroup.destroyEach();
  monkey.scale = 0.3;
     
  }
   if (obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.2;
    
   }
  text("Score: "+ score , 100,50);
  switch(score){
    case 10 : monkey.scale =0.12;
              break;
    case 20 : monkey.scale =0.14;
              break; 
    case 30 : monkey.scale =0.16;
              break; 
    case 40 : monkey.scale =0.18;
              break;    
              default:break;         
  }
 monkey.velocityY = monkey.velocityY + 0.9;
  
   food();
   obstacle();
  
  monkey.collide(ground);
  
  drawSprites();
   stroke("white");
   textSize(20);
   fill("white");
  
   
  
}
function food () {
if (World.frameCount % 80 === 0){
    var banana = createSprite(400,320,20,20);
   
    banana.addImage(bananaImage);
    banana.scale= 0.05;
    banana.y = random(150,180);
    
    banana.velocityX = -7;
    banana.setlifetime=100;
    
    foodGroup.add(banana);
   }
   
}
  
  function obstacle () {
  if (World.frameCount % 300 === 0){
    var stone = createSprite(400,330,20,20);
   
    stone.addImage(obstacle_img);
    stone.scale= 0.15;
     
    stone.velocityX = -7;
    stone.setlifetime=100;
    
    obstacleGroup.add(stone);

  }
  }
