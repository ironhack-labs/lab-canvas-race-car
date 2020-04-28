class Obstacle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.position = 0;
        this.items = [];
    }
    determineSize() {
        let size = Math.random() * canvas.width;
        if (size > 350) {
            size = 350
        } else if (size < 150) {
            size = 150
        }
        return size
    }
    createObstacle(x, y, size) {
        let obstacle = {
            x: x, //Math.random() * 250,
            y: y,
            size: size,
            height: 40
        }
        this.items.push(obstacle);
        //this.position += 1
    }
    show() {
        let item = this.items[this.items.length - 1];
        if (item.y > 100) {
            ctx.save();
            ctx.fillStyle = 'red';
            ctx.fillRect(item.x, item.y, item.size, item.height);
            ctx.restore();
        }
    }
}