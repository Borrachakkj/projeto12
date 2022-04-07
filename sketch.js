var player;
var playerAmc;
var parede1;
var parede2;
var fundo;
var fundoImg;

function preload(){
 playerAmc=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG");
 fundoImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  fundo=createSprite(200,200,20,20);
  fundo.addImage(fundoImg);
  fundo.scale=1.2;
  player=createSprite(200,200,20,20);
  player.addAnimation("corrida", playerAmc);
  player.scale=0.8;
  parede1=createSprite(0,0,100,800);
  parede2=createSprite(410,0,100,800);
}

function draw() {
  background(0);
  fundo.velocityY = 4;
  player.x=World.mouseX;
  player.collide(parede1);
  player.collide(parede2);
  if(fundo.y > 400 ){
    fundo.y = height/2;
  }
  drawSprites();
}
