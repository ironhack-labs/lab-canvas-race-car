window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  function startGame() {
    ctx.fillStyle = "#00CA0D";
    ctx.fillRect(0, 0, 520, 750);

    ctx.fillStyle = "#A1A1A1";
    ctx.fillRect(30, 0, 460, 750);

    ctx.fillStyle = "white";
    ctx.fillRect(255, 0, 10, 750);

    var img = new Image();
    img.src = "images/car.png";
    img.onload = function() {
      ctx.drawImage(img, 235, 600, 60, 110);
    };
  }
};
