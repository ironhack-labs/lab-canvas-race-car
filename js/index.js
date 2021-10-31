window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "maroon";

  class Car {
    constructor() {
      this.x = 225;
      this.y = 580;
      this.speed = 0; //2
      this.height = 100;
      this.width = 50;
    }

    updatePosition() {
      //3
      this.x += this.speed;
    }

    checkForBoundries() {
      if (this.x > 384) {
        this.x = 384;
      }

      if (this.x < 69) {
        this.x = 69;
      }
    }
  }

  class Obstacle {
    constructor() {
      this.x = Math.floor(Math.random() * 301);
      this.y = 0;
      this.speed = 0;
      this.width = 170;
      this.height = 30;
    }
  }

  const car = new Car();

  const CANVAS_WIDTH = canvas.width;
  const CANVAS_HEIGHT = canvas.height;
  const totalOfImages = 2;
  let counterForLoadedImages = 0;

  //EVENT LISTENERS
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  document.addEventListener("keydown", (event) => {
    //4
    if (event.key === "ArrowLeft") {
      //6
      car.speed = -3;
    } else if (event.key === "ArrowRight") {
      car.speed = 3;
    }
  });

  document.addEventListener("keyup", (event) => {
    //5
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      car.speed = 0;
    }
  });

  const arrayOfObstacles = [];

  const startGame = () => {
    generateImages();
    updateCanvas();
    const createObstacles = setInterval(() => {
      arrayOfObstacles.push(new Obstacle());
    }, 1500);
  };

  let roadImage = "";
  let carImage = "";

  const drawImages = (roadImage, carImage) => {
    ctx.drawImage(roadImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(carImage, car.x, car.y, car.width, car.height);
  };

  const generateImages = () => {
    roadImage = new Image();
    carImage = new Image();

    roadImage.src = "../images/road.png";
    carImage.src = "../images/car.png";

    roadImage.onload = () => {
      counterForLoadedImages++;
      if (counterForLoadedImages === totalOfImages) {
        drawImages(roadImage, carImage);
      }
    };

    carImage.onload = () => {
      counterForLoadedImages++;
      if (counterForLoadedImages === totalOfImages) {
        drawImages(roadImage, carImage);
      }
    };
  };

  const updateObstacles = () => {
    arrayOfObstacles.forEach((obstacle) => {
      obstacle.speed = 3;
      obstacle.y += obstacle.speed;
    });
  };

  const drawObstacles = () => {
    arrayOfObstacles.forEach((obstacle) => {
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
  };
  const updateCanvas = () => {
    //1
    car.updatePosition();
    car.checkForBoundries();
    if (counterForLoadedImages === totalOfImages) {
      drawImages(roadImage, carImage);
    }
    updateObstacles();
    drawObstacles();
    requestAnimationFrame(updateCanvas);
  };
};
