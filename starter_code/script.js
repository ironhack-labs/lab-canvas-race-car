const $canvas = document.querySelector("canvas");
const context = $canvas.getContext('2d');

const raceCarIMG = new Image();
raceCarIMG.src = "./images/car.png";

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    function paintRoad() {
      context.fillStyle = 'green';
      context.fillRect(0, 0, 20, 600);
      context.fillRect(380, 0, 20, 600);
      context.fillStyle = 'grey';
      context.fillRect(20, 0, 10, 600);
      context.fillRect(370, 0, 10, 600);
      context.fillStyle = 'white';
      context.fillRect(30, 0, 10, 600);
      context.fillRect(360, 0, 10, 600);
      context.fillStyle = 'grey';
      context.fillRect(40, 0, 320, 600);
      // 150-170
      for (let i = 20; i < 600; i += 50) {
        context.strokeStyle = 'white';
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(197, i);
        context.lineTo(197, i + 30);
        context.stroke();
        context.closePath();
      }
    }

    function paintObstacle(leftStart, topStart) {
      context.beginPath();
      context.fillStyle = 'darkred';
      context.fillRect(leftStart, topStart, 170, 30);
      context.closePath();
    }

    paintRoad()

    // right obstacle; leftStart = 180
    // left obstacle; leftStart = 
    paintObstacle(180, 350)
    paintObstacle(180, 50)
    paintObstacle(50, 200)

    function drawCar() {
      context.drawImage(raceCarIMG, 175, 475, 50, 100);
    };

    drawCar();

    function move() {
      class Controls {
        constructor(game) {
          this.game = game;
        }

        window.addEventListener('keydown', (event) => {
          switch (key.keyCode) {
            case 37:
              control = 'left';
              console.log(37)
              break;
            case 39:
              control = 'right';
              break;
          }
        });
      }
    }
  }
};

console.log("I am connected")