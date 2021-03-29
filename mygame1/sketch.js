var chocobar,donut1, donut2, cookie, icecream,croissant, gameover,
carrot, beet, broccoli, cabbage, cucumber,avacodo,germ1,germ2,germ3,bowl,chocobarGroup

var score = 0 

var chocobarImg, donut1Img, donut2Img, cookieImg, icecreamImg,croissantImg,
cupcakeImg,carrotImg, beetImg, broccoliImg, cabbageImg, cucumberImg,avacodoImg,germ1Img,germ2Img,germ3Img,bowlImg, gameoverImg

var count = 0

var gameState = "play"



function preload(){
  chocobarImg = loadImage("images/chocobar.png");
  donut1Img = loadImage("images/donut.png");
  donut2Img = loadImage("images/donut2.png");
  cookieImg = loadImage("images/cookie.png");
  germ1Img = loadImage("images/germ1.png");
  bowlImg = loadImage("images/bowl.png");
  gameoverImg = loadImage("images/gameover.png");
  
}
function setup() {
  createCanvas(1800,520);

  bowl = createSprite(350,400,50,50);
  bowl.addImage(bowlImg);
  bowl.scale = 0.3;

  chocobarGroup = createGroup();
  donut1Group = createGroup();
  donut2Group = createGroup();
  cookieGroup = createGroup();
  icecreamGroup = createGroup();
  croissantGroup = createGroup();
  cupcakeGroup = createGroup();
  germ1Group = createGroup();

  

}

function draw() {
  background("beige"); 
  text("score:  " +score, 150, 100);
  if(gameState === "play") {

  

  edges = createEdgeSprites();
  bowl.bounceOff(edges);
  
  drawSprites();

  if(keyDown("RIGHT")){
    bowl.velocityX = 9;  
  }


  if(keyDown("LEFT")){
   bowl.velocityX = -9;
  }
  if(keyWentUp("LEFT")){
    bowl.velocityX = 0;
}
if(keyWentUp("RIGHT")){
  bowl.velocityX = 0;

   }
   if(bowl.isTouching(chocobarGroup)){
     console.log("hi welcome to my game");
     score = score+10
     chocobarGroup.destroyEach();
   }
     if(bowl.isTouching(donut1Group)){
      console.log("hi welcome to my game");
      score = score+10
      donut1Group.destroyEach();
 
   }
   if(bowl.isTouching(donut2Group)){
    console.log("hi welcome to my game");
    score = score+10
    donut2Group.destroyEach();
   }
    if(bowl.isTouching(germ1Group)){
      
      console.log("hi welcome to my game");
      score = score-10
      count = count+1
      germ1Group.destroyEach();
       console.log(count)
    
   }
   if(bowl.isTouching(cookieGroup)){ 
    console.log("hi welcome to my game");
    score = score-10
    cookieGroup.destroyEach();
    }
     if(score > 200){
  spawngerm()
}
if(count >= 4) {
gameState = "end"

}

}
 if(gameState === "end")   {

      bowl.destroy();
     chocobarGroup.destroyEach() 
     donut1Group.destroyEach()
     donut2Group.destroyEach()
     germ1Group.destroyEach()
     cookieGroup.destroyEach()
     gameover = createSprite(400,300,50,50);
     gameover.addImage(gameoverImg);




    }
   Spawn();
  }


  function Spawn(){
  if(frameCount % 60 === 0){
  chocobar = createSprite(400, 10, 50, 50);
  chocobar.addImage(chocobarImg);
  chocobar.scale = 0.2;

  chocobar.velocityY = 5+score/100

  chocobar.x = Math.round(random(10,1000));

  chocobarGroup.add(chocobar);
  }
  if(frameCount % 70 === 0){
    donut1 = createSprite(400, 10, 50, 50);
    donut1.addImage(donut1Img);
    donut1.scale = 0.2;

    donut1.velocityY = 7+score/100

    donut1.x = Math.round(random(5,10000));

    donut1Group.add(donut1);
  }
  if(frameCount % 60 === 0){
    donut2 = createSprite(400, 10, 50, 50);
    donut2.addImage(donut2Img);
    donut2.scale = 0.2;
  
    donut2.velocityY = 6+score/100
  
    donut2.x = Math.round(random(5,1200));
  
    donut2Group.add(donut2);
  }
  if(frameCount % 60 === 0){
    cookie = createSprite(400, 10, 50, 50);
    cookie.addImage(cookieImg);
    cookie.scale = 0.2;

    cookie.velocityY = 5+score/100

    cookie.x = Math.round(random(8,10000));

    cookieGroup.add(cookie);
  
  } 


  
//  }

  

  }
  

  
  function spawngerm()
{
  if(frameCount % 60 === 0){
    germ1 = createSprite(400, 10, 50, 50);
    germ1.addImage(germ1Img);
    germ1.scale = 0.2;
  
    germ1.velocityY = 5
  
    germ1.x = Math.round(random(6,1270));
  
    germ1Group.add(germ1);

  }

}
