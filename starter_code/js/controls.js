class Controls {
  constructor(game) {
    this.game = game;
  }

  setKeyBindings () {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;

      let control;

      switch (key) {
        case 37:
          control = 'left';
          // console.log(control);
          break;
        case 39:
          control = 'right';
          // console.log(control);
          break;
      }

      if (control) {
        event.preventDefault();
        this.game.triggerControl(control);
      }
    });
  }
}