window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var ctx = document.getElementById("race-board").getContext("2d");

  function startGame() {
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, road.x, road.y, 300, 600);
    };
    img.src = "images/road.png";

    var carImg = new Image();
    carImg.onload = function() {
      ctx.drawImage(carImg, car.x, car.y, 40, 80);
    };
    carImg.src = "images/car.png";

    var road = {
      x: 0,
      y: 0
    };

    var car = {
      x: 150,
      y: 500,
      moveLeft: function() {
        this.x -= 10;
      },
      moveRight: function() {
        this.x += 10;
      },
      moveUp: function() {
        this.y -= 10;
      },
      moveDown: function() {
        this.y += 10;
      }
    };

    function drawCar(car) {
      ctx.drawImage(carImg, car.x, car.y, 40, 80);
    }

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 38:
          car.moveUp();
          console.log("up", car);
          break;
        case 40:
          car.moveDown();
          console.log("down", car);
          break;
        case 37:
          car.moveLeft();
          console.log("left", car);
          break;
        case 39:
          car.moveRight();
          console.log("right", car);
          break;
      }
    };

    function drawRoad(road) {
      ctx.drawImage(img, road.x, road.y, 300, 600);
    }

    function drawObstacle(){
      ctx.fillStyle = "#8c4809";
      ctx.fillRect(50, y1, 50, 50);
    }

    var y1 = 0;
    function updateCanvas() {
      ctx.clearRect(0, 0, 300, 600);
      drawRoad(road);
      drawCar(car);
      y1 += 2;
      drawObstacle();
      intersect({ x: car.x, y: 123, width: 123, height: 123 }, { x: 123, y: 123, width: 123, height: 123 })

      window.requestAnimationFrame(updateCanvas);
    }
    updateCanvas();

    function intersect(rect1, rect2) {
      var rect1left = rect1.x;
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
  }
};
