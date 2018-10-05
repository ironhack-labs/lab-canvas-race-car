window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    game();
    window.check = 0;
    window.points = 0;
    document.querySelector(".gameover").className= "gameover off";

  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var y = 0;
    ctx.fillStyle = "#7F7F7F";
    ctx.fillRect(0, 0, 400, 700);
    ctx.fillStyle = "#008300";
    ctx.fillRect(0, 0, 40, 700);
    ctx.fillRect(360, 0, 400, 700);
    ctx.clearRect(50, 0, 10, 700);
    ctx.clearRect(340, 0, 10, 700);
    function midLines() {
      if (y === 60) {
        y = 0;
      }
      y += 1.5;
      ctx.fillStyle = "#7F7F7F";
      ctx.fillRect(195, 0, 10, 700);
      var j = -30;
      for (var i = 0; i < 700; i++) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(195, y + j, 10, 30);
        j += 60;
      }
      window.requestAnimationFrame(midLines);
    }
    window.requestAnimationFrame(midLines);
  }
  function game() {
    var canvas = document.getElementById("canvas2");
    var ctx = canvas.getContext("2d");
    var x = 175;
    var carposition = {
      x: x,
      y: 620,
      width: 50,
      height: 80
    };
    var img = new Image();

    img.onload = function() {
      ctx.drawImage(img, x, 620, 50, 80);
    };
    img.src = "./images/car.png";

    document.onkeydown = function(e) {
      var keyCode = e.keyCode;

      function car() {
        ctx.clearRect(x, 620, 50, 80);
        if (x === 65) {
          x += 10;
        }
        if (x === 285) {
          x -= 10;
        }
        if (keyCode === 37) {
          x -= 10;
        }
        if (keyCode === 39) {
          x += 10;
        }

        img.onload = function() {
          ctx.drawImage(img, x, 620, 50, 80);
        };
        img.src = "./images/car.png";
        carposition = {
          x: x,
          y: 620,
          width: 50,
          height: 80
        };
      }
      car();
    };
    window.check = 0;
    window.points = 0;

    function createObstacle() {
      var y = 0;
      window.points += 100;

      var randomX = Math.floor(Math.random() * (350 - 50) + 50);
      var randomwidth = Math.floor(Math.random() * (150 - 90) + 90);

      function obstacle() {
        if (y === 700) {
        }
        y += 1.5;
        ctx.clearRect(randomX - 1, y - 15, randomwidth + 3, 15);
        ctx.fillStyle = "#8F0000";
        ctx.fillRect(randomX, y, randomwidth, 50);
        var colision = {
          x: randomX,
          y: y,
          width: randomwidth,
          height: 50
        };
        if (
          carposition.x + carposition.width >= colision.x &&
          carposition.x < colision.x + colision.width &&
          carposition.y < colision.y + colision.height &&
          carposition.y + carposition.height > colision.y
        ) {
          window.check = 1;
        }
        window.requestAnimationFrame(obstacle);
      }

      window.requestAnimationFrame(obstacle);
    }

    var interval = setInterval(createObstacle, 2000);
    var stop = setInterval(function() {
      if (window.check === 1) {
        clearInterval(interval);
        gameOver();
        
      } else {
        document.querySelector(".points").innerText = window.points;
      }
    }, 50);
  }
};
function gameOver() {
  var canvas = document.querySelector(".gameover");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle="#000000"
  ctx.fillRect(0, 0, 400, 700);
  ctx.textStyle = "90px arial";
  ctx.fillStyle = "#8F0000";
  ctx.fillText("GAME OVER!", 100, 200);
  ctx.fillStyle = "#ffffff";
  ctx.fillText("YOUR SCORE: " + window.points, 100, 300);
  canvas.className = "gameover on";
}
