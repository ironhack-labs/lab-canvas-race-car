// loading

const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

let gameIsRunning = true;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  function startGame() {
    cleanCanvas()
    drawBackground()
    car.drawCar()
    for (let obstacle of obstacles) {
      obstacle.paint();
    }
   
  }

    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 37://left
        car.moveLeft()
        startGame()
            
           break;
        case 39: // right
        car.moveRight()
        startGame()
        
          break;
      }
    })

    function drawBackground(){
      //back rectangle
      context.fillStyle = 'grey'
      context.beginPath();
      context.fillRect(0, 0, 550, 550);
      
       //left green
       context.lineWidth = 85
       context.beginPath()
       context.setLineDash([]);/*dashes are 5px and spaces are 3px*/
       context.strokeStyle = 'green'
       context.moveTo(0,0 )
       context.lineTo(0, 550)
       context.stroke()
       context.closePath()
     
      // right green
      
       context.beginPath()
       context.moveTo(400,0)
       context.lineTo(400, 550)
       context.stroke()
       context.closePath()
     
         //left white
         context.lineWidth = 10
         context.beginPath()
         context.strokeStyle = 'white'
         context.moveTo(60,0)
         context.lineTo(60,550)
         context.stroke()
         context.closePath()
       
        // right white
        
         context.beginPath()
         context.moveTo(340,0)
         context.lineTo(340, 550)
         context.stroke()
         context.closePath()
     
      // center white
      context.lineWidth = 5   
     context.setLineDash([30, 30]);/*dashes are 5px and spaces are 3px*/
     context.beginPath();
     context.moveTo(200,0);
     context.lineTo(200, 550);
     context.stroke();
     
     }

     const cleanCanvas = () => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    };
    
};

class Obstacle{
  constructor(positionY){
    this.positionX = 0;
    this.positionY = positionY ;
    this.width = 30 // check this
    this.height = 30
    this.setRandomPosition()
  }
  setRandomPosition () {
    
    this.width = Math.random() * 400 ;
  }
  checkCollision () {
    const carX = car.x;
    const carY = car.y;
    const carWidth = car.width;
    const carHeight = car.height;

    const obstacleX = this.positionX;
    const obstacleY = this.positionY;
    const obstacleWidth = this.width;
    const obstacleHeight = this.height;
    
    if (
      carX + carWidth > obstacleX &&
      carX < obstacleX + obstacleWidth &&
      carY + carHeight > obstacleY &&
      carY < obstacleY + obstacleHeight
    ) {
      gameIsRunning = false;
    }
  }

  runLogic () {
    this.positionY += 1.5;
    this.checkCollision();
  }

  paint () {
    context.fillStyle = "#FF0000"
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }
}

//const obstacle = new Obstacle()

const obstacles = [];

for (let i = 0; i < 100; i++) {
   const obstacle = new Obstacle(200 + i * 250);
  obstacles.push(obstacle);
}


const runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};



class Car {
  constructor(x,y){
    this.x = 200;
    this.y = 465;
    this.width = 50;
    this.height= 75;
  }

  moveRight(){
    if(this.x < 350){
      this.x += 15
    }
    
  }

  moveLeft(){
    if(this.x > 5){
      this.x -= 15
    }
   }
   drawCar(){
    const carImageUrl = "./images/car.png"
    const carImage = new Image()
    carImage.src = carImageUrl
    carImage.addEventListener('load', () => {
    context.drawImage(carImage,this.x,this.y,50,75)})
  }
  
  
}
const car = new Car();

const loop = () => {
  runLogic();
  startGame()
  

  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }
};

loop();