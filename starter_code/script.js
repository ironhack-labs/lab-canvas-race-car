window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    htmlCanvas = document.createElement("canvas");
    htmlCanvas.id = 'road';
    htmlCanvas.setAttribute("width","400px")
    htmlCanvas.setAttribute("height","500px")
    var container= document.getElementById("game-board");
    container.appendChild(htmlCanvas);
    generateRoad()
    }
    
  function generateRoad() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#44820b"
    ctx.fillRect(0, 0, 30,canvas.height);
    ctx.fillRect(canvas.width-30, 0, 30, canvas.height);
    ctx.fillStyle = "#808080"
    ctx.fillRect(30, 0, 15, canvas.height);
    ctx.fillRect(canvas.width-45,0, 15, canvas.height);
    ctx.fillRect(60,0, canvas.width-120, canvas.height);
    var i = 0;
    ctx.fillStyle = "#fff"
    ctx.fillStyle = "#fff";
    for (var i=0;i<canvas.width;i++){
      ctx.fillRect(196,13+33*i,8,20);
    }
  }
   
  
};
