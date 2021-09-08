/*


write your own story

*/

var theif, theif_running;
var background1, backgroundImage;
var obstacle 
var coin1, coin2, coin3,coin4,coin5,coin6;
var score;

function preload(){
  
  theif_running = loadAnimation("Theif1.png","Theif2.png","Theif3.png","Theif4.png","Theif5.png","Theif6.png");
  backgroundImage = loadImage("city background.jpg")
  
  coinImg=loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png")

}



function setup() {
  createCanvas(600,200);
  background1 = createSprite(200,180,400,20);
  background1.addImage("city background",backgroundImage);
  background1.x = background1.width /2;
  background1.velocityX = -2; 


  theif = createSprite(50,150,20,50,);
  theif.addAnimation("Theif_running",theif_running)
  theif.scale = 0.3;


 
}

function draw() {

  background("skyblue")
  
 if(background1.x <270){
  background1.x = background1.width /2;
 }
  spawnCoins()
  drawSprites();

}
 function spawnCoins(){
   if(frameCount % 60 ===0){
     var coin= createSprite(600,Math.round(random(10,50)));
     coin.addAnimation("coins",coinImg)
   }
 }