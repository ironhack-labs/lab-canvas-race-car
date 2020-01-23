// OBSTACULOS
class Obstacles {
    constructor() {
        this._position = {
            x: (Math.random() * (game.wSize.width - game.maple) - game.maple) + game.maple,
            y: 0
        }
        this._size = {
            x: (Math.random() * (car.size.x * 2) - 50) + 50,
            y: 20
        }
    }

    init() {
        game.ctx.fillStyle = 'red'
        game.ctx.fillRect(this._position.x, this._position.y, this._size.x, this._size.y)
    }

    moveObstacle() {
        this._position.y += 10
    }
}