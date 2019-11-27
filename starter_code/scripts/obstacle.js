class Obstacle extends Component {
    constructor(game) {
        super(game);
        this.game = game;
        this.x = Math.floor(Math.random() * 500 + 30);
        this.y = -100;
        this.width = 80;
        this.height = 150;
        this.img = new Image();
    }

    draw() {
        this.img.src = "./images/redCar.png";
        this.game.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    move() {
        if (Math.floor(Math.random() % 2) === 0) {
            this.y += 7;
        }
    }
}
