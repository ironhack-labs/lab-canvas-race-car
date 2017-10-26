window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  // Function that draws the board in the canvas
  function createBoard (){
    var canvas = document.getElementById("board");
    var ctx = canvas.getContext('2d');
    // Fill the background color - grey
    ctx.fillStyle = "#BFC9CA";
    ctx.fillRect(0, 0, 700, 550);
    // Fill the green parts
    ctx.fillStyle = "#15B405";
    ctx.fillRect(0, 0, 40, 550);
    ctx.fillRect(660 ,0, 40, 550);
    // Fill the white parts
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(60, 0, 20, 550);
    ctx.fillRect(620, 0, 20, 550);
    // Create the dashed line
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.setLineDash([30,50]);
    ctx.moveTo(350, 0);
    ctx.lineTo(350, 550);
    ctx.stroke();
  }

  function startGame() {
    createBoard();
  }
};
