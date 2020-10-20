class Obstacle extends Component {
    constructor(road, x, y, width, height) {
        super(road, x, y, width, height); //I pass the argument but then I really don't use it... wtf?
        //this.road = road;
        this.y = 0;
        this.minX = 62;
        this.maxX = 188;
        this.x = Math.floor(Math.random() * (this.maxX - this.minX + 1) + this.minX);
        this.height = 20;
        this.minWidth = 150;
        this.maxWidth = 250;
        this.width = Math.floor(Math.random() * (this.maxWidth - this.minWidth + 1) + this.minWidth);
    }

    loadObstacle() {
        let ctx = this.road.ctx;
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    changePos() {
        if (Math.floor(Math.random() * 20) % 3 === 0) {
            this.y += 5;
        }
    }
}
