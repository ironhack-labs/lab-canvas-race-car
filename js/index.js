window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let roadImg = new Image();
    roadImg.src = "images/road.png";
    let carImg = new Image();
    carImg.src = "images/car.png";
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(carImg, 220, 500, 50, 100);
    window.requestAnimationFrame(startGame);
  }
};
