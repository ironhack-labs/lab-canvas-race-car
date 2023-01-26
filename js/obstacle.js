class Obstacle{

    constructor(carWidth, roadStart, roadEnd, context){
        this.carWidth = carWidth
        this.roadStart = roadStart
        this.roadEnd = roadEnd
        this.ctx = context
        this.position = {
            x: 0,
            y: 0,
        }
        this.width = 50
        this.height = 54
    }
    generateRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min}
    positionateRandom(){
        this.position.x = this.generateRandomInRange(this.roadStart-40, this.roadEnd-80)
        this.width = this.generateRandomInRange(100, 250)
        console.log(this.width)
    }
    drawObstacle(){
        this.ctx.fillStyle = "pink"
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    move(){
        this.position.y += 8
    }
}