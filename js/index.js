window.onload = () => {
  // canvas
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let intervalId = 0;
  let frames = 0;

  // adressing image paths
  const roadImg = new Image();
  roadImg.src = "./images/road.png";
  const carImg = new Image();
  carImg.src = "./images/car.png";

  // start!
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  // controls
  document.addEventListener("keydown", (arrowKey) => {
    if (arrowKey.keyCode == 37) {
      player.turnLeft();
    }
    if (arrowKey.keyCode == 39) {
      player.turnRight();
    }
  });

  // car class (player)
  class Car {
    constructor() {
      this.width = 76;
      this.height = 76 * (319 / 158);
      this.positionX = canvas.width / 2;
      this.positionY = canvas.height - (this.height + 50);
      this.speed = 20;
    }
    drawPlayer() {
      ctx.drawImage(
        carImg,
        this.positionX,
        this.positionY,
        this.width,
        this.height
      );
    }
    turnRight() {
      if (this.positionX < canvas.width - 112) {
        this.positionX += this.speed;
      }
    }
    turnLeft() {
      if (this.positionX > 40) {
        this.positionX -= this.speed;
      }
    }
  }

  const player = new Car();

  // obstacle class
  class Obstacle {
    constructor(width, positionX) {
      this.positionX = positionX;
      this.positionY = -30;
      this.width = width;
      this.height = 30;
    }
    moveDown() {
      this.positionY += 5;
    }
    updateThisObstacle() {
      ctx.fillStyle = "#890000";
      ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    }
  }

  const obstacleArray = [];

  function updateObstacles() {
    frames++;
    if (frames % 110 === 0) {
      let y = canvas.height;
      let minWidth = 76;
      let maxWidth = 300;
      let realWidth = Math.floor(
        Math.random() * (maxWidth - minWidth) + minWidth
      );
      let positionX = Math.floor(Math.random() * canvas.width) - realWidth;
      obstacleArray.push(new Obstacle(realWidth, positionX));
    }
    obstacleArray.forEach((elem) => {
      elem.moveDown();
      elem.updateThisObstacle();

      // removing obstacles from the array if they go out of the canvas' height
      if (elem.positionY > canvas.height) {
        elemIndex = obstacleArray.indexOf(elem);
        obstacleArray.splice(elemIndex, 1);
      }

      // crash detection
      if (crash(elem)) {
        stopGame();
      }
    });
  }

  // game progression
  function updateGameArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    bgImg.draw();
    bgImg.move();
    player.drawPlayer();
    updateObstacles();
    ctx.clearRect(40, 20, 150, 45);
    updateScore();
  }

  function startGame() {
    intervalId = setInterval(updateGameArea, 20);
  }

  function stopGame() {
    clearInterval(intervalId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "40px sans-serif";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER", canvas.width / 2 - 131, canvas.height / 2 - 20);
  }

  function crash(obstacleObj) {
    // car borders
    let playerTop = player.positionY;
    let playerBot = player.positionY + player.height;
    let playerLeft = player.positionX;
    let playerRight = player.positionX + player.width;

    // obstacle borders
    let obsTop = obstacleObj.positionY;
    let obsBot = obstacleObj.positionY + obstacleObj.height;
    let obsLeft = obstacleObj.positionX;
    let obsRight = obstacleObj.positionX + obstacleObj.width;

    // crash detect
    return !(
      playerBot < obsTop ||
      playerTop > obsBot ||
      playerRight < obsLeft ||
      playerLeft > obsRight
    );
  }

  function updateScore() {
    const score = Math.floor(frames / 5);
    ctx.font = "22px sans-serif";
    ctx.fillStyle = "black";
    ctx.fillText(`SCORE: ${score}`, 50, 50);
  }

  // EXTRA: moving background
  const bgImg = {
    img: roadImg,
    y: 0,
    speed: 5,

    move: function () {
      this.y += this.speed;
      this.y %= canvas.height;
    },

    draw: function () {
      ctx.drawImage(this.img, 0, this.y, canvas.width, canvas.height);
      if (this.speed < 0) {
        ctx.drawImage(
          this.img,
          0,
          this.y + canvas.height,
          canvas.width,
          canvas.height
        );
      } else {
        ctx.drawImage(
          this.img,
          0,
          this.y - canvas.height,
          canvas.width,
          canvas.height
        );
      }
    },
  };
};
