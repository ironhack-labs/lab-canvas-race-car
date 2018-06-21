//var road = new Image();
//img.src = "images"

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#979A9A";
    ctx.fillRect(15, 0, 300, 600);
    //Verdes
    ctx.fillStyle = "#229954";
    ctx.fillRect(0, 0, 30, 600);
    ctx.fillRect(300, 0, 30, 600);
    //Blancas laterales
    ctx.fillStyle = "#FFF";
    ctx.fillRect(40, 0, 5, 600);
    ctx.fillRect(285, 0, 5, 600);
    //Discontinua central
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.setLineDash([20, 30])
    ctx.moveTo(165, 10);
    ctx.lineTo(165, 600);
    ctx.stroke();
  }
};
