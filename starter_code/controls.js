class Controls {
  constructor(game) {
    this.game = game;
  }
  startControls() {
    window.addEventListener('keydown', event => {
      event.preventDefault();
      switch (event.keyCode) {
        case 37:
          this.game.player.moveLeft();
          break;

        case 39:
          this.game.player.moveRight();

          break;
        case 32:
          this.game.restart();
          break;
      }
    });
  }
}
