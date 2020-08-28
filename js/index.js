// window.onload = () => {
//   document.getElementById("start-button").onclick () => {
//     console.log("STARTED");
//     startGame();

//   };

//   function startGame() {
//     ctx.clearRect(0, 0, 500, 700);
//     ctx.drawImage(roadImg, 0, 0, 500, 700);
//   }
// };

window.onload = () => {
  //CANVAS
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let interval;
  let frames = 0;

  // accessing images
  const roadImg = new Image();
  roadImg.src = "./images/road.png";
  const carImg = new Image();
  carImg.src = "./images/car.png";
  const obstacleImg = new Image();
  obstacleImg.src = "./images/obstacle.png";

  document.getElementById("start-button").onclick = () => {
    console.log("STARTED");
    startGame();
  };

  document.addEventListener("keydown", (arrowKey) => {
    console.log("BOTÃO PRESSIONADO");

    if (arrowKey.keyCode == 37) {
      player.turnLeft();
      console.log("mov para esquerda chamado");
    }

    if (arrowKey.keyCode == 39) {
      player.turnRight();
      console.log("mov para direita chamado");
    }
  });

  // CAR CLASS WITH ITS METHODS
  class Car {
    constructor() {
      this.width = 76;
      this.height = 76 * (319 / 158);
      this.positionX = canvas.width / 2;
      this.positionY = canvas.height - (this.height + 50);
      this.speed = 10;
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

  // OBSTACLES CLASS AND ITS METHODS
  class Obstacle {
    constructor(width, positionX) {
      
      this.positionX = positionX;
      this.positionY = -30;
      this.width = width;
      this.height = 30;
    }

    moveDown() {
      this.positionY += 10;
    }
  }

  const obstacleArray = [];

  function updateObstacles() {
    frames++;
    console.log(frames);
    if (frames % 120 === 0) {
      let y = canvas.height;
      let minWidth = 76;
      let maxWidth = 335;
      let realWidth = Math.floor(
        Math.random() * (maxWidth - minWidth) + minWidth
      );
      let positionX =
        Math.floor(Math.random() * (canvas.width - 76)) - realWidth;
      obstacleArray.push(new Obstacle(realWidth, positionX));
    }

    obstacleArray.forEach((elem) => {
      console.log(elem);
      elem.moveDown();
      ctx.drawImage(
        obstacleImg,
        elem.positionX,
        elem.positionY,
        elem.width,
        elem.height
      );
    });
  }

  function updateGameArea() {
    // drawing objects
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    player.drawPlayer();
    updateObstacles();
  }

  //setting player
  const player = new Car();

  function startGame() {
    //setting interval
    interval = setInterval(updateGameArea, 20);
  }
};
