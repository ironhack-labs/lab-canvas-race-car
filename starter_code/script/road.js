class Road{
    constructor (game) {
        this.game = game;
    }

    paint (){
        const context = this.game.context;
        const road = this.game.road;
        const width = this.game.canvas.width;
        const height = this.game.canvas.height;

        context.save();
        context.fillStyle = "green";
        context.fillRect(0, 0, width, height)
        context.restore();

        context.save();
        context.fillStyle = "grey";
        context.fillRect(25, 0, 450, height)
        context.restore();

        context.save();
        context.fillStyle = "white";
        context.fillRect(40, 0, 15, height)
        context.fillStyle = "white";
        context.fillRect(445, 0, 15, height)
        context.restore();

        context.save();
        context.strokeStyle = "white";
        context.setLineDash([45, 45]);
        context.moveTo(width/2, 0);
        context.lineTo(width/2, height);
        context.lineWidth = 15;
        context.stroke();
        context.restore();
    }
}