window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  const canvas = document.querySelector("#canvas");

  const ctx = canvas.getContext("2d");
  const backgroundImage = new Image();
  backgroundImage.src = "./images/road.png";
  const carImage = new Image();
  carImage.src = "./images/car.png";

  const obstacleArray = [];

  class Obstacle {
    constructor() {
      this.width = Math.floor(Math.random() * 200) + 100;
      this.height = 20;
      this.positionX = Math.floor(Math.random() * canvas.width - this.width);
      this.positionY = 0;
    }

    draw() {
      ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    }
  }

  function moveObstacle() {
    for (let i = 0; i < obstacleArray.length; i++) {
      obstacleArray[i].positionY += 10;
    }
  }

  console.log(obstacleArray);

  const car = {
    positionX: canvas.width / 2.2,
    positionY: canvas.height - 90,

    move(direction) {
      if (direction === "left" && car.positionX > 0) {
        car.positionX -= 10;
      } else if (
        direction === "right" &&
        car.positionX < canvas.width - carImage.width / 4
      ) {
        car.positionX += 10;
      }
    },

    draw() {
      ctx.drawImage(
        carImage,
        car.positionX,
        car.positionY,
        carImage.width / 4,
        carImage.height / 4
      );
    },
  };

  function createObstacle() {
    obstacleArray.push(new Obstacle());
  }

  function drawObstacle() {
    obstacleArray.forEach((element) => element.draw());
  }

  //Make update function that handles all obstacle functions
  function updateObstacles() {
    let counter = 0;
    setInterval(() => {
      counter++;
      if (counter % 3 === 0) {
        createObstacle();
      } else if (counter % 10 === 0) {
        drawObstacle();
      } else if (counter % 15 === 0) {
        moveObstacle();
      }
    }, 1000);
  }

  function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  const obstacle1 = new Obstacle();

  function startGame() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    updateObstacles();

    window.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          car.move("left");
          // console.log(`Moving left!!`);
          break;
        case "ArrowRight":
          car.move("right");
          // console.log(`Moving right!!`);

          break;
      }
    });

    setInterval(() => {
      resetCanvas();
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      car.draw();
    }, 1000 / 60);
  }
};
