class Background {
    constructor(game) {
        this.context = game.context
        this.height = game.height
        this.width = game.width
        this.y = 0
        this.veloY = -2

    }
    drawMap() {
        this.context.fillStyle = 'grey'
        this.context.fillRect(0, 0, this.width, this.height)

        this.context.fillStyle = 'green'
        this.context.fillRect(0, 0, 40, this.height)
        this.context.fillRect(this.width - 40, 0, 40, this.height)
        this.context.fillStyle = 'white'
        this.context.fillRect(50, 0, 10, this.height)
        this.context.fillRect(this.width - 60, 0, 10, this.height)
        for (let i = -600; i < this.height; i += 50) {
            this.context.strokeStyle = 'white';
            this.context.lineWidth = 5;
            this.context.beginPath();
            this.context.moveTo(this.width/2, i - this.y);
            this.context.lineTo(this.width/2, i + 30 - this.y);
            this.context.stroke();
            this.context.closePath();
        }

        //dashed lines
        /* this.context.strokeStyle = 'white'
        this.context.lineWidth = 5
        this.context.beginPath();
        this.context.moveTo(this.width / 2, 1);
        this.context.setLineDash([20, 20]);
        this.context.lineTo(this.width / 2, this.height);
        this.context.stroke(); */

    }
    update() {
        this.y += this.veloY;
        if (this.y < -this.height) {
            this.y = 0
        }
        //console.log('y' + this.y)
        //console.log('height' + this.height)
        //console.log('veloY' + this.veloY)
    } 
}

