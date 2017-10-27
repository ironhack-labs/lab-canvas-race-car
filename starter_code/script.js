window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("game-canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = './images/car.png';
    var imgScale = 319 / 158;

    ctx.fillStyle = '#3A831E';
    ctx.fillRect(0, 0, 460, 700);
    ctx.fillStyle = '#808080';
    ctx.strokeStyle = '#FFFFFF';
    ctx.setLineDash([28,28]);
    ctx.lineWidth = 8;
    ctx.fillRect(30, 0, 400, 700);
    ctx.clearRect(40, 0, 10, 700);
    ctx.clearRect(410, 0, 10, 700);
    ctx.beginPath();
    ctx.moveTo(228,0);
    ctx.lineTo(228,700);
    ctx.stroke()
    img.onload = function() {
      ctx.drawImage(img, 190, 520, 80, 80 * imgScale);
    };
  }
};
