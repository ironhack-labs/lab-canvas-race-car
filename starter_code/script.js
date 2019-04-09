// Declaring Canvas Height & Width
let canvasWidth = 450;
let canvasHeight = 500;

let gameOn;
let score = 0;
// MAIN FUNCTION

window.onload = function() {
  // 1) Create Canvas Element
  document.getElementById(
    "game-board"
  ).innerHTML = `<canvas height='${canvasHeight}' width='${canvasWidth}'><canvas>`;
  // 2) Select the Canvas Element
  let canvas = document.querySelector("canvas");

  //  On Key Down Function
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: // left arrow
        player.speedX = -5;
        break;
      case 39: // right arrow
        player.speedX = 5;
        break;
    }
  };

  //  On Key Up Function
  document.onkeyup = function(e) {
    player.speedX = 0;
  };

  // Initializing Obstacles Arrayt
  let myObstacles = [];

  // GAME AREA
  var myGameArea = {
    frames: 0,
    cnvs: canvas.getContext("2d"),
    // // Drawing Function :
    drawBoard: function(cnvs) {
      // Left Grass
      cnvs.fillStyle = "green";
      cnvs.fillRect(0, 0, 40, 500);
      // Route
      cnvs.fillStyle = "gray";
      cnvs.fillRect(40, 0, 15, 500);
      cnvs.fillStyle = "white";
      cnvs.fillRect(55, 0, 10, 500);
      cnvs.fillStyle = "gray";
      cnvs.fillRect(65, 0, 320, 500);
      cnvs.fillStyle = "white";
      cnvs.fillRect(385, 0, 10, 500);
      cnvs.fillStyle = "gray";
      cnvs.fillRect(395, 0, 15, 500);

      // Right Grass
      cnvs.fillStyle = "green";
      cnvs.fillRect(410, 0, 40, 500);
      // Middle White Lines
      let linePos = 0;
      cnvs.strokeStyle = "white";
      cnvs.beginPath();
      for (let i = 0; i < 9; i++) {
        cnvs.lineWidth = 10;
        cnvs.moveTo(canvasWidth / 2, linePos);
        linePos += canvasHeight / 15;
        cnvs.lineTo(canvasWidth / 2, linePos);
        linePos += canvasHeight / 20;
        cnvs.stroke();
      }
      cnvs.closePath();
    },
    clear: function() {
      myGameArea.drawBoard(this.cnvs);
    },
    score: function() {
      this.cnvs.font = "18px serif";
      this.cnvs.fillStyle = "black";
      this.cnvs.fillText("Score: " + score, 350, 50);
    }
  };

  // function crashTest(x, y, width, height, x1, y1, width1) {
  //   if (myObstacles.length > 0) {
  //     if (y + height === y1) {
  //       console.log(
  //         "Obstacle x :",
  //         x,
  //         "y :",
  //         x,
  //         "width : ",
  //         width,
  //         " heigth",
  //         height
  //       );

  //       for (let i = x; i <= x + width; i++) {
  //         for (let j = x1; j < x1 + width1; j++) {
  //           if (i === j) {
  //             clearInterval(gameOn);
  //             document.getElementById("start-button").innerText = "Continue";
  //             document.getElementById("start-button").disabled = false;
  //             score = 0;
  //           }
  //         }
  //       }
  //       if (document.getElementById("start-button").disabled === true) {
  //         score += 10;
  //       }
  //     }
  //   }
  // }

  // Component
  class Component {
    constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      this.speedX = 0;
    }

    // Update Car's Position
    newPos() {
      if (this.x <= 40) {
        this.x = 45;
      } else if (this.x >= 380) {
        this.x = 375;
      } else {
        this.x += this.speedX;
      }

      // if (myObstacles.length > 0) {
      //   for (let i = 0; i < myObstacles.length; i++) {
      //     crashTest(
      //       myObstacles[i].x,
      //       myObstacles[i].y,
      //       myObstacles[i].width,
      //       myObstacles[i].height,
      //       this.x,
      //       this.y,
      //       this.width
      //     );
      //   }
      // }
    }
    //(y, h, w, y1, w1)
    // Update Frame
    update() {
      myGameArea.cnvs.fillStyle = this.color;
      myGameArea.cnvs.fillRect(this.x, this.y, this.width, this.height);
    }

    left() {
      return this.x;
    }

    right() {
      return this.x + this.width;
    }

    top() {
      return this.y;
    }

    bottom() {
      return this.y + this.height;
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
  function checkGameOver() {
    var crashed = myObstacles.some(function(obstacle) {
      return player.crashWith(obstacle);
    });

    if (crashed) {
      clearInterval(gameOn);
      document.getElementById("start-button").disabled = false;
      myObstacles = [];
    }
  }
  // Creating a new Player
  var player = new Component(30, 30, "black", 115, 450);

  // Creating Obstacles
  function updateObstacles() {
    myGameArea.frames += 1.5;
    let minWidth = 100;
    let maxWidth = 390;
    let randomWidth = Math.floor(
      Math.random() * (maxWidth - minWidth) + minWidth
    );
    let minPos = 65;
    let maxPos = 240;
    let randomPos = Math.floor(Math.random() * (maxPos - minPos) + minPos);

    while (randomWidth + randomPos >= maxWidth - 10) {
      randomWidth = Math.floor(
        Math.random() * (maxWidth - minWidth) + minWidth
      );
    }
    if (myGameArea.frames % 120 === 0) {
      myObstacles.push(new Component(randomWidth, 10, "#800", randomPos, -10));
    }
    if (myObstacles.length > 0) {
      for (let i = 0; i < myObstacles.length; i++) {
        if (myObstacles[i].y + myObstacles[i].height >= 505) {
          myObstacles.splice(i, 1);
        }
        myObstacles[i].y++;
        myObstacles[i].update();
      }
    }
  }

  // Update Everything (Player & Obstacles)
  function updateGameArea() {
    myGameArea.clear();
    myGameArea.score();
    player.newPos();
    player.update();
    updateObstacles();
    checkGameOver();
  }
  document.getElementById("start-button").onclick = function() {
    document.getElementById("start-button").disabled = true;
    document.getElementById("start-button").innerText = "Restart";

    // Draw the board
    myGameArea.drawBoard(myGameArea.cnvs);
    // Update the frame every 15ms
    gameOn = setInterval(updateGameArea, 10);
  };
};
