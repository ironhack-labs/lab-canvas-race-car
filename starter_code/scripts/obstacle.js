class Obstacle extends Component {
    constructor(game) {
        super(game);
        this.game = game;
        this.x = Math.floor(Math.random() * 440 + 30);
        this.y = 0;
        this.width = 100;
        this.height = 20;
        this.img = new Image();
    }

    // draws an obstacle
    draw() {
        this.game.ctx.fillStyle = 'red';
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    // moves the obstacle down on the y axis by 10
    move() {
        if (Math.floor(Math.random() * 20) % 3 === 0) {
            this.y += 15;
        }
    }
}