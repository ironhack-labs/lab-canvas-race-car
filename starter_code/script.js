let startButton = document.getElementById("start-button");

let myCanvas = document.getElementById("myBoard");


let ctx = myCanvas.getContext("2d");

startButton.onclick = startGame;

let score = 0;



//--------------------START THE GAME-------------------------------------------------
function startGame(){
let gameOn = true;
//--------------LOAD BACKGROUND-------------------------------------------------

myCanvas.width = 600;
myCanvas.height = 700;
myCanvas.style.marginTop = "0px";
myCanvas.style.background = 'url("/starter_code/images/road.png")';
myCanvas.style.backgroundSize = "cover";


//--------------------LOAD CAR IMAGE------------------------------------------------------
let carImg = new Image();
carImg.src = "/starter_code/images/car.png";


//--------------------CAR BOJECT-----------------------------------------------------
class Car{
  constructor(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.draw = function(){
    ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
  }
}
}
//-------------------MAKE A INSTANCE OF CLASS CAR (PLAYER)----------------------------------------------------------------
let newCar = new Car(280, 580, 50, 100);


//---------------------------------CAR MOVE FUNCTION------------------------------------------
window.addEventListener("keydown", function(event){
 
  switch(event.keyCode){
   
case 37: //LEFT
if(newCar.x + newCar.width > 150){
  newCar.x -= 10;
}
break;
case 39: //RIGHT
if(newCar.x + newCar.width < 500){
  newCar.x += 10;
}
break;
  }
})


//----------------------------OBSTACLE CLASS------------------------------------------------------------------
class Obstacle{
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.draw = function(){
      ctx.fillStyle = "rgb(87, 26, 26)";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.move = function(){
      this.y += 3;
    }
  }
}

//-------------------------MAKING 3 INSTANCES OF CLASS OBSTACLE-------------------------------------------------------------------
let theObstacle = new Obstacle(Math.floor(Math.random() * (300 - 100 + 1)) + 100, 0, 140, 20);
let theObstacle2 = new Obstacle(Math.floor(Math.random() * (300 - 100 + 1)) + 100, -200, 140, 20);
let theObstacle3 = new Obstacle(Math.floor(Math.random() * (300 - 100 + 1)) + 100, -400, 140, 20);

//-----------------------DISPLAY SCORE---------------------------------------------------
function displayScore(){
  ctx.fillStyle = "white";
    ctx.font = "13px Helvetica";
    ctx.fillText(`SCORE: ${score}`, 120, 30);
}


//-----------------------------COLLISION DETECTION---------------------------------------------
function checkCollision(car, obj){
  let carW = car.width;
  let carH = car.height;
  let carX = car.x;
  let carY = car.y;
  let objW = obj.width;
  let objH = obj.height;
 let objX = obj.x;
 let objY = obj.y;

 if((((carY - carH) - (objH + objY)) < -85) &&  (((carY - carH) - (objH + objY)) > -170) && (((carX - carW) - (objW + objX)) < -55) && (((carX - carW) - (objW + objX)) > -200)){
  gameOn = false;
 }  
  

}

//-------------------------ANIMATION FUCTION---------------------------------------------------
function animate(){

if(gameOn === true){
  requestAnimationFrame(() => animate())
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  newCar.draw();
 theObstacle.draw();
 theObstacle.move();
 theObstacle2.draw();
 theObstacle2.move();
 theObstacle3.draw();
 theObstacle3.move();
  if(theObstacle.y > innerHeight){
    score += 1;
    theObstacle.x = Math.floor(Math.random() * (370 - 100 + 1)) + 100;
    theObstacle.width = Math.floor(Math.random() * (140 - 100 + 1)) + 100;
    theObstacle.y = 0;
  }
  if(theObstacle2.y > innerHeight){
    score += 1;
    theObstacle2.x = Math.floor(Math.random() * (370 - 100 + 1)) + 100;
    theObstacle2.width = Math.floor(Math.random() * (140 - 100 + 1)) + 100;
    theObstacle2.y = 0;
  }
  if(theObstacle3.y > innerHeight){
    score += 1;
    theObstacle3.x = Math.floor(Math.random() * (370 - 100 + 1)) + 100;
    theObstacle3.width = Math.floor(Math.random() * (140 - 100 + 1)) + 100;
    theObstacle3.y = 0;
  }
  checkCollision(newCar, theObstacle);
  checkCollision(newCar, theObstacle2);
  checkCollision(newCar, theObstacle3);
  displayScore();
  

}else{
  gameOver();
}
}
  animate();
}


//---------------------GAME OVER FUNCTION--------------------------------------------------------

function gameOver(){
  myCanvas.style.background = 'black';
  myCanvas.style.marginTop = "150px";
  myCanvas.width = 600;
myCanvas.height = 300;
//-----GAME OVER TEXT---------
ctx.fillStyle = "red";
ctx.font = "60px Helvetica";
ctx.fillText("Game Over!", 140, 80);
//-----YOUR FINAL SCORE TEXT-----------
ctx.fillStyle = "white";
ctx.font = "60px Helvetica";
ctx.fillText("Your final score", 100, 160);
//------------SCORE TEXT------------------------
ctx.fillStyle = "white";
ctx.font = "60px Helvetica";
ctx.fillText(`${score}`, 270, 250);
score = 0;
}


