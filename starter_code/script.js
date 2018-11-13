window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var carPosition = 200;
  var img = new Image();
  var obstaclePosition = 0;

  function startGame() {
    img.onload = function() {
      ctx.drawImage(img, carPosition, 300, 100, 200);
    };
    img.src = "./images/car.png";
    ctx.fillStyle = "#FF69B4";
    ctx.fillRect(0, 0, 200, 60);
  }
  document.getElementById("start-button").onclick = function() {
    startGame();
    update();
  };

  // alles was passiert, wenn man wo klickt
  document.onkeydown = function(e) {
    if (event.keyCode === 37) {
      carPosition -= 5;
    } else if (event.keyCode === 39) {
      carPosition += 5;
    }
  };

  function intersect(rect1, rect2) {
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
  }

  function update() {
    if (
      intersect(
        { x: 0, y: obstaclePosition, width: 200, height: 60 },
        { x: carPosition, y: 300, width: 100, height: 200 }
      )
    ) {
      window.alert("you crashed!");
    } else {
      obstaclePosition += 2;
      ctx.clearRect(0, 0, 500, 500);
      ctx.fillRect(0, obstaclePosition, 200, 60);
      ctx.drawImage(img, carPosition, 300, 100, 200);

      requestAnimationFrame(update);
    }
  }
};
