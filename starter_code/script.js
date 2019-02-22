window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0,350,600);
    ctx.clearRect(50,0,10,600);
    ctx.clearRect(290,0,10,600);
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,40,600);
    ctx.fillRect(310,0,40,600)
    ctx.beginPath();
    ctx.setLineDash([20, 15]);/*dashes are 5px and spaces are 3px*/;
    ctx.lineWidth = "5";
    ctx.strokeStyle = "white";
    ctx.moveTo(175,25);
    ctx.lineTo(175,600);
    ctx.stroke();
  }
};
