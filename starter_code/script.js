window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.createElement('canvas');
    var gameBoard = document.getElementById('game-board');
    gameBoard.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight; 
    var canvasHeight = canvas.height;
    ctx.fillStyle = 'grey';
    ctx.fillRect(40, 0, 220, canvasHeight);
    ctx.fillStyle = 'white';
    ctx.fillRect(50, 0, 10, canvasHeight);
    ctx.fillStyle = 'white';
    ctx.fillRect(240, 0, 10, canvasHeight);
    
    ctx.fillStyle = 'white';
    ctx.setLineDash([15, 15]);
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 80);
    ctx.stroke();
    
    // ctx.fillRect(150, 0, 5, canvasHeight);

  }
};
