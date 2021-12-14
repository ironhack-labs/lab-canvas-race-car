const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Iteration 2 and 3
const car = {
  positionX: 180,
  positionY: 525,
  width: 30,
  height: 60,
  speedX: 0,

  // Iteration 2: Draw the car
  draw() {
    const img = new Image();
    img.src = './images/car.png';
    img.onload = () => {
      ctx.drawImage(img, this.positionX, this.positionY, this.width, this.height);
    };
  },
  
  // Iteration 3: Make the car move right and left
  move() {
    ctx.clearRect(this.positionX, this.positionY, this.width, this.height);
    this.positionX += this.speedX;
    this.draw();
  },
};

// Iteration 2: Draw the car
car.draw();

// Iteration 3: Make the car move right and left
window.addEventListener("load", () => {
  document.addEventListener("keydown", (e) => {
      switch (e.key) {
          case "ArrowLeft":
              if (car.positionX > 37) {
                car.speedX = -8;
              } else {
                car.speedX = 0;
              };
              car.move();
              break;
          case "ArrowRight":
            if (car.positionX < 215) {
              car.speedX = 8;
            } else {
              car.speedX = 0;
            };
            car.move();
      };
  });
});

// Iteration 4: Create obstacles
class Obstacle {
  constructor(positionX, width) {
    this.positionX = positionX;
    this.positionY = 0;
    this.width = width;
    this.height = 25;
    this.speedY = 1;
  };

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
  };

  // Iteration 5: Move the obstacles
  move() {
    ctx.clearRect(this.positionX, this.positionY, this.width, this.height);
    this.positionY += this.speedY;
    this.draw();
  };
};


const createObstacles = () => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const randomPositionX = randomNumber(37, 147);
  const randomWidth = randomNumber(50, 108);

  const obstacle = new Obstacle(randomPositionX, randomWidth);
  obstacle.draw();

  // Iteration 5: Move the obstacles
  const intervalId = setInterval(() => {
    obstacle.move();
    
    if (obstacle.positionY === 588) {
      clearInterval(intervalId);
    };
  }, 25);
};

// Iteration 6: Points, points, points
const score = () => {
  let points = 0;

  ctx.font = '18px serif';
  ctx.fillStyle = 'black';
  ctx.fillText(`Score: ${points}`, 255, 20, 50);

  setTimeout(() => {
    ctx.clearRect(255, 5, 50, 30);
    points += 1;

    ctx.font = '18px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${points}`, 255, 20, 50);

    const intervalId = setInterval(() => {
      ctx.clearRect(255, 5, 50, 30);
      points += 1;
  
      ctx.font = '18px serif';
      ctx.fillStyle = 'black';
      ctx.fillText(`Score: ${points}`, 255, 20, 50);
    }, 3500);
  }, 14920);
};

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    createObstacles();
    score();

    const intervalId = setInterval(() => {
      createObstacles();
    }, 3500);
  };
};