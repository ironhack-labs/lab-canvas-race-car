window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function updateGameArea() { }

  class GameArea {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.context = this.canvas.getContext('2d');
      this.obstacles = [];
      this.frames = 0;
      this.points = 0;
    }

    start = () => {
      this.intervalId = setInterval(updateGameArea, 20);
      updateGameArea();
    };
    clear = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    stop = () => {
      clearInterval(this.intervalId);
      this.gameOver();
    }
    score = () => {
      // this.points += Math.floor(this.frames / 5);
      this.context.fillStyle = 'white';
      this.context.font = 'bold 40px serif';
      this.context.fillText(`Score: ${this.points}`, 65, 65);
    }
    gameOver = () => {
      this.clear();
      this.context.fillStyle = 'black';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillStyle = 'red';
      this.context.textAlign = 'center';
      this.context.font = 'bold 60px Arial';
      this.context.fillText('GAME OVER', 250, 250);

    }
  }

  const gameArea = new GameArea();

  class Background {
    constructor() {
      this.img = new Image();
      this.img.src = './images/road.png';
    }

    draw = () => {
      gameArea.context.drawImage(this.img, 0, 0, gameArea.canvas.clientWidth, gameArea.canvas.height);
    }
  }
  const background = new Background();

  class Car {
    constructor(x, y, width, height) {
      this.posX = x;
      this.posY = y;
      this.width = width;
      this.height = height;
      this.img = new Image();
      this.img.src = './images/car.png';
      this.speed = 9;
    }
    draw = () => {
      gameArea.context.drawImage(
        this.img,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
    };

    move = (command) => {
      switch (command) {
        case 'ArrowLeft':
          if (this.posX > 60) {
            this.posX -= this.speed;
          }
          break;
        case 'ArrowRight':
          if (this.posX < gameArea.canvas.width - 55 - this.width) {
            this.posX += this.speed;
          }
          break;
      }
    };

    top = () => {
      return this.posY;
    }
    bottom = () => {
      return this.posY + this.height;
    }
    left = () => {
      return this.posX;
    }
    right = () => {
      return this.posX + this.width;
    }

    crashWith = (obstacle) => {
      return !(this.top() > obstacle.bottom() || this.bottom() < obstacle.top() || this.left() > obstacle.right() || this.right() < obstacle.left());
    }
  }

  const player1 = new Car(220, 550, 60, 120);

  class Obstacle {
    constructor(x, width, color) {
      this.posX = x;
      this.posY = -10;
      this.width = width;
      this.height = 40;
      this.color = color;
      this.speed = 5;
    }

    draw = () => {
      gameArea.context.fillStyle = this.color;
      gameArea.context.fillRect(this.posX, this.posY, this.width, this.height);
    };

    updatePos = () => {
      this.posY += this.speed;
    };

    top = () => {
      return this.posY;
    }
    bottom = () => {
      return this.posY + this.height;
    }
    left = () => {
      return this.posX;
    }
    right = () => {
      return this.posX + this.width;
    }
  }

  const obs = new Obstacle(50, 300, 'yellow');

  function updateGameArea() {
    gameArea.clear();
    background.draw();
    player1.draw();
    updateObstacles();
    gameArea.score();
    checkGameOver();
  }

  function createObstacle() {
    const minX = 60;
    const maxX = gameArea.canvas.width - 60;
    const minWidth = 120;
    const maxWidth = 260;
    const posX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
    const width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    const obs = new Obstacle(posX, width, 'yellow');
    gameArea.obstacles.push(obs);
  }

  function updateObstacles() {
    gameArea.frames += 1;
    if (!(gameArea.frames % 120)) {
      createObstacle();
    }

    gameArea.obstacles.forEach((obstacle, index) => {
      obstacle.updatePos();
      obstacle.draw();
      if (obstacle.posY > gameArea.canvas.height) {
        gameArea.obstacles.splice(index, 1);
        gameArea.points += 1;
      }
    });
  }

  function checkGameOver() {
    gameArea.obstacles.forEach((obstacle) => {
      const crashed = player1.crashWith(obstacle);
      if (crashed) {
        gameArea.stop();
      }
    })
  }



  document.getElementById('start-button').onclick = () => {
    gameArea.start();
  };

  document.addEventListener('keydown', (e) => {
    console.log(e.key);
    player1.move(e.key);
  })
};
