class Car {
    constructor(game) {
        this.game = game;
        this.x = 200
        this.y = 550
        this.image = new Image();
        this.image.src = './images/car.png';
        this.controls = new Controls(this)
        this.controls.setKeyBindings() 
    }

    drawCar(){  
        this.game.c.drawImage(this.image, this.x, this.y, 50, 75)
        console.log('car')
    
    }

    


}



