

  let counter = 0;

  setInterval(() => {
    ctx.clearRect(0, 0, w, h);
    drawRoad();
    drawCar();
    counter++;
  }, 1000 / 60);


function drawRoad() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "grey";
  ctx.fillRect(25, 0, 300, canvas.height);

  ctx.fillStyle = "white";
  ctx.fillRect(40, 0, 10, canvas.height);
  ctx.fillRect(300, 0, 10, canvas.height);


  ctx.strokeStyle = "white";
  ctx.setLineDash([30, 30]);

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

}


function drawCar() {
  var img = new Image();
  img.src = './images/car.png';
  img.onload = function () {
    ctx.drawImage(img,canvas.width/2,300,75,150);
  }
}


window.onload = function () {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  drawRoad();
  drawCar();
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
};


