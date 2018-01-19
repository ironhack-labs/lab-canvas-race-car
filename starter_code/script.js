window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("cancan");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#80817F";
    ctx.fillRect(0, 0, 500, 700);
    ctx.fillStyle = "#27AE60";
    ctx.fillRect(0, 0, 40, 700);
    ctx.fillRect(460, 0, 40, 700);
    ctx.fillStyle = "#FFF";
    ctx.fillRect(60, 0, 10, 700);
    ctx.fillRect(430, 0, 10, 700);

    ctx.strokeStyle = "#FFF";
    ctx.beginPath();
    ctx.setLineDash([30, 40]);
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 700);
    ctx.lineWidth = 5;
    ctx.stroke();

    var img = new Image();
    imgScale = 150 / 150;
    img.onload = function() {
      ctx.drawImage(img, 230, 630, 35 * imgScale, 50);
    };
    img.src = "images/car.png";

    var myGameArea = {
      canvas: document.createElement("cancan"),
      start: function() {
        this.canvas.width = 430;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        
      }
    };
  }
};
