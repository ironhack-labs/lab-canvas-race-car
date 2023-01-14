
//BACKGROUND CANVAS ANIMATION------------------------------------------------------------------------------------------------

const img = new Image();
img.src = './images/road.png';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//---------------------------------------------------------------------------------------------------------------------------

const backgroundImage = {
  img: img,
  y: 0,
  speed: +2,

  move: function() {
    this.y += this.speed;
    this.y %= canvas.height-652;
  },

  draw: function() {
    ctx.drawImage(this.img, 0, this.y, 500,700);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y - canvas.height);
    } else {
      ctx.drawImage(this.img, 0, this.y + canvas.height);
    }
  },

  clear: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
},

};

function updateCanvas() {
  backgroundImage.move();
  backgroundImage.draw();
  requestAnimationFrame(updateCanvas);
}

//CAR AND OBSTACLE CONSTRUCTOR-----------------------------------------------------------------------------------------------

const img1 = new Image();
img1.src = './images/car.png';

const img2 = new Image();
img2.src = './images/explosion.png'

class Component {
  constructor(width, height, fill, x, y, speedY) {
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = speedY;
   
  }
  move() {
    this.y+=this.speedY;
    this.x+=this.speedX
   
  }

  draw() {
    const canvas = document.getElementById('canvas');
    const ctx1 = canvas.getContext('2d');
    ctx1.drawImage(this.fill, this.x, this.y, this.width, this.height);
  }

  update() {
    const canvas = document.getElementById('canvas');
    const ctx2 = canvas.getContext('2d');
    ctx2.fillStyle = this.fill;
    ctx2.fillRect(this.x, this.y, this.width, this.height);
  }
 
  left() {
    
      return this.x;
  }
  right() {
    
      return this.x + this.width; 
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }
   
  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || 
    this.top() > obstacle.bottom() || 
    this.right() < obstacle.left() || 
    this.left() > obstacle.right());
    }
 
}

//-----------------------------------------------------------------------------------------------------------------------

const newCar = new Component(50, 90, img1, 225, 550,0);

//-----------------------------------------------------------------------------------------------------------------------

let obsWidth, obsHeight, obsPosX, obsPosY, ObsSpeedY
obsWidth = canvas.width-(newCar.width*2.5)
obsHeight=20;
obsPosY= 0;
obsPosX=canvas.width-obsWidth
ObsSpeedY=0.8;

let obstacleArr = []

for (let i=0;i<5;i++){ //Assuming we set 5 obstacles

  obstacleArr.push(
  new Component(Math.floor(Math.random()*obsWidth),
  obsHeight,
  "red",
  Math.floor(Math.random()*obsPosX),
  obsPosY-(i*200), //Obstacles are set at distance intervals of 200px from each other along the y axis
  ObsSpeedY)
  )

}

//-----------------------------------------------------------------------------------------------------------------------

let finishingLine = new Component (canvas.width,obsHeight,"yellow",0,-1000,ObsSpeedY)

obstacleArr.push(finishingLine)

//FUNCTIONS---------------------------------------------------------------------------------------------------------------

let score = document.getElementById('score')

function updateScore(obstacleNumber){
  if(obstacleNumber==="side"){
    score.innerText = `Oops you have crashed! You score nothing :(`
  }
  else{
    let scoreVal = (obstacleNumber*5)+5

    if(scoreVal <= 25){
      score.innerText=`Your score is: ${scoreVal}! Better Luck next time!`
    }
    else if (scoreVal===30) {
      score.innerText=`Your score is: ${scoreVal}! You are a winner!!!`
    }
  }
  
  
} 

//-----------------------------------------------------------------------------------------------------------------------

function updateNewCar (){

  newCar.move()
  newCar.draw()

  requestAnimationFrame(updateNewCar)

}

//-----------------------------------------------------------------------------------------------------------------------

function updateNewObstacles(){

  for(let item of obstacleArr){
  
    item.move()
    item.update()
    checkGameOver()
  
  }

  requestAnimationFrame(updateNewObstacles);

}

//-----------------------------------------------------------------------------------------------------------------------

function stopGame(){
  backgroundImage.speed=0
  newCar.speedX=0
  for(let element of obstacleArr){
    element.speedY=0
  }
  if(newCar.left()<=0){
    newCar.x=-50
    newCar.width = 200
    newCar.fill = img2
    newCar.speedX=0
  }
  
  else if(newCar.right()>=canvas.width){
  newCar.x=canvas.width-newCar.width+50
  newCar.width = 200
  newCar.fill=img2
  newCar.speedX=0
  }
  
}

//-----------------------------------------------------------------------------------------------------------------------

function checkGameOver(){ 
  
  for(let item of obstacleArr){
    let itemNumber = obstacleArr.indexOf(item);
    if(newCar.crashWith(item) && item.fill==="red"){ 
      stopGame()
      updateScore(itemNumber)  
    }
    else if(newCar.crashWith(item) && item.fill==="yellow"){
     updateScore(obstacleArr.length-1)
     setTimeout(function(){
      stopGame()
     },1500)
    }
    else if(newCar.left()<=0||newCar.right()>=canvas.width){
      updateScore("side")
      stopGame()

    }
  }          
}

//-----------------------------------------------------------------------------------------------------------------------

document.addEventListener('keydown', (e) => {
 
    switch (e.keyCode) {
      case 37: // left arrow
        newCar.speedX -= 1;
        break;
      case 39: // right arrow
        newCar.speedX += 1;
        break;
    }
  
});

//-----------------------------------------------------------------------------------------------------------------------
function startGame() {

  updateCanvas()
  updateNewCar()
  updateNewObstacles()
  
}

//-----------------------------------------------------------------------------------------------------------------------

window.onload = () => {
  document.getElementById('start-button').onclick = () => {

    startGame();

  };
};