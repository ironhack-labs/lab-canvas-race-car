window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    let fondo = document.createElement('img');
    fondo.src = './images/road.png'

    let car = document.createElement('img');
    car.src = './images/car.png'
    let carX = canvas.width / 2 - car.width / 2;
    let carY = canvas.height - car.height - 10;
    let carSpeed = 5; 
    let leftPressed = false; 
    let rightPressed = false;

    const myObstacles =[];
    let frames = 0;
    let minX = 10;
    let maxX = canvas.width - 100;


    class Obstacle {
      constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
      }
    
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
    


    function draw() {
      ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(car, carX, carY);

      for (let i = 0; i < myObstacles.length; i++) {
        myObstacles[i].draw();
      }

    }

    function update() {
      if (leftPressed) {
        carX -= carSpeed;
      } else if (rightPressed) {
        carX += carSpeed;
      }

      if (carX < 0) {
        carX = 0;
      } else if (carX > canvas.width - car.width) {
        carX = canvas.width - car.width;
      }

      for (let i = 0; i < myObstacles.length; i++) {
        myObstacles[i].y += carSpeed; // aumentar la posición y según la velocidad del coche
      }
    }

    function gameLoop() {
      draw();
      update();  

      frames++; 
      if (frames % 100 === 0) {
        createObstacle();
      }


      requestAnimationFrame(gameLoop);
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        leftPressed = true;
      } else if (event.key === 'ArrowRight') {
        rightPressed = true;
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.key === 'ArrowLeft') {
        leftPressed = false;
      } else if (event.key === 'ArrowRight') {
        rightPressed = false;
      }
    });

    //obstacles

    function createObstacle() {

      let randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
    
      let randomWidth = Math.floor(Math.random() * (150 - 50 + 1) + 50);
        
      let obstacle = new Obstacle(randomX, 10, randomWidth, 30, 'red');
    
      myObstacles.push(obstacle);
    }




    // iniciar el juego
    gameLoop();
  }
};
