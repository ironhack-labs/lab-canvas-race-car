const canvas= document.querySelector("canvas");
const ctx= canvas.getContext("2d");
const game = new Game(ctx);


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    if(game.intervalId === null){
      game.start()
    }else{
      game.score()
      game.gameOver()
      
    }
    

  }
};


