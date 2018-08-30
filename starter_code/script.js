window.onload = function() {
  var game=document.getElementById('game-board');
  var GREY = "#808080";
  var GREEN = "#3a8200";
  startGame();
  document.getElementById("start-button").onclick = function() {
  };
  function startGame() {
    var canvas=document.createElement('canvas');
    var ctx=canvas.getContext("2d");
    game.appendChild(canvas)
    canvas.width=400;
    canvas.height=500;
    ctx.fillStyle=GREEN;
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle=GREY;
    ctx.fillRect(25,0,canvas.width-25*2,canvas.height)
    ctx.strokeStyle="white";
    ctx.lineWidth=10;
    ctx.beginPath()
    ctx.moveTo(40,0)
    ctx.lineTo(40,canvas.height)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(canvas.width-40,0)
    ctx.lineTo(canvas.width-40,canvas.height)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(canvas.width/2,25)
    ctx.lineTo(canvas.width/2,canvas.height)
    ctx.setLineDash([20,10]);
    ctx.lineWidth=5;
    ctx.stroke()
    // ctx.strokeRect(35,0,canvas.width-25*2,canvas.height)
    // ctx.fillStyle=white;
  }
};
