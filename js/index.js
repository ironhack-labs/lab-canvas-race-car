window.addEventListener ("load", () => {
  const game = new Game("canvas")

    document.getElementById('start-button').onclick = () => {
    if(!game.intervalId) {
    }
  };
  
  document.addEventListener("keydown", (event) => {
    game.onKeyEvent(event)
  })
  
  document.addEventListener("keyup", (event) => {
    game.onKeyEvent(event)
  })
  game.start()
});



