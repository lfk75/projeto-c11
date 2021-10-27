var jack;
var jackimg;
var bloco;
var bloco2;
var calaçada;
var faixa;
var faixa2;
var faixa3;
var faixa4;
var faixa5;
var faixa6;
function preload(){
  
  jackimg = loadAnimation("Runner-1.png" , "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //criar corredor
  jack = createSprite(200,340,40,40);
  jack.addAnimation("correr" , jackimg);
  jack.scale = 0.09;
  
  

  bloco = createSprite(5,200,40,400);
  bloco.visible = false;

  calçada = createSprite(15,200,55,400);
  calçada2 = createSprite(380,200,55,400);

  bloco2 = createSprite(395,200,40,400);
  bloco2.visible = false;

  faixa = createSprite(120,340,15,60);
  faixa.shapeColor = "withe";

  faixa2 = createSprite(280,340,15,60);
  faixa2.shapeColor = "withe";

  faixa3 = createSprite(120,200,15,60);
  faixa3.shapeColor = "withe";

  faixa4 = createSprite(280,200,15,60);
  faixa4.shapeColor = "withe";

  faixa5 = createSprite(280,80,15,60);
  faixa5.shapeColor = "withe";

  faixa6 = createSprite(120,80,15,60);
  faixa6.shapeColor = "withe";
}

function draw() {
  background(0);
  if (keyDown("left")) {
    jack.x=jack.x-5
   }
   if (keyDown("RIGHT")) {
    jack.x=jack.x+5
   }

  faixa.velocityY = 6;
  faixa2.velocityY = 6;
  faixa3.velocityY = 6;
  faixa4.velocityY = 6;
  faixa5.velocityY = 6;
  faixa6.velocityY = 6;
  

  if (faixa.y > 420 || faixa2.y > 420) {
  faixa.y = 10;
  faixa2.y = 10;
  }
  if (faixa3.y > 420 || faixa4.y > 420) {
    faixa3.y = 10;
    faixa4.y = 10;
    }
    if (faixa5.y > 420 || faixa6.y > 420) {
      faixa5.y = 10;
      faixa6.y = 10;
      }

 

 jack.collide(bloco);
 jack.collide(bloco2);
 drawSprites();
}
