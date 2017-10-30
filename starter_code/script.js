window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };


  function startGame() {
    var canvas = document.getElementById('canv');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 153, 0)';
    ctx.fillRect(0, 0, 500, 700);

    ctx.fillStyle = 'rgb(160, 160, 160)';
    ctx.fillRect(30, 0, 440, 700);

    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(40, 0, 10, 700);

    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(450, 0, 10, 700);

    ctx.setLineDash([30, 20]);
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.lineWidth = '5'
    ctx.moveTo(250, 700);
    ctx.lineTo(250, 0);
    ctx.stroke();

    draw(ctx)
  }
  function draw(ctx) {
    var img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 226, 580, 50, 85);
    }
    img.src = "./images/car.png";
  }
};
