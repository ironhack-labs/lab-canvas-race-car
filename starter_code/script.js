window.onload = function() {
  $("#game-board").hide();

  function Car() {
    this.minX = 40;
    this.maxX = 460;
    this.x = 215;
    this.y = 480;
    this.width = 70;
    this.height = 120;
  }
  function Raya() {
    this.width = 10;
    this.height = 40;
    this.x = 245;
    this.y = -40;
    this.maxY = 439;
  }
  var car = new Car();
  var ctx = document.getElementById("canvas").getContext("2d");
  var rayas = [];
  document.getElementById("start-button").onclick = function() {
    $(".game-intro").hide();
    $("#game-board").show();
    startGame();
  };

  function startGame() {
    for (var i = 0; i < 6; i++) {
      var raya = new Raya();
      raya.y = 80 * i;
      rayas.push(raya);
    }
    drawGame();
  }

  function drawGame() {
    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 500, 600);
    ctx.fillStyle = "white";
    ctx.fillRect(20, 0, 20, 600);
    ctx.fillRect(460, 0, 20, 600);
    ctx.closePath();
    ctx.beginPath();
    drawRayas();
    ctx.closePath();
    ctx.beginPath();
    drawCar();
    ctx.closePath();
    updateRayas();
  }
  function drawRayas() {
    ctx.fillStyle = "white";
    for (var i = 0; i < 6; i++) {
      ctx.fillRect(rayas[i].x, rayas[i].y, 10, 40);
    }
  }
  function updateRayas() {
    for (var i = 0; i < 6; i++) {
      ctx.clearRect(rayas[i].x, rayas[i].y, 10, 40);
      ctx.fillStyle = "grey";
      ctx.fillRect(rayas[i].x, rayas[i].y, 10, 40);
      if (rayas[i].y >= rayas[i].maxY) {
        rayas[i].y = -40;
      } else {
        rayas[i].y += 5;
      }
    }
    drawRayas();
    requestAnimationFrame(updateRayas);
  }
  function drawCar() {
    img = new Image();
    img.src = "./images/car.png";
    img.onload = function() {
      ctx.drawImage(img, car.x, car.y, car.width, car.height);
    };
  }

  $(window).keydown(function(e) {
    if (e.key == "a") {
      if (car.x >55) {
        ctx.clearRect(car.x, car.y, car.width, car.height);
        ctx.fillStyle = "grey";
        ctx.fillRect(car.x, car.y, car.width, car.height);
        car.x -= 20;
        drawCar();
      }
    }
    if (e.key == "d") {

      if (car.x <375) {
        ctx.clearRect(car.x, car.y, car.width, car.height);
        ctx.fillStyle = "grey";
        ctx.fillRect(car.x, car.y, car.width, car.height);
        car.x += 20;
        drawCar();
      }
    }
  });
};
