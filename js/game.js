class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    
    const basePixel = width/10;
    
    this.width = $canvas.width;
    this.height = $canvas.height;
    
    this.setKeyBindings();
    
    this.background = new Background(this);
    this.car = new Car(this);
}


setKeyBindings () {
    window.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
            case 37:
          event.preventDefault();
          //   this.x = this.x - 50;
          this.car.moveLeft;
          //   console.log('x of car ' + this.car.x)
          break;
          case 39:
              event.preventDefault();
        //   this.x = this.x + 50;
        this.car.moveRight;
        //   console.log('x of car ' + this.car.x)
        break;
    }
    });
}

clearEverything () {
    this.context.clearRect(0, 0, this.width, this.height);
}

start () {
    console.log('button start pressed')
    console.log('new car created')
    this.background.draw();
    console.log('new background')
    this.car.draw();
    console.log('car designed')
    // this.clearEverything()
    // event.preventDefault();
    // this.clearEverything ()  
  }


}