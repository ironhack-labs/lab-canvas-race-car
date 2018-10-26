window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    $("#game-board").append(
      '<canvas id="canvas-board" width="400px" height="600px"></canvas>'
    );
    let ctx = document.getElementById("canvas-board").getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(50, 0, 300, 600);

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.moveTo(70, 0);
    ctx.lineTo(70, 600);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.moveTo(330, 0);
    ctx.lineTo(330, 600);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 4;
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 30);
    ctx.moveTo(200, 60);
    ctx.lineTo(200, 90);
    ctx.moveTo(200, 120);
    ctx.lineTo(200, 150);
    ctx.moveTo(200, 180);
    ctx.lineTo(200, 210);
    ctx.moveTo(200, 240);
    ctx.lineTo(200, 270);
    ctx.moveTo(200, 300);
    ctx.lineTo(200, 330);
    ctx.moveTo(200, 360);
    ctx.lineTo(200, 390);
    ctx.moveTo(200, 420);
    ctx.lineTo(200, 450);
    ctx.moveTo(200, 480);
    ctx.lineTo(200, 510);
    ctx.moveTo(200, 540);
    ctx.lineTo(200, 570);
    ctx.stroke();
    ctx.closePath();
    
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 150, 400, 100, 150);
    }
    img.src = "images/car.png";
  }
};
