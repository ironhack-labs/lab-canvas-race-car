class Road {
    constructor(game) {
        this.context = game.context;
        this.game = game;
        this.height = game.height;
        this.width = game.width;
    }

    //Making road
    drawRoad(){
    this.context.beginPath();
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 800, 800);
    this.context.fillStyle = 'grey';
    this.context.fillRect(50, 0, 400, 800);
    this.context.fillStyle = 'white';
    this.context.fillRect(60, 0, 10, 800);
    this.context.fillStyle = 'white';
    this.context.fillRect(430, 0, 10, 800);
    this.context.closePath();

    //Line
    this.context.strokeStyle = 'white';
    this.context.lineWidth = 4;
    this.context.beginPath();
    this.context.setLineDash([15, 30]);
    this.context.moveTo(250, 0);
    this.context.lineTo(250, 800);
    this.context.stroke();
    this.context.closePath();
    }
}
