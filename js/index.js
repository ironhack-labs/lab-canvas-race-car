window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  const ctx = document.querySelector("canvas").getContext("2d");

  function startGame() {
    drawRoad();
    drawCar();
  }

  function drawRoad() {
    const roadImg = new Image();
    roadImg.onload = function () {
      ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    }
    roadImg.src = "./images/road.png";
  }

  function drawCar() {
    const carImg = new Image();
    const carImgX = (canvas.width / 2) -20;
    const carImgY = 630;
    carImg.onload = function () {
      ctx.drawImage(carImg, carImgX, carImgY, 40, 60);
    }
    carImg.src = "./images/car.png";
  }
}

