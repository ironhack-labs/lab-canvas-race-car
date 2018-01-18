window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  }
  };

function startGame() {
    var canvas = document.getElementById("car");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#388209";
    ctx.fillRect(0, 0, 400, 508);
    ctx.fillStyle = "#808080";
    ctx.fillRect(40, 0, 320, 508);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(50, 0, 5, 508);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(345, 0, 5, 508);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 5;
    ctx.setLineDash([30,15]);
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 508);
    ctx.stroke(); 
    var img = new Image();
    img.src = "./images/car.png";
    img.onload = function() {
    ctx.drawImage(img, 176, 400, 50, 100);
  } 
};



