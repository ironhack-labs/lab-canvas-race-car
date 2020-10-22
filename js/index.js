const $canvas = document.querySelector('canvas')
const ctx = $canvas.getContext('2d')


// // Draw the game board

const img = new Image();
img.src = "./../images/road.png";

const backgroundImage = {
  img:img,
  y: 0,
  speed: 0,

  move: function () {
    this.y += this.speed;
    this.y %= canvas.height;
    
  },
   

  draw: function () {
    ctx.drawImage(this.img, 0, this.y, canvas.width, canvas.height);
    ctx.drawImage(
      this.img,
      0,
      this.y - canvas.height,
      canvas.width,
      canvas.height
    );
  },
};
  
// Draw the car

class Component {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
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
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

class Car extends Component {
  constructor(width, height, x, y) {
    super(width, height, x, y);

    this.speedX = 0;

  
    const carImg = new Image();
    carImg.addEventListener("load", () => {
      
      this.carImg = carImg;
      this.draw();
    });
    carImg.src = "./../images/car.png";
  }

  moveLeft() {
    0 < this.x ? (this.speedX = -3) : (this.speedX = 0);
  }
  moveRight() {
    this.x < canvas.width - 50 ? (this.speedX = 3) : (this.speedX = 0);
  }

  newPos() {
    this.x += this.speedX;
  }

  draw() {
    ctx.drawImage(this.carImg, this.x, this.y, 50, 101);
  }
}

// Create obstacles


class Obstacle extends Component {
  constructor(width, height, color, x, y) {
    super(width, height, x, y);

    this.color = color;
    this.speedY = 0;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.y += this.speedY;
  }
}

// btn

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  let myObstacles = [],
    frames = 0,
    running = false,
    crashed = false,
    speed = 5,
    points = 0;

  backgroundImage.draw();
  backgroundImage.speed = speed;

  function startGame() {
    if (!running) {
      if (crashed) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        (myObstacles = []),
          (frames = 0),
          (crashed = false),
          (speed = 5),
          (points = 0);

        backgroundImage.draw();
        backgroundImage.speed = speed;
      }

      running = true;
      updateCanvas();
      document.getElementById("start-button").innerHTML = "Pause game";
    } else {
      stopGame();
    }
  }

  function stopGame() {
    running = false;

    if (crashed) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "40px arial";
      ctx.textAlign = "center";

      ctx.fillStyle = "red";
      ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);

      ctx.fillStyle = "white";
      ctx.fillText(
        "Your final score:",
        canvas.width / 2,
        canvas.height / 2 + 40
      );
      ctx.fillText(points, canvas.width / 2, canvas.height / 2 + 80);

      document.getElementById("start-button").innerHTML = "Restart Game";
    } else {
      document.getElementById("start-button").innerHTML = "Start Game";
    }
  }

  function checkGameOver() {
    crashed = myObstacles.some(function (obstacle) {
      return car.crashWith(obstacle);
    });

    if (crashed) {
      stopGame();
    }
  }

  function score() {
    points = Math.floor(frames / 5);
    ctx.font = "20px arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "end";
    ctx.fillText("Score: " + points, 425, 40);
  }

  const car = new Car(50, 101, 250, 590);

  function updateCanvas() {
    backgroundImage.move();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImage.draw();
    car.newPos();
    car.draw();
    updateObstacles();

    checkGameOver();
    score();

    if (running) {
      window.requestAnimationFrame(updateCanvas);
    }
  }

  function updateObstacles() {
    for (i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y += speed;
      myObstacles[i].update();
    }

    frames += 1;
    if (frames % 80 === 0) {
      let minWidth = 40;
      let maxWidth = 240;
      let width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      );
      let canvasWidth = canvas.width;
      let position = Math.floor(Math.random() * (canvasWidth - width + 1));
      myObstacles.push(new Obstacle(width, 10, "red", position, 0));
    }
  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37: // left arrow
        car.moveLeft();
        break;
      case 39: // right arrow
        car.moveRight();
        break;
    }
  };

  document.onkeyup = function (e) {
    car.speedX = 0;
  };
};







