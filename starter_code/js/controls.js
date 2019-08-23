/* eslint-disable no-undef */

class Controls {
  constructor(car) {
    this.car = car;
  }
  setKeyBindings () {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key >= 37 && key <= 40) {
        event.preventDefault();
        switch (key) {
          case 37:
            this.car.x -= 5  ;
            console.log('ola');
            break;
          case 39:
            this.car.x += 5;
            console.log('ola');
            break;
        }
}
    });
  }
}