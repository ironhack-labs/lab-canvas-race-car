class Player {
    constructor(game) {
        this.context = game.context;
        this.positionX = (game.width / 2) - 25;
        this.positionY = game.height - 100;
        this.image = new Image();
        this.image.src = './images/car.png';
        this.boundaryLeft = game.boundaryLeft;
        this.boundaryRight = game.boundaryRight;
        this.height = 90;
        this.width = 60;
        //console.log('Player: constructor: L ' + this.boundaryLeft);
        //console.log('Player:: constructor: W ' + game.width);
        //console.log('Player:: constructor: Context ' + game.context);
        
        //this.context.drawImage(this.image, this.positionX, this.positionY, 50, 70);

    }
    /* moveUp(){
      if (this.positionY >= 55) {
        this.positionY -= 10
      }
    }
  
    moveDown(){
      if (this.positionY <= height) {
        this.positionY += 10
      }
    } */

    moveLeft() {
        if (this.positionX >= this.boundaryLeft) {
            //console.log('b' + game.boundaryLeft)
            console.log('MoveLeft, Position: ' + this.positionX)
            this.positionX -= 20
        }
    }

    moveRight() {
        console.log("MoveRight, position: " + this.positionX)

        if (this.positionX <= this.boundaryRight) {
            this.positionX += 20
        }
    }
    drawCar() {
        this.context.drawImage(this.image, this.positionX, this.positionY, this.width, this.height);

    }
    
}