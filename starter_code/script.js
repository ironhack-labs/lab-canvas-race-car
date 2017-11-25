window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(25, 125, 500, 1000);
    ctx.fillStyle = 'grey';
    ctx.fillRect(65, 125, 420, 1000);
    ctx.fillStyle = 'white';
    ctx.fillRect(85, 125, 20, 1000);
    ctx.fillStyle = 'white';
    ctx.fillRect(canvas.width-80, 125, 20, 1000);
    ctx.setLineDash([18, 17]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(275,125);
    ctx.lineTo(275, 1000);
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
};
