let scoreText = document.getElementById("score")

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};

  function startGame() {
    car = new Car();
    car.load();
    obstacles = []; // array to store all obstacles
    score = 0;  
    scoreText.innerHTML = 0;

    setInterval(() => {
      obstacles.push(new Obstacle());
    }, 500);
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 37: // left arrow
          if(car.x > 30)
            car.x -= 10;
          break;
        case 39: // right arrow
          if(car.x < 200)
            car.x += 10;
          break;
      }
      update();
    }
    gameInterval = setInterval(update, 1000/60); // call the update function every 1000/60 milliseconds
  }
  



canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

background = new Image();
background.src = './images/road.png';

background.onload = function() {
  ctx.drawImage(background, 0, 0);
}

let car;
let obstacles = [];
let score = 0;
let gameInterval;


class Car {
  constructor() {
    this.x = 115;
    this.y = 300;
    this.width = 50;
    this.height = 100;
    this.image = new Image();
    this.image.src = './images/car.png';
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  load() {
    this.image.onload = () => {
        this.draw();
    };
  }
}

class Obstacle {
  constructor() {
    this.x = Math.random() * 200;
    this.y = -50;
    this.width = Math.floor(Math.random() * 130 + 50);
    this.height = 10;
    this.fill = 'red';
  }

    draw() {
      ctx.fillStyle = this.fill;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

  load() {
    this.image.onload = () => {
        this.draw();
    };
  }
}

function update() {

  score++;
  console.log(score)
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0);
  car.draw();
    // move and redraw all obstacles
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].y += 5; // move obstacle down by 5 pixels
      obstacles[i].draw();
    }
  // remove obstacles that have gone off the bottom of the canvas
  obstacles = obstacles.filter(obstacle => obstacle.y < canvas.height - 266);
  // check for collisions
  for (let i = 0; i < obstacles.length; i++) {
    if (car.x < obstacles[i].x + obstacles[i].width &&
      car.x + car.width > obstacles[i].x &&
      car.y < obstacles[i].y + obstacles[i].height &&
      car.y + car.height > obstacles[i].y) {
      // collision detected!
      console.log('collision detected!');
      // stop the game
      clearInterval(gameInterval);
     console.log(document.getElementById("score"))
      document.getElementById("score").innerHTML = score;
      document.getElementById("game-over-text").style.display = "block";
      startGame();

    }
  }
}



