"use-strict";

const start = () => {

    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");

    const game = new Game(canvas);
    const road = new Image();
    road.src = "./images/road.png";
    ctx.drawImage(road, canvas.width / 2 - road.width / 2, 0, road.width, canvas.height);
    
    game.gameOverCallback(finishGame);
    game.startLoop();

    const setCarDirection = (event) => {
      if (event.key === "ArrowLeft") {
        game.car.setDirection(-1);
      } else if (event.key === "ArrowRight") {
        game.car.setDirection(1);
      }
    };

    const setCarSpeed = (event) => {
        
    }

    document.addEventListener("keydown", setCarDirection);
    document.addEventListener("keypress", setCarSpeed);

  function finishGame() {
    alert("The end")
  }
    

};

document.querySelector('#start-button').addEventListener("click", start);
