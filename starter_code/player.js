class Player {
    constructor (game) {
        this.context = game.context;
        this.image = new Image();
        this.image.src = './images/car.png';
        this.position = 0;
    }
    draw() {
        this.context.drawImage(this.image,175+this.position,460,50,100);


    }
    oscilate(num) {
        this.position = (this.position + 1)%num;
    }
}