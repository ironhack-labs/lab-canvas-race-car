window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  initPosition = [300, 600];
  function startGame() {

    //draw the path
    ctx = document.getElementById("game-canvas").getContext("2d");
    ctx.fillStyle = "rgb(0, 193, 49)";
    ctx.fillRect(0 ,0 ,600 , 700);
    ctx.fillStyle = "rgb(198, 198, 198)";
    ctx.fillRect(50 ,0 ,500 , 700);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(70 ,0 ,20 , 700);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(510 ,0 ,20 , 700);
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.setLineDash([40, 30]);
    ctx.lineWidth = 10;
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 700);
    ctx.stroke();

    //draw the car
    var img = new Image();
    img.onload = function() {ctx.drawImage(img, initPosition[0], initPosition[1], 70, 70);}
    img.src = "images/car.png";
  }
};
