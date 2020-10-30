window.onload = () => {
  
  document.getElementById('start-button').onclick = () => {

   
    startGame();
  };

  function startGame() {


    limpiarGameOver();

     
    const canvasElement = document.querySelector("canvas");

    const setCarDirection = (event) => {
      if (event.code === "ArrowRight") {
        game.car.setDirection(1);
      } else if (event.code === "ArrowLeft") {
        game.car.setDirection(-1);
      }
    };

    document.addEventListener("keydown", setCarDirection);
    

    const game = new Game(canvasElement);

    game.startLoop();


  }

  function limpiarGameOver(){//elimina la puntuación final de la anterior partida

    if(document.querySelector(".game-over")){
      document.querySelector(".game-over").remove();

    }


  }

}; 

