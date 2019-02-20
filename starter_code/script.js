window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('racecar');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 25, 550);
    ctx.fillRect(375, 0, 25, 550);
    ctx.fillStyle = 'grey';
    ctx.fillRect(25, 0, 10, 550);
    ctx.fillRect(365, 0, 10, 550);
    ctx.fillRect(45, 0, 310, 550);    
  }
};


