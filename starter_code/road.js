window.onload = function() {
    document.getElementById("start-button").onclick = function() {
    startGame();
    };
    var canvas = document.getElementById('canvi');
     
     
      var ctx = canvas.getContext('2d');
    ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
  }
  
    function startGame() {
  
    };