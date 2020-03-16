class Obstacles {
    constructor(game) {
        this.context = game.context;
        this.width = (Math.floor(Math.random() * 200) + 70)
        this.height = 20
        this.x = (Math.floor(Math.random() * 200) + 70)
        this.y = 30
        this.speed = 3;
    }

    draw() {
        this.context.fillStyle = "blue";
        this.context.fillRect(this.x, this.y, this.width, this.height)
        let background = new Image();
        background.src = "https://st3.depositphotos.com/2420203/16358/v/1600/depositphotos_163581036-stock-illustration-seamless-chevron-diagonal-black-and.jpg"
        this.context.drawImage(background, this.x, this.y, this.width, this.height)
    }
    update() {
        this.y += this.speed;
    }
}