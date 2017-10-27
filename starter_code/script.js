var car;

window.onload = function() {

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


  function draw() {
      ctx.fillStyle = "green";
      ctx.fillRect(5, 0, 500, 600);
      ctx.fillStyle = "grey";
      ctx.fillRect(50, 0, 400, 600);
      ctx.fillStyle = "white";
      ctx.fillRect(60, 0, 20, 600);
      ctx.fillRect(420, 0, 20, 600);

      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.setLineDash([15, 6]);
      ctx.moveTo(250, 0);
      ctx.lineTo(250, 600);

      ctx.stroke();
      ctx.fillStyle = "white";
  }

  document.getElementById("start-button").onclick = function() {
    var buttonStart = $("#start-button");
    startGame();
  };

  function startGame() {
    car = {
      x: 225,
      y: 500,

      moveLeft:  function() {
        if(this.x > 40){
          this.x -= 25
        }
      },

      moveRight: function() {
        if(this.x < 420){
          this.x += 25;
        }
      }
    }

    function drawCar(car) {
      var img = new Image();   // Create new img element
        img.src = './images/car.png';
        imgScale = 158/319;
        img.onload = function() {
          ctx.drawImage(img, car.x, car.y, 100*imgScale, 100);
        }
    }

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: car.moveLeft();  console.log('left',  car); break;
        case 39: car.moveRight(); console.log('right', car); break;
      }
      updateCanvas();
    }

    function updateCanvas() {
      ctx.clearRect(0,0,1500,1700);
      draw();
      drawCar(car);
    }

    updateCanvas();
  }
};
