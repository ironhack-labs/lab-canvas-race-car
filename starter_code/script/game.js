class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');

    this.controls = new Controls(this);
    this.controls.setKeyBindings();
    this.car = new Car(this);

    /* this.scoreBoard = new ScoreBoard(this); */
  }

  start () {
    this.paint();
  }

  clear () {
    this.context.clearRect(0, 0, 350, 600);
  }
   
  paint () {
    this.clear();
    this.road.paint();
    this.car.paint();
  }

  /*
  triggerControl () {
  }

  reset () {
  }

  lose () {
  }
 */
}
