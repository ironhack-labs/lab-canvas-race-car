window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    this.ctx = document.getElementById("race").getContext("2d");
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "grey";
    this.ctx.beginPath();
    this.ctx.moveTo(400, 1000);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(100, 900);
    this.ctx.lineTo(100, 000);
    this.ctx.moveTo(460, 900);
    this.ctx.lineTo(460, 000);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.lineWidth = 50;
    this.ctx.strokeStyle = "#86af49";
    this.ctx.moveTo(105, 900);
    this.ctx.lineTo(105, 000);
    this.ctx.moveTo(465, 900);
    this.ctx.lineTo(465, 000);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "grey";
    this.ctx.rect(140, 000, 290, 900);
    this.ctx.fillStyle = "grey";
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(280, 900);
    this.ctx.lineTo(280, 000);
    this.ctx.setLineDash([10, 20]);
    this.ctx.stroke();
    this.ctx.closePath();


    var car = {
      x: 250,
      y: 600,

      moveLeft: function() {
        this.x -= 40;
      },
      moveRight: function() {
        this.x += 40;
      }
    };

    function draw(car) {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, car.x, car.y, 100, 100);
      };
      img.src = "./images/car.png";
    }

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          break;
        case 39:
          car.moveRight();
          break;
      }
      updateCanvas();
    };

    function updateCanvas() {
      this.ctx.clearRect(1200, 1200, 1200, 1000);
      this.ctx.lineWidth = 10;
      this.ctx.strokeStyle = "grey";
      this.ctx.beginPath();
      this.ctx.moveTo(400, 1000);
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.moveTo(100, 900);
      this.ctx.lineTo(100, 000);
      this.ctx.moveTo(460, 900);
      this.ctx.lineTo(460, 000);
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.lineWidth = 50;
      this.ctx.strokeStyle = "#86af49";
      this.ctx.moveTo(105, 900);
      this.ctx.lineTo(105, 000);
      this.ctx.moveTo(465, 900);
      this.ctx.lineTo(465, 000);
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.lineWidth = 5;
      this.ctx.strokeStyle = "grey";
      this.ctx.rect(140, 000, 290, 900);
      this.ctx.fillStyle = "grey";
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      this.ctx.lineWidth = 5;
      this.ctx.strokeStyle = "white";
      this.ctx.moveTo(280, 900);
      this.ctx.lineTo(280, 000);
      this.ctx.setLineDash([10, 20]);
      this.ctx.stroke();
      this.ctx.closePath();

      draw(car);
    }
  }
};
