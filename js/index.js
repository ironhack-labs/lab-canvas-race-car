window.addEventListener ("load", () => {
  
  const game = new Game("canvas")

  document.getElementById('start-button').onclick = () => {
   
    if(!game.intervalId) {
      game.start()
    }

  };

  
});



