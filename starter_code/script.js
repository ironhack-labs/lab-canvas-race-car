window.onload = function () {

  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    let counter = 0
    game.init()
    let intervalId = setInterval((elem) => {
      counter++
      game.clearScreen()
      car.drawCar()
      background.drawBrackground()
      if (counter % 30 == 0) {
        game.generateObstacles()
      }
      game.drawObstacles()
      game.obstacles.forEach((elem) => {
        elem.moveObstacle()
        if (game.checkCollision(elem)) {
          clearInterval(intervalId)
          game.gameOver()
        }
        game.scoreAdd(elem)
      })
      game.printScore()
      car.moveCar()

    }, 100)
  }
};