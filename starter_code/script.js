window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    ctx = document.getElementById('game').getContext('2d');
    ctx.lineWidth = 20;
    ctx.strokeStyle =rgb(040,114,051);
    ctx.beginPath();
    ctx.lineTo(0, 620);
    ctx.moveTo(620, 0);
    ctx.lineTo(620,620);
  }
};
