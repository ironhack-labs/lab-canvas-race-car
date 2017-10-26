
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

    function draw () {
    var canvas = document.getElementById('startGameb');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 500, 550);

    ctx.fillStyle = "grey";
    ctx.fillRect(30, 0, 440, 550);

    ctx.fillStyle = "white";
    ctx.fillRect(50, 0, 10, 550);

    ctx.fillStyle = "white";
    ctx.fillRect(440, 0, 10, 550);

    ctx.setLineDash([20, 30]);
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 550);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.stroke ();
   }
   draw ()
}

};
