window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    updateCanvas(ctx);
  }

  function updateCanvas(ctx) {
    // Resetear el canvas
    ctx.clearRect(0, 0, 400, 550);

    drawBoard(ctx);
  }

  function drawBoard(ctx) {
    // Carretera
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 400, 550);

    // Césped
    ctx.fillStyle = '#008100';
    ctx.fillRect(0, 0, 30, 550);
    ctx.fillRect(370, 0, 30, 550);

    // Líneas de la carretera
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 5;

    ctx.moveTo(40, 0);
    ctx.lineTo(40, 550);

    ctx.moveTo(360, 0);
    ctx.lineTo(360, 550);

    // Líneas discontinuas
    var sep = 20;
    var lineSize = 30;
    var posY = 10;
    ctx.moveTo(200, posY);

    while (posY < 550) {
      posY += lineSize;
      ctx.lineTo(200, posY);
      posY += sep;
      ctx.moveTo(200, posY);
    }

    ctx.stroke();
  }
};
