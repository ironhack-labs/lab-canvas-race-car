/* class Controls {
    constructor(game) {
        this.game = game;
    }

    setKeyBindings() {
        window.addEventListener('keydown', (event) => {
            let control;
            switch (event.keyCode) {
              case 37:
                control = 'left';
                context.clearRect(fastCar.posX, 500, 39.5, 79.75);
                game.paintRoad();
                fastCar.moveLeft(fastCar.posX)
                drawCar(fastCar.posX, 500); 
                console.log('left');
              break;
              case 39:
                  control = 'right';
                context.clearRect(fastCar.posX, 500, 39.5, 79.75);
                game.paintRoad();
                fastCar.moveRight(fastCar.posX)
                drawCar(fastCar.posX, 500); 
                console.log('right');
                break; 
    }
  })
}
} */

class Controls {
    constructor(game) {
      this.game = game;
    }
  
    setKeyBindings () {
      window.addEventListener('keydown', event => {
        const key = event.keyCode;
  
        //let control;
  
        switch (key) {
          case 37:
            //control = 'left';
            if (this.game.fastCar.posX !== 40) {
              this.game.fastCar.posX -= 10
            } else {
              this.game.fastCar.posX = this.game.fastCar.posX;
            }
            this.game.fastCar.drawCar()
            break;
          case 39:
            //control = 'right';
            if (this.game.fastCar.posX !== 320) {
              this.game.fastCar.posX  += 10
            } else {
              this.game.fastCar.posX = this.game.fastCar.posX;
            }
            this.game.fastCar.drawCar()
            break;
        }
  
/*         if (control) {
          event.preventDefault();
          this.game.triggerControl(control);
        } */
      });
    }
  }