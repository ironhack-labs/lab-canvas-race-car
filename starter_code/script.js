window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 45, 700);
    ctx.fillRect(405, 0, 45, 700);
    ctx.fillStyle = "gray";
    ctx.fillRect(45, 0, 10, 700);
    ctx.fillRect(395, 0, 10, 700);
    ctx.strokeStyle = "white";
    ctx.fillRect(65, 0, 20, 700);
    ctx.fillRect(375, 0, 20, 700);
    ctx.fillStyle = "gray";
    ctx.fillRect(75, 0, 180, 700);
    ctx.fillRect(225, 0, 180, 700);
    ctx.setLineDash = "white";
    ctx.lineWidth = 5;
    ctx.moveTo(224, 0);
    ctx.lineTo(226, 700);
    ctx.stroke();

    function draw(car) {
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 200, 480, 50, 100);
      }
      img.src = "./images/car.png";
    }

    draw()
  }
};








