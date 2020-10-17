const img = new Image();
img.src = 'images/road.png';
const imgCar = new Image();
imgCar.src = 'images/car.png';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.font = '30px Arial'

class Background {
  constructor() {
    this.y = 0;
    this.speed = 3;
    this.img = img;
  }

  move(){
    this.y += this.speed;
    this.y %= canvas.height;
  }

  draw() {
    ctx.drawImage(this.img,0,this.y,canvas.width,canvas.height);
    ctx.drawImage(this.img, 0 ,this.y - canvas.height, canvas.width, canvas.height);
  }
}

class Car {
  constructor () {
    this.x = (canvas.width/2)-25;
    this.y = canvas.height - 150;
    this.imgCar = imgCar;
  }

  moveRight(){
    this.x < canvas.width-100 ? this.x += 20 : null;
  }

  moveLeft(){
    this.x> 50 ? this.x -= 20 : null;
  }

  draw(){
    ctx.drawImage(this.imgCar,this.x, this.y,50,90)
  }

  crashWith(obstacle) {
    return !(
      this.y+90 < obstacle.y || 
      this.y > obstacle.y + 40 ||
      this.x+50 < obstacle.x ||
      this.x > obstacle.x + obstacle.width 
    )
  }
}

class Obstacle {
  constructor() {
    this.y = 0;
    this.x = Math.floor(Math.random() * (canvas.width-180 -50 + 1) + 50)
    const randomWidth = Math.floor(Math.random()*(canvas.width-200 - 80 +1) +80);
    this.width = this.x+randomWidth < canvas.width-50 ? randomWidth : (canvas.width-50)-this.x;
    this.counter = 0
  }

  move (){
    this.y += backgroundImage.speed;
  }

  draw(){
    ctx.fillRect(this.x,this.y,this.width, 40)
  }
}

//Creating the Variables needed to control
const backgroundImage = new Background;
const car = new Car;
const myObstacles = [];
let counter = 0;
let score = 0;


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

//this will provide the interactions between the keyboard and the car
  document.addEventListener('keydown', event => {
    switch(event.keyCode){
      case 39: car.moveRight(); break;
      case 37: car.moveLeft();break;
    }
  });

//The startGame function will trigger the updateCanvas which will work as the main animation.
  function startGame() {
    updateCanvas();
  };

  // Where all the animations will be centered
  function updateCanvas() {
    backgroundImage.move();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    backgroundImage.draw();
    car.draw();
    ctx.fillStyle = '#800020';
    updateObstacles();
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText("Score: "+score,80,100);
    checkGameOver();
    requestAnimationFrame(updateCanvas);
  };
  
  //Animations with the obstacles

  function updateObstacles(){
    counter += 1;
    counter % 120 === 0 ? myObstacles.push(new Obstacle):null;
    for (i=0; i<myObstacles.length; i++){
      myObstacles[i].move();
      myObstacles[i].draw();
      //In case we see that the car has passed the obstacle, we'll score a point
      //and leave the obstacle out of the array
      myObstacles[i].y < canvas.height? null : (myObstacles.shift(), score++);
    }
  };

  //Will serve to check if the game is over
  function checkGameOver () {
    const crashed = myObstacles.some(function(obstacle) {
      return car.crashWith(obstacle);
    });

    //Verifying if the result was a crash.

    if(crashed) {
      ctx.font = '40px Arial'
      ctx.fillStyle = "#000000";
      ctx.fillRect(50,250,400,150);
      ctx.fillStyle = "red"
      ctx.fillText('Game Over',150,310);
      ctx.fillStyle = "#FFFFFF"
      ctx.fillText('Your final score '+score,100,360)
      window.cancelAnimationFrame();
    }
  }
};
