class obstacles{
    constructor(ctx) {
        this.ctx = ctx
        this.obsPos = { 
            x: Math.floor(Math.random())
        }

        this.init()
}
init() {
    this.imageInstance = new Image()
    this.imageInstance.src = `img/${this.camelImage}`
}

draw() {
    this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
}

move() {
    this.camelPos.x += this.camelSpeed
    this.checkCollision()
}

checkCollision() {
    if (this.camelPos.x >= this.gameSize.w - this.camelSize.w || this.camelPos.x <= 0) {
        this.turn()
    }
}

turn() {
    this.camelSpeed *= -1
}

 }