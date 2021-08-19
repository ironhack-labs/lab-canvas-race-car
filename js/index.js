const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


class Car {

  constructor () {
    this.carWidth = canvas.width/10;
    this.carHeight = canvas.height/8;
    this.carPositionX = (canvas.width/2) - (this.carWidth/2);
    this.carPositionY =  canvas.height - 130;
    this.img = new Image();
    this.img.src = "/images/car.png";
  }

  moveLeft() {
    this.carPositionX -= 25;
  }

  moveRight() {
    this.carPositionX += 25;
  }
  
  draw() {
    ctx.drawImage(this.img, this.carPositionX, this.carPositionY, this.carWidth, this.carHeight);
  }
}


  class Obstacle {

    constructor () {
      this.obstacleWidth = (Math.random() * (canvas.width * 0.75))
      this.obstacleHeight = 15;
      this.obstaclePositionX = Math.random() * (canvas.width - this.obstacleWidth);
      this.obstaclePositionY = 0;
      this.img = new Image();
      this.img.src = "/images/barro.jpeg";
    }

    draw() {
      ctx.drawImage(this.img, this.obstaclePositionX, this.obstaclePositionY, this.obstacleWidth, this.obstacleHeight);
    }
  } 
  
  
// Función para limpiar el Canvas

function clearCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
}



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    

    const road = new Image()
    road.src = "/images/road.png";
    const car = new Car()
    obstaclesArr = [];
    obstaclesArr.push(new Obstacle()); 
    let step = 0;

  

    setTimeout( () => {
     ctx.drawImage(road, 0,0, canvas.width, canvas.height);
    }, 100);

    function updateCanvas(){
      clearCanvas();
      ctx.drawImage(road, 0,0, canvas.width, canvas.height)
      car.draw()
      obstaclesArr.forEach(obstacle => {
        obstacle.draw()
      })
    }

    document.addEventListener('keydown', e => {
      switch (e.code) {
        case "ArrowLeft":
          car.moveLeft();
          console.log('left');
          break;
        case "ArrowRight":
          car.moveRight();
          console.log('right');
          break;
      }
    });

    setInterval( () => {
      updateCanvas()
    }, 100);

    setInterval( () => {
      obstaclesArr.forEach(obstacle => {
        obstacle.obstaclePositionY += 5
      })
    }, 100);
  
    setInterval( () => {
        obstaclesArr.push(new Obstacle()); 
    }, 5000);
  
  }
}
