class Car {constructor (game) {
    this.game = game;
    this.direction = '';
    this.x = 140;
    this.y = 500;
      }    


    draw () {
        const context = this.game.context;
        this.imageCar = new Image();

        this.carWidth = 40;
        this.carHeight = 80;
        this.imageCar.src = 'images/car.png';

        console.log('x ' +this.x)
        console.log('y ' +this.y)
        console.log('Width ' + this.carWidth)
        console.log('Height ' + this.carHeight)


        this.imageCar.addEventListener('load', () => {
            context.drawImage(this.imageCar, this.x, this.y, this.carWidth, this.carHeight);
            });
            context.drawImage(this.imageCar, this.x, this.y, this.carWidth, this.carHeight);
            
        }

    moveLeft () {
        this.x = this.x + 50;
        } 
        
    moveRight () {
        this.x = this.x - 50
    } 
}
        