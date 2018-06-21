window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
  var ctx = document.getElementById('coche').getContext('2d');

  function startGame() {
    var coche = new Coche();
    var obs = [];

    function Coche() {

      this.x = 225;
      this.y = 700;
      this.maxSpeed = 1;
      this.sX;
      this.img = new Image();
      this.img.src = "images/car.png";
    }

    Coche.prototype.draw = function () {
      ctx.clearRect(0, 0, 1500, 1700);
      ctx.fillStyle = "#2b6020";
      ctx.beginPath();
      ctx.fillRect(0, 0, 20, 800);
      ctx.fillRect(480, 0, 500, 800);
      ctx.fillStyle = "#9e9999";
      ctx.fillRect(20, 0, 460, 800);
      ctx.fillStyle = "#ffffffff";
      ctx.fillRect(40, 0, 20, 800);
      ctx.fillRect(460, 0, -20, 800);
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "white";
      ctx.setLineDash([15, 15]);
      ctx.moveTo(225, 0)
      ctx.lineTo(225, 800);
      ctx.stroke();
      ctx.drawImage(this.img, this.x, this.y, 50, 50);
      }

    Coche.prototype.moveLeft = function () {
      this.x-=10
      coche.draw();
    }
    Coche.prototype.moveRight = function () {
      this.x +=10
      coche.draw();
    }

    Coche.prototype.drive=function(){
        this.x+=this.Sx;
    }

    function Obstaculo() {
      this.length = (Math.random() * 600) / 2
      this.width = (Math.random() * 600) / 2
      this.show = function () {
        var x = Math.random();
        if (x > 0.5) {
          ctx.fillRect(0, this.length, this.width, 20);
        } else {
          ctx.fillRect(800, -this.length, -this.width, 20);
        }
      }
      this.update = function () {

        this.length += 1;
        this.show();

      }
    }


    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37:
          coche.moveLeft();
         
          break;
        case 39:
          coche.moveRight();

          break;
      }
    }

    function updateCanvas() {
      coche.draw(ctx);
      coche.drive();
      window.requestAnimationFrame(updateCanvas);
    }

      coche.draw(ctx);
      coche.drive();

    
   


  }
};