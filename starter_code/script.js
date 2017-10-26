window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');


    function draw() {

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 25, 550);

    ctx.fillStyle = "#d8d8d8";
    ctx.fillRect(25, 0, 450, 550);

    ctx.fillStyle = "green";
    ctx.fillRect(475, 0, 25, 550);

    ctx.fillStyle = "#fff";
    ctx.fillRect(35, 0, 10, 550);

    ctx.fillStyle = "#fff";
    ctx.fillRect(455, 0, 10, 550);

    ctx.setLineDash([20, 25]);
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 550);
    ctx.lineWidth = 7;
    ctx.strokeStyle="white";
    ctx.stroke();
}

draw();

  var img = new Image();
  imgScale = 640/480;
  img.onload = function() {
    ctx.drawImage(img, 217, 420, 65, 120);
  };
  img.src = './images/car.png';
  }
};
