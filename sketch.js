var Spaceship, ISS;
var spaceshipImg, spaceshipImg2, spaceshipImg3, spaceshipImg4;
var Space, issImg, hasDocked;

function preload(){
  spaceshipImg = loadImage("spacecraft1.png");
  spaceshipImg2 = loadAnimation("spacecraft2.png");
  spaceshipImg3 = loadAnimation("spacecraft3.png");
  spaceshipImg4 = loadImage("spacecraft4.png");
  Space = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  Spaceship = createSprite(410,350,10,10);
  Spaceship.addAnimation("spacecraft1.png", spaceshipImg);
  Spaceship.addAnimation("spacecraft2.png", spaceshipImg2);
  Spaceship.addAnimation("spacecraft3.png", spaceshipImg3);
  Spaceship.addAnimation("spacecraft4.png", spaceshipImg4);
  Spaceship.scale = 0.15

  ISS = createSprite(400,150,200,25);
  ISS.addImage("iss.png", issImg);
  ISS.scale = 0.5;
}

function draw() {
  background(Space); 
  
  if(!hasDocked){  
    textSize(25)
    fill(225,225,50);
    text("Congratulations Captain, you have",220,250)
    text("succesfully docked our SpaceCraft!",217,275)
  }else{
    hasDocked = false
  }

  if(keyDown('UP_ARROW')){
    Spaceship.velocityY = -1;
    Spaceship.changeAnimation("spacecraft2.png", spaceshipImg2);
  }else if(keyDown('RIGHT_ARROW')){
    Spaceship.velocityX = +1;
    Spaceship.changeAnimation("spacecraft3.png", spaceshipImg3);
  }else if(keyDown('LEFT_ARROW')){
    Spaceship.velocityX = -1;
    Spaceship.changeAnimation("spacecraft4.png", spaceshipImg4);
  }else{
    Spaceship.velocityX = 0;
    Spaceship.velocityY = 0;
    Spaceship.changeAnimation("spacecraft1.png", spaceshipImg); 
  }
  
  if(Spaceship.position.y > 200){
    hasDocked = true;
  }
  if(Spaceship.position.x > 370){
    hasDocked = true;
  }

  drawSprites();
}