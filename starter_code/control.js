class Control {
  constructor (callbacks) {
    this.callbacks = callbacks;
  }

  setKeyBindings () {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key === 37 || key === 39) {
        event.preventDefault();
        switch (key) {
          case 37:
            this.callbacks.left();
            break;
          case 39:
            this.callbacks.right();
            break;
        }
      }
    });
  }
}
