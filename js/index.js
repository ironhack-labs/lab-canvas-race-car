window.addEventListener('load', () => {
  const game = new Game('game');

  document.getElementById("start-button").onclick = () => {
    game.startGame()
  };

  document.addEventListener("keydown", () => {
    game.onKeyEvent(event);
  });

  document.addEventListener("keyup", () => {
    game.onKeyEvent(event);
  });
});
