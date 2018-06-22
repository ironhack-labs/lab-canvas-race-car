window.onload = function () {

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const cW = canvas.width;
  const cH = canvas.height;

  const car = new Image();
  const CAR_W = 158;
  const CAR_H = 319;
  const carW = cW / (CAR_W * 8) * CAR_W;
  const carH = cW / (CAR_W * 8) * CAR_H;

  var lineOffset = 0;
  var gameLevel = 1;
  var gameLives = 3;

  var carPosX = 0;
  var carPosY = 0;
  var keyboardSens = 5;
  var moveLeft = false;
  var moveRight = false;

  function loadCar() {
    car.onload = function () {
      ctx.drawImage(car, (cW - carW) / 2, cH - 1.5 * carH, carW, carH);
    };
    car.src = 'images/car.png';
  }

  function drawRoad(centralLineOffset) {
    //arcen
    ctx.setLineDash([]);
    ctx.fillStyle = "#7F7F7F";
    ctx.fillRect(0, 0, cW, cH);

    //carretera
    ctx.lineWidth = cW * .2;
    ctx.strokeStyle = "#007F00";
    ctx.strokeRect(0, -cH * .1, cW, cH * 1.2);

    //linea arcen
    ctx.lineWidth = cW * .015;
    ctx.strokeStyle = "#FFFFFF";
    ctx.strokeRect(cW * .12, -cH * .1, cW * (1 - 0.24), cH * 1.2);

    //linea separacion
    ctx.beginPath();
    ctx.lineDashOffset = centralLineOffset;
    ctx.setLineDash([cW / 15, cW / 15]);
    ctx.strokeStyle = "#FFFFFF";
    ctx.strokeWidth = cW * .15;
    ctx.moveTo(cW / 2, 0);
    ctx.lineTo(cW / 2, cH);
    ctx.stroke();
    ctx.closePath();
  }

  function updateCanvas() {

    if (moveLeft) carPosX -= keyboardSens;
    if (moveRight) carPosX += keyboardSens;

    lineOffset -= 1 * gameLevel;
    drawRoad(lineOffset)
    ctx.drawImage(car, carPosX + (cW - carW) / 2, carPosY + cH - 1.5 * carH, carW, carH);
    window.requestAnimationFrame(updateCanvas);
  }

  //init configuration
  drawRoad(lineOffset);
  loadCar();

  function startGame() {

    window.requestAnimationFrame(updateCanvas);

  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        moveLeft = true;
        break;
      case 39:
        moveRight = true;
        break;
    }
  }

  document.onkeyup = function (e) {
    switch (e.keyCode) {
      case 37:
        moveLeft = false;
        break;
      case 39:
        moveRight = false;
        break;
    }
  }

  document.getElementById("start-button").onclick = function () {
    startGame();

  };


}