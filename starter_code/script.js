class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = 'img/background.png';
  }
  draw() {
    this.y += 8; // background speed
    // restart background
    if (this.y > canvas.height) this.y = 0; 
    c.drawImage(this.img, this.x, this.y, this.width, this.height);
    c.drawImage(this.img, this.x, this.y - this.height, this.width, this.height);
  }
  gameOver(interval, counter) {
    clearInterval(interval);
    c.font = '70px sans-serif';
    c.fillStyle = 'white';
    c.fillText('Game Over', 10, canvas.height / 2);
    // print score
    c.font = '50px sans-serif';
    c.fillText(`Your score: ${counter}`, 50, canvas.height / 2 + 70);
  }
};

class Car {
  constructor() {
    this.width = 38;
    this.height = 77;
    this.x = (canvas.width / 2) - (this.width / 2); // car position on center 
    this.y = canvas.height - 150;
    this.img = new Image();
    this.img.src = 'img/car.png';
  }
  draw() {
    if (this.x < 60) this.x = 60; // left limit
    if (this.x > 290) this.x = 290; // right limit
    c.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  collision(item){
    return (this.x < item.x + item.width) &&
    (this.x + this.width > item.x) &&
    (this.y < item.y + item.height) &&
    (this.y + this.height > item.y);
  }
};

class Obstacle {
  constructor(x, width) {
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = 40;
  }
  draw() {
    if (frames % 10 === 0) this.y += 13; // obstacle movement
    c.fillStyle = 'brown';
    c.fillRect(this.x, this.y, this.width, this.height)
  }
};

const
canvas = document.getElementById('canvas'),
c = canvas.getContext('2d'),
background = new Background(),
car = new Car();

let 
frames = 0,
counter = 0,
obstacles = [];

function startGame() {
  const interval = setInterval(function() {
    if (frames % 60 === 0) counter++; // count seconds
    frames++;
    c.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    car.draw();
    generateObstacles();
    drawObstacles();
  }, 1000/60);
  
  addEventListener('keydown', function(e) {
    if (e.keyCode === 37) { // left arrow
      car.x -= 30; // car side speed
    }
    if (e.keyCode === 39) { // right arrow
      car.x += 30; // car side speed
    }
  });
  
  function generateObstacles() {
    if (frames % 300 === 0 || frames % 150 === 0) { // every 5s && 2.5s
      const
      random = Math.floor(Math.random() * canvas.width / 2 + 40), // random width of obstacle
      x = () => { 
        if (random > canvas.width / 2 + 2) {
          return 100; // position big obstacle
        } else {
          return 50; // position small obstacle
        }
      },
      width = () => {
        if (random > 100) { // min-width: 100px
          return random; 
        }
      };
      obstacle = new Obstacle(x(), width());
      obstacles.push(obstacle);
    }
  }
  
  function drawObstacles() {
    obstacles.forEach(function(obstacle) {
      obstacle.draw();
      if (car.collision(obstacle)) {
        background.gameOver(interval, counter);
      }
    });
  }
}

window.onload = function() {
  const start = document.getElementById("start-button");
  start.onclick = function() {
    startGame();
  };
};