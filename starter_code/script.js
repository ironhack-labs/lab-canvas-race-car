
function Game() {

  this.fps = 60;
  this.timeStamp = 0;
  this.time = 0;

}

var game;

var gameCanvas;

var ctx;

var frameCount;

window.onload = function () {

  gameCanvas = document.getElementById("gameCanvas");
  ctx = gameCanvas.getContext("2d");

  gameCanvas.width = 500;
  gameCanvas.height = 500;

  document.getElementById("start-button").onclick = function () {
    startGame();
  };





  function drawBackground(yOffset) {

    yOffset;

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

    ctx.fillStyle = "grey";
    ctx.fillRect(gameCanvas.width / 2 - gameCanvas.width * 0.8 / 2, 0, gameCanvas.width * 0.8, gameCanvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect((gameCanvas.width / 2 - gameCanvas.width * 0.02 / 2) - 180, 0, gameCanvas.width * 0.02, gameCanvas.height);
    ctx.fillRect((gameCanvas.width / 2 - gameCanvas.width * 0.02 / 2) + 180, 0, gameCanvas.width * 0.02, gameCanvas.height);

    for (i = 0; i < 11; i++) {
      var yPos = yOffset + i * 100;

      yPos %= gameCanvas.height + 100;

      yPos -= 40;

      ctx.fillRect((gameCanvas.width / 2 - gameCanvas.width * 0.02 / 2), yPos, gameCanvas.width * 0.02, 40);

    }
  }

  function Car() {

    this.xPos = 0;
    this.yPos = 0;
    this.width = 100;
    this.height = 100;
    this.img = new Image();
    this.img.src = "images/car.png";

  }

  function drawSprite(spriteObject) {

    ctx.drawImage(spriteObject.img, spriteObject.xPos, spriteObject.yPos, spriteObject.width, spriteObject.he
    );

  }

  function updateCanvas() {
    setTimeout(function () {
      requestAnimationFrame(updateCanvas);
      var now = new Date().getTime(),
        dt = now - (game.time || now);

      game.time = now;

      game.timeStamp += dt;

      drawBackground(game.timeStamp / 2);
      drawSprite(game.car);


    }, 1000 / game.fps);


  }

  function startGame() {

    game = new Game();

    game.car = new Car();


    requestAnimationFrame(updateCanvas);

  }
};
