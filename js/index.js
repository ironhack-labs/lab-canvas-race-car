window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  // Get the image
  const road = new Image();
  road.src = "/images/road.png";
  const car = new Image();
  car.src = "/images/car.png";

  // Wait Till the pista is loaded
  road.onload = function () {
    drawCanvas(road);
  };

  const myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
      // call updateGameArea() every 20 milliseconds
      this.interval = setInterval(updateCanvas, 20);
    },
  };

  function startGame() {
    drawCanvas();
    myGameArea.start();
  }

  let obstacleArray = [];
  var counter = 0;
  var points = 0;

  function drawCanvas() {
    ctx.clearRect(0, 0, 1.8 * road.width, 1.75 * road.height);
    ctx.drawImage(road, 0, 0, 1.8 * road.width, 1.75 * road.height);
    ctx.drawImage(car, myCar.x, myCar.y, 0.5 * car.width, 0.5 * car.height);
    obstacleArray.push(new Obstacles());
    obstacleArray[0].draw();
  }

  function updateCanvas() {
    // requestAnimationFrame(updateCanvas);
    counter++;
    // let time = 1
    if (counter >= 50) {
      counter = 0;
      obstacleArray.push(new Obstacles());
      points += 10;
    }

    // se bateu
    if (
      obstacleArray[0].y + obstacleArray[0].height >= car.y &&
      car.x > obstacleArray[0].x - myCar.width &&
      car.x < obstacleArray[0].x + obstacleArray[0].width
    ) {
      con("bateu");
    }

    // bonus: rolar a pista

    if (obstacleArray[0].y > canvas.width) {
      obstacleArray.shift();
    }
    points += 1 / 40;
    ctx.clearRect(0, 0, 1.8 * road.width, 1.75 * road.height);
    ctx.drawImage(road, 0, 0, 1.8 * road.width, 1.75 * road.height);
    ctx.drawImage(car, myCar.x, myCar.y, 0.5 * car.width, 0.5 * car.height);
    obstacleArray.forEach((obs) => {
      obs.moveDown();

      obs.draw();
    });
    ctx.fillText("Points: " + points, 220, 600);
  }

  class Obstacles {
    constructor() {
      this.width =
        Math.random() * (canvas.width / 2 - canvas.width / 4) +
        canvas.width / 4;
      this.height = 30;
      this.x = Math.random() * (canvas.width - this.width);
      this.y = 0;
    }
    moveDown() {
      this.y += 10;
    }
    draw() {
      //             x         y     w       h
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  const myCar = {
    x: (canvas.width - 0.5 * car.width) / 2,
    y: canvas.height - 0.5 * car.height - 55,
    moveLeft: function () {
      this.x -= 30;
      if (this.x < 0) {
        this.x = 0;
      }
    },
    moveRight: function () {
      this.x += 30;
      if (this.x > canvas.width - car.width) {
        this.x = canvas.width - car.width;
      }
    },
    // moveUp: function () {
    //   this.y -= 25;
    // },
    // moveDown: function () {
    //   this.y += 25;
    // },
  };

  document.addEventListener("keydown", (keyPressed) => {
    switch (keyPressed.keyCode) {
      // case 38:
      //   // myCar.moveUp();
      //   con("up");
      //   break;
      // case 40:
      //   // myCar.moveUp();
      //   con("down");
      //   break;
      case 37:
        myCar.moveLeft();
        con("left");
        break;
      case 39:
        myCar.moveRight();
        con("right");
        break;
    }
    updateCanvas();
  });

  function con(consoleMSg) {
    console.log(consoleMSg);
  }
};
