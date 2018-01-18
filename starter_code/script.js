window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    this.ctx = document.getElementById('cargame').getContext('2d');
    ctx.fillRect(0, 0, 300, 600);
    ctx.fillStyle="#00FF00";
    ctx.fillRect(0, 0, 30, 600);
    ctx.moveTo(150,0);
    //ctx.lineTo(150,150);
    ctx.fillRect(0, 0, 30, 600);
    ctx.stroke();

  }
};
