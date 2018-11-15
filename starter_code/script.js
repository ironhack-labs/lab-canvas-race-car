window.onload = function () {
  var canvas = document.getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext('2d');
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  var car = {
    x: 250,
    y: 500,
    moveLeft: function () { this.x -= 20 },
    moveRight: function () { this.x += 20 },
    moveForwards: function () { this.y -= 20 },
    moveBackwards: function () { this.y += 20 },
    reset: function () { this.x = 250, this.y = 500 },
  };


  function startGame() {

    function draw(car) {
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, car.x, car.y, 60, 120);
      };
      img.src = 'images/car.png';
    }
    draw(car);

    function updateCanvas() {
      ctx.clearRect(0, 0, 500, 800);
      draw(car);
    };
    updateCanvas();

    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37: car.moveLeft();
          break;
        case 39: car.moveRight();
          break;
        case 38: car.moveForwards();
          break;
        case 40: car.moveBackwards();
          break;
        case 32: car.reset();
          break;
      };
      updateCanvas();
    };
  };
};