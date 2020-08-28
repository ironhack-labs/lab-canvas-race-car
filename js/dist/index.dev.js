"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.onload = function () {
  var obstacleArray = [];
  var counter = 0;

  document.getElementById("start-button").onclick = function () {
    gameArea.start();
  };

  var roadImg = new Image();
  roadImg.src = "/images/road.png";
  var carImg = new Image();
  carImg.src = "/images/car.png";

  function drawRoad() {
    gameArea.ctx.clearRect(0, 0, 1.775 * roadImg.width, 1.775 * roadImg.height);
    gameArea.ctx.drawImage(roadImg, 0, 0, 1.775 * roadImg.width, 1.775 * roadImg.height);
  }

  function updateGameArea() {
    gameArea.clear();
    drawRoad();
    player.update();
    gameArea.score();
    counter++;

    if (counter % 100 == 0) {
      obstacleArray.push(new Obstacles());
    }

    obstacleArray.forEach(function (obs) {
      if (obs.y > gameArea.canvas.height) {
        obstacleArray.shift();
      }

      if (obs.y + obs.height >= player.y && player.x < obs.x + obs.width && player.x + player.width > obs.x) {
        // requestAnimationFrame(gameArea.stop);
        con("BATEU");
      }

      obs.moveDown();
      obs.update();
    });
  }

  document.addEventListener("keydown", function (keyPressed) {
    switch (keyPressed.keyCode) {
      case 37:
        player.moveLeft();
        break;

      case 39:
        player.moveRight();
        break;
    }
  });
  var gameArea = {
    canvas: document.getElementById("canvas"),
    start: function start() {
      this.canvas.width = canvas.width;
      this.canvas.height = canvas.height;
      this.ctx = this.canvas.getContext("2d"); // document.body.insertBefore(this.canvas, document.body.childNodes[0]);

      this.interval = setInterval(updateGameArea, 20);
    },
    clear: function clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    score: function score() {
      var points = Math.floor(counter / 5);
      this.ctx.font = "18px serif";
      this.ctx.fillStyle = "black";
      this.ctx.fillText("Score: ".concat(points), 350, 50);
    } // stop: function () {
    //   clearInterval(this.interval);
    //   // gameArea.clear();
    //   // this.ctx.fillRect(0, 0, this.width, this.height);
    //   // this.ctx.fillText(`GAME OVER`, this.width / 2, this.height / 2);
    // },

  };

  var Player =
  /*#__PURE__*/
  function () {
    function Player() {
      _classCallCheck(this, Player);

      this.width = 0.5 * carImg.width;
      this.height = 0.5 * carImg.height;
      this.x = (canvas.width - this.width) / 2;
      this.y = canvas.height - this.height - 60;
    }

    _createClass(Player, [{
      key: "moveLeft",
      value: function moveLeft() {
        this.x -= 50;

        if (this.x < 0) {
          this.x = 0;
        }
      }
    }, {
      key: "moveRight",
      value: function moveRight() {
        this.x += 50;

        if (this.x > canvas.width - this.width) {
          this.x = canvas.width - this.width;
        }
      }
    }, {
      key: "update",
      value: function update() {
        var ctx = gameArea.ctx;
        ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
      }
    }]);

    return Player;
  }();

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
      key: "update",
      value: function update() {
        var ctx = gameArea.ctx; //             x         y     w       h

        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }]);

    return Obstacles;
  }();

  function con(consoleMSg) {
    console.log(consoleMSg);
  }

  var player = new Player();
};