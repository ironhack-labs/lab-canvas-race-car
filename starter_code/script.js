window.onload = function() {
  var canvas = document.getElementById("road");
  var ctx = canvas.getContext("2d");
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  var car = new Image();

  function startGame() {
    ctx.fillStyle = "#008200";
    ctx.fillRect(0, 0, 450, 650);
    ctx.fillStyle = "#808080";
    ctx.fillRect(40, 0, 370, 650);
    ctx.fillStyle = "#FFF";
    ctx.fillRect(55, 0, 15, 650);
    ctx.fillStyle = "#FFF";
    ctx.fillRect(380, 0, 15, 650);
    for (var i = 0; i < 1000; i += 60) {
      ctx.fillStyle = "#FFF";
      ctx.fillRect(220, i, 10, 40);
    }
    ctx.drawImage(car, 150, 525, 50, 100);
  }
  car.src = "../starter_code/images/car.png";

};

