window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var playerCar = new Image();
  playerCar.src = "./images/car.png";
  //var posX=250,posY=800;
  (playerCar.posX = 250), (playerCar.posY = 390);
  var arrObstacles = [];
  var obstacle = function() {
    this.posX = Math.floor(Math.random() * 500) + 1;
    this.posY = 0;
    this.height = 30;
    this.width = Math.floor(Math.random() * (500 - this.posX));
  };
  var spaceBetweenObstacles = 200;

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  /* function intersect(rect1, rect2) {
    rect1left = rect1.x;
    rect1top = rect1.y;
    rect1right = rect1.x + rect1.width;
    rect1bottom = rect1.y + rect1.height;

    rect2left = rect2.x;
    rect2top = rect2.y;
    rect2right = rect2.x + rect2.width;
    rect2bottom = rect2.y + rect2.height;

    return !(
      rect1left > rect2right ||
      rect1right < rect2left ||
      rect1top > rect2bottom ||
      rect1bottom < rect2top
    );
  } */

  function drawObstacles() {
    for (i = 0; i < arrObstacles.length; i++) {
      ctx.fillRect(
        arrObstacles[i].posX,
        arrObstacles[i].posY,
        arrObstacles[i].width,
        arrObstacles[i].height
      );
      arrObstacles[i].posY += 2;
    }
    if (arrObstacles[0].posY > 802) arrObstacles.unshift();
    //if arrObstacles[arrObstacles.length-1].posY
  }

  function updateCanvas() {
    ctx.clearRect(0, 0, 500, 500);
    if (arrObstacles[arrObstacles.length - 1].posY > spaceBetweenObstacles)
      arrObstacles.push(new obstacle());
    drawObstacles();
    ctx.drawImage(playerCar, playerCar.posX, playerCar.posY, 50, 101);
    window.requestAnimationFrame(updateCanvas);
    //playerCar.posY<-100 ? playerCar.posY=800 : playerCar.posY--;
  }

  function startGame() {
    //ctx.fillStyle("black");
    //ctx.fillRect(0, 0, 100, 100);
    arrObstacles.push(new obstacle());

    window.onkeydown = function(keyPressed) {
      switch (keyPressed.keyCode) {
        case 37:
          playerCar.posX -= 5;
          break;
        case 39:
          playerCar.posX += 5;
          break;
      }
    };
    window.requestAnimationFrame(updateCanvas);
  }
};
