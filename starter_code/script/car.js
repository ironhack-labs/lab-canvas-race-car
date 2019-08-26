class Car {
    constructor (game){
        this.game = game;
        this.carImage = new Image ();
        this.carImage.src = 'images/car.png';
    }

    paint (){
        const context = this.game.context;
        const width = this.game.canvas.width;
        const height = this.game.canvas.height;
        const carWidth = this.carImage.width/2;
        const carHeight = this.carImage.height/2;
        context.drawImage(this.carImage, width/2 - carWidth/2, height/2 - carHeight/2, carWidth, carHeight);
        
    }
}