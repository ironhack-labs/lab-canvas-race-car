const game = new Game("canvas") ;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };
}

document.addEventListener('keydown', (event) => {
  game.player.directions(event);
})

document.addEventListener('keyup',(event) => {
  game.player.directions(event);
})