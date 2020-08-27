"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.onload = function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  document.getElementById("start-button").onclick = function () {
    startGame();
  }; // Get the image


  var road = new Image();
  road.src = "/images/road.png";
  var car = new Image();
  car.src = "/images/car.png"; // Wait Till the pista is loaded

  road.onload = function () {
    drawCanvas(road);
  };

  var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function start() {
      // call updateGameArea() every 20 milliseconds
      this.interval = setInterval(updateCanvas, 20);
    }
  };

  function startGame() {
    drawCanvas();
    myGameArea.start();
  }

  var obstacleArray = [];
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
    counter++; // let time = 1

    if (counter >= 50) {
      counter = 0;
      obstacleArray.push(new Obstacles());
      points += 10;
    } // se bateu


    if (obstacleArray[0].y + obstacleArray[0].height >= car.y && car.x > obstacleArray[0].x - myCar.width && car.x < obstacleArray[0].x + obstacleArray[0].width) {
      con("bateu");
    } // bonus: rolar a pista


    if (obstacleArray[0].y > canvas.width) {
      obstacleArray.shift();
    }

    points += 1 / 40;
    ctx.clearRect(0, 0, 1.8 * road.width, 1.75 * road.height);
    ctx.drawImage(road, 0, 0, 1.8 * road.width, 1.75 * road.height);
    ctx.drawImage(car, myCar.x, myCar.y, 0.5 * car.width, 0.5 * car.height);
    obstacleArray.forEach(function (obs) {
      obs.moveDown();
      obs.draw();
    });
    ctx.fillText("Points: " + points, 220, 600);
  }

  var Obstacles =
  /*#__PURE__*/
  function () {
    function Obstacles() {
      _classCallCheck(this, Obstacles);

      this.width = Math.random() * (canvas.width / 2 - canvas.width / 4) + canvas.width / 4;
      this.height = 30;
      this.x = Math.random() * (canvas.width - this.width);
      this.y = 0;
    }

    _createClass(Obstacles, [{
      key: "moveDown",
      value: function moveDown() {
        this.y += 10;
      }
    }, {
      key: "draw",
      value: function draw() {
        //             x         y     w       h
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }]);

    return Obstacles;
  }();

  var myCar = {
    x: (canvas.width - 0.5 * car.width) / 2,
    y: canvas.height - 0.5 * car.height - 55,
    moveLeft: function moveLeft() {
      this.x -= 30;

      if (this.x < 0) {
        this.x = 0;
      }
    },
    moveRight: function moveRight() {
      this.x += 30;

      if (this.x > canvas.width - car.width) {
        this.x = canvas.width - car.width;
      }
    } // moveUp: function () {
    //   this.y -= 25;
    // },
    // moveDown: function () {
    //   this.y += 25;
    // },

  };
  document.addEventListener("keydown", function (keyPressed) {
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