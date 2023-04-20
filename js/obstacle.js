class Obstacle {
    constructor(ctx, posX){
        this.ctx = ctx
        this.speed = 10
        this.ObstacleSpecs = {
            position : {x: posX, y: 0 },
            size : {x: 100, y:100} // !!! deberia ser w y h
        }
    }



    draw(){

       this.move()
        //let random = Math.random() * 300
        this.ctx.fillStyle = "pink",
        this.ctx.fillRect(this.ObstacleSpecs.position.x, this.ObstacleSpecs.position.y, 100, 20)
    }



    move(){
        this.ObstacleSpecs.position.y += this.speed
    }



    /* colisiones
       if (elm.ObstacleSpecs.position.x < alpaCarSpecs.position.x + alpaCarSpecs.size.x &&
        elm.ObstacleSpecs.position.x + elm.ObstacleSpecs.size.x > alpaCarSpecs.position.x &&
        elm.ObstacleSpecs.position.y < alpaCarSpecs.position.y + alpaCarSpecs.size.y &&
        elm.ObstacleSpecs.size.y + elm.ObstacleSpecs.position.y > alpaCarSpecs.position.y)*/
}