class Car {constructor (game) {
    this.game = game;
    this.direction = '';
    this.x = 290;
    this.y = 500;
      }    


    draw () {
        const context = this.game.context;
        const imageCar = new Image();

        const carWidth = 40;
        const carHeight = 80;
        imageCar.src = 'images/car.png';


        // console.log('x ' +this.x)
        // console.log('y ' +this.y)
        // console.log('Width ' + this.carWidth)
        // console.log('Height ' + this.carHeight)


        window.addEventListener('load', () => {
            context.drawImage(imageCar, this.x, this.y, carWidth, carHeight);
            });
            context.drawImage(imageCar, this.x, this.y, carWidth, carHeight);
            
        }

    moveLeft () {
        this.x = this.x + 50;
        } 
        
    moveRight () {
        this.x = this.x - 50
    } 
}
        