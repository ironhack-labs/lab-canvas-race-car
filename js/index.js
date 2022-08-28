window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const scoreTag = document.getElementById('score');
  
  document.getElementById('start-button').onclick = () => {
    scoreTag.style.display = 'block';
    startGame();
  };
  
  const roadImg = new Image();
  roadImg.src = '/images/road.png';
  const carImg = new Image();
  carImg.src = '/images/car.png';

  let obstacles = [];
  let obstaclesCounter = 0;
  let score = 0;
  
  class Road {
    constructor(x, y, width, height, image) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = image
    }
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }

  class Car {
    constructor(x, y, width, height, image) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = image;
    }
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    moveLeft() {
      if (this.x >= 65) {
        this.x -= 10;
      }
    }
    moveRight() {
      if (this.x <= 385) {
        this.x += 10;
      }
    }
  }

  class Obstacle {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
    draw() {
      ctx.fillStyle = 'orange';
      ctx.fillRect(this.x, this.y, this.width, this.height);
      this.y += 5;
    }
  }

  function startGame() {
    const carWidth = 50;
    const carHeight = 100;
    const road = new Road(0, 0, canvas.width, canvas.height, roadImg)
    const car = new Car(canvas.width / 2 - carWidth / 2, canvas.height - (carHeight + 50), 50, 100, carImg);
    detectKeys(car);
    const idInterval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      road.draw();
      car.draw();
      generateRandomObstacle();
      getScore();
      scoreTag.innerText = `Score: ${score}`;
      // draw obstacles
      obstacles.forEach((obstacle) => {
        obstacle.draw();
        if (
          obstacle.x < car.x + car.width &&
          obstacle.x + obstacle.width > car.x &&
          obstacle.y < car.y + car.height &&
          obstacle.y + obstacle.height > car.y
          ) {
          // lose
          alert(`Perdiste, tu puntuacion final es: ${score}`)
          clearInterval(idInterval);
          obstacles = [];
          obstaclesCounter = 0;
          score = 0;
        }
      });
    }, 1000 / 60);
  }

  function generateRandomObstacle () {
    obstaclesCounter += 1;
    let randX, randWidth;
    if (obstaclesCounter === 100) {
      randX = random(65, 335);
      randWidth = random(100, 300);
      while (randX + randWidth > 435) {
        randWidth = random(100, 300);
      }
      obstacles.push(new Obstacle(randX, 0, randWidth, 20));
      obstaclesCounter = 0;
    }
  }

  function getScore () {
    obstacles.forEach((obstacle, index) => {
      if(obstacle.y > canvas.height) {
        obstacles.splice(index, 1);
        score += 1;
      }
    });
  }

  function random(min, max) {
    return Math.floor(min + Math.random()*(max - min + 1));
  }

  function detectKeys(car) {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowRight':
          car.moveRight();
          break;
        case 'ArrowLeft':
          car.moveLeft();
          break;
      }
    })
  }
};
