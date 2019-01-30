window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
    // canvas.width = screen.width
    // ctx.fillStyle = rgb(;
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 10, 350, 600)
    ctx.fillStyle = 'gray'
    ctx.fillRect(25, 10, 300, 600)
    ctx.fillStyle = 'white'
    ctx.fillRect(33, 10, 10, 600)
    ctx.fillRect(306, 10, 10, 600)
    for (var i = 0; i < 20; i++) {
      ctx.fillRect(175, 20 + i * 30, 4, 20);
    }

  }
};
