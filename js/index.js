window.onload = function () {
  document.getElementById(
    "start-button"
  ).onclick = function () {
    startGame();
  };

  function startGame() {
    const canvas =
      document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const cWidth = canvas.width;
    const cHeight = canvas.height;

    const imgRoad = new Image();
    imgScale = 640 / 480;
    imgRoad.onload = function () {
      ctx.drawImage(
        imgRoad,
        200,
        0,
        150 * imgScale,
        400
      );
    };

    const imgCar = new Image();
    imgScale = 200 / 100;
    imgCar.onload = function () {
      ctx.drawImage(imgCar, 332, 330, 30, 50); // hardcoded, dont know how to make it dynamic
    };

    imgRoad.src = "/images/road.png";
    imgCar.src = "/images/car.png";

    class PlayerCar {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
      }
    }

    let playerCar = new PlayerCar(332, 330);

    function keyPressed() {
      if (keyCode === RIGHT_ARROW) {
        playerCar.x += playerCar.speed;
      } else if (keyCode === LEFT_ARROW) {
        playerCar.x -= playerCar.speed;
      }
    }

    window.addEventListener(
      "keydown",
      keyPressed
    );

    function draw() {
      ctx.clearRect(0, 0, cWidth, cHeight);
      ctx.drawImage(
        imgRoad,
        200,
        0,
        150 * imgScale,
        400
      );
      ctx.drawImage(
        imgCar,
        playerCar.x,
        playerCar.y,
        30,
        50
      );
    }

    setInterval(draw, 10);
  }
};
