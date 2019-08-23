class Road {
    constructor(game){
        this.game = game;
    }

    drawRoad () {

    this.game.c.fillStyle = 'green'
    this.game.c.fillRect(0, 0, 50, 650)
    this.game.c.fillRect(430, 0, 50, 650)

    this.game.c.fillStyle = 'grey'
    this.game.c.fillRect(20, 0, 410, 650)

    this.game.c.fillStyle = 'white'
    this.game.c.fillRect(30, 0, 10, 650)
    this.game.c.fillRect(410, 0, 10, 650)

    this.game.c.strokeStyle = 'white'
    this.game.c.setLineDash([20, 15]);
    this.game.c.beginPath();
    this.game.c.lineWidth = 5;
    this.game.c.moveTo(225, 0)
    this.game.c.lineTo(225, 650)
    this.game.c.stroke();
    this.game.c.closePath();
    }
}
