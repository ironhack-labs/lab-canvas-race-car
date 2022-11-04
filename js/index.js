const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

let score = 0
let gameOver = false

  function startGame() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  class Road {
    constructor(x, y){
    this.x = x;
    this.y = y;

      const img = new Image();
      img.addEventListener('load', () => {
        this.img = img;
        this.draw();
      })
      img.src = '../images/road.png'
      
    }
    draw(){
      ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
    }

  }

  const road = new Road(canvas.width, canvas.height);


  class Obstacles {
    constructor(x, y, width, height, color){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
    moveDown(){
      this.y += 1
    }

    draw(){
      ctx.fillRect(this.x, this.y, this.width, this.height, this.color);

    }
    update(){
      if (this.y - this.height < canvas.height) {
        
        score++
      }
    }
  }

  const newObstacle = new Obstacles()

 
  class Car {
    constructor (x, y, width, height){
      this.x = x;
      this.y = y;
      this.height = height
      this.width = width
  
      const img = new Image();
      img.addEventListener('load', () => {
        this.img = img;
        this.draw();
      });
      img.src = '../images/car.png'

      
    }
    moveLeft(){
      this.x -= 10;
    }
    moveRight(){
      this.x += 10;
    }

// maybe do an update method

    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
    }  
  }

  
function status(){
  ctx.textAlign = 'center'
  ctx.font = '30px sans-serif'
  ctx.fillStyle = 'black'
  ctx.fillText('Score: ' + score,70,50)
  ctx.fillStyle = 'white'
  ctx.fillText('Score: ' + score, 72, 52)
  

  }

  const car = new Car(220, 500, 50, 100);

  

  window.addEventListener('keydown', function(e) {
    switch(e.key) {
      case 'ArrowLeft':
        car.moveLeft();
        break;
      case 'ArrowRight':
        car.moveRight();
        break;
    }


  });  


  let myIntervalId;
  let frameCount = 0;
  const obstacleArray = [];

  const animationLoop = () => {


    frameCount++;

    if(frameCount % 180 === 0){

        const newObstacle = new Obstacles(Math.floor(Math.random() * 300), 0, Math.floor(Math.random() * 300), 10, 'red');

        obstacleArray.push(newObstacle);
        console.log(obstacleArray)
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);  
    road.draw();

    for(let i = 0; i < obstacleArray.length; i++){
     
     
      obstacleArray[i].moveDown();
      obstacleArray[i].draw();
      // console.log(obstacleArray);

      if (
        car.x < obstacleArray[i].x + obstacleArray[i].width &&
        car.x + car.width > obstacleArray[i].x &&
        car.y < obstacleArray[i].y + obstacleArray[i].height &&
        car.height + car.y > obstacleArray[i].y
      ) {
        // Collision detected!
        console.log("yo");

        ctx.textAlign = 'center'
        ctx.fillStyle = 'black'
        ctx.fillText('Game Over', canvas.width/2, 200)
        ctx.fillStyle = 'white'
        ctx.fillText('Game Over', canvas.width/2, 202)
        clearInterval(myIntervalId)
      }
      if (obstacleArray[i].y > canvas.height) {
        score += 1;
        console.log(score);
        obstacleArray.splice(i, 1);
      }

  }



    newObstacle.update()
    status()
    car.draw();
    // newObstacle.draw();

  };

  myIntervalId = setInterval(animationLoop, 16);

  }





