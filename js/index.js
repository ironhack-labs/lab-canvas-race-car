const road = new Image();
road.src = "../images/road.png";

const car = new Image();
car.src = "../images/car.png";
carX = 225;
carY = 600;

const obstaclesInRoad = [];

const maxObstacles = 6;

class Obstacle {
  constructor(x, y, w, h, color) {
    this.xPosition = x;
    this.yPosition = y;
    this.width = w;
    this.height = h;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect = (this.xPosition, this.yPosition, this.width, this.height);
  }

  obstacleMovement() {
    this.yPosition += 10;
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

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "d":
        carX += 5;
        if (carX > 420) carX = 420;
        break;
      case "a":
        carX -= 5;
        if (carX < 40) carX = 40;
        break;
    }
  });

  function startGame() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // for (let i = 0; i < maxObstacles; i++) {
    //   addRamdomObstacle(new Obstacle(0, 0, 0, 10, "red"));
    // }
    console.log(obstaclesInRoad[0]);

    ctx.clearRect(0, 0, canvas.width, canvas.length);
    ctx.drawImage(road, 0, 0, 500, 700);
    ctx.drawImage(car, carX, carY, 50, 70);

    const viewRefresh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.length);
      ctx.drawImage(road, 0, 0, 500, 700);
      ctx.drawImage(car, carX, carY, 50, 70);
      // obstacle.update();
      requestAnimationFrame(viewRefresh);
    };

    viewRefresh();
  }
};

// const roadMovement () => {
//   const img = new Image();
//   img.src = '../images/road.png';

//   let canvas, ctx, mainCanvas, mainCtx;

//   img.onload = function() {

//     backgroundCanvas = document.getElementById('background-canvas');
//     ctx = backgroundCanvas.getContext('2d');

//     // Create main canvas
//     mainCanvas = document.getElementById('main-canvas');
//     mainCtx = mainCanvas.getContext('2d');

//     // start calling updateCanvas once the image is loaded
//     updateBackgroundCanvas()
//   };

//   const backgroundImage = {
//     img: img,
//     x: 0,
//     y:0,
//     speed: -1,

//     move: function() {
//       this.y += this.speed;
//       this.y %= backgroundCanvas.height;
//     },

//     draw: function() {
//       ctx.drawImage(this.img, 0, this.y);
//       if (this.speed < 0) {
//         ctx.drawImage(this.img, 0, this.y + this.img.height);
//       } else {
//         ctx.drawImage(this.img, 0, this.y - backgroundCanvas.height);
//       }
//     },
//   };

//   function renderMainCanvas() {
//     mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
//     mainCtx.fillStyle = "black";
//     mainCtx.font = "50px monospace";
//     mainCtx.fillText('Ironhackers', 100, 200);
//   }

//   function updateBackgroundCanvas() {
//     backgroundImage.move();
//     renderMainCanvas();
//     ctx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
//     backgroundImage.draw();

//     requestAnimationFrame(updateBackgroundCanvas);
//   }

// }

// // function carMovement() {
// //   document.addEventListener("keydown", (e) => {
// //     switch (e.key) {
// //       case "a":
// //         carX += 1;
// //         break;
// //       case "d":
// //         carX -= 1;
// //         break;
// //     }
// //   });
// //
