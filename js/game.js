class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.road = new Road (ctx)
    }

    startGame() {
        this._draw()
    }

    move(direction) {
        this.road.moveCar(direction)
    }

    _draw() {
        this.road.draw()
    }
}