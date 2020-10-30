window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");

  const road = new Image();
  road.src = "./images/road.png";

  const car = new Image();
  car.src = "./images/car.png";
  const carSize = {
    width: 158 * 0.25,
    height : 319 * 0.25
  }
  let carPositionX = canvas.width / 2 - carSize.width/2;
  

  function startGame() {
    ctx.drawImage(road, canvas.width / 2 - road.width / 2, 0, road.width, canvas.height)
    ctx.drawImage(car, carPositionX, canvas.height - carSize.height - 20, carSize.width, carSize.height);

  }

  function clearBoard() {
    ctx.clearRect(0, 0,  canvas.width, canvas.height)
    ctx.drawImage(road, canvas.width/2 - road.width/2, 0, road.width, canvas.height)
    ctx.drawImage(car, carPositionX, canvas.height - carSize.height - 20, carSize.width, carSize.height)
  }

  function setCarDirection() {
    if (event.code === "ArrowLeft" && carPositionX > 110 + carSize.width/2 ) {
      carPositionX -= 20;
      
      clearBoard();
      } else if (event.code === "ArrowRight" && carPositionX < 350) {
      carPositionX += 20;
        clearBoard();
      }
  }

  function moveObstacle() {
    obstacles.forEach(obs => {
      obs.obstaclePositionY += 20;
    });
    console.log("hola")
  }

  const obstacles = [];

  const obstacle = {
    obstaclePositionY: 0,
    obstaclePositionX: 0,
    obstacleWidth: 0
  }

  function newObstacle() {
    obstacle.obstacleWidth = (Math.random() * 70);
    obstacle.obstaclePositionX = (Math.random() * 350)
    ctx.fillRect(obstacle.obstaclePositionX, obstacle.obstaclePositionY, 50, 20)
    obstacles.push(obstacle)
    console.log(obstacles)
  }

  document.addEventListener("keydown", setCarDirection)
  window.requestAnimationFrame(moveObstacle)

};
