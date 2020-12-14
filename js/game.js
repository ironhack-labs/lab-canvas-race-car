class Game{
    constructor(ctx){
        this.ctx = ctx
        this.road = new Road(ctx)
        this.car = new Car(ctx)

        this.interval = undefined

        this.obstacles = [
            new Obstacles(this.ctx,0,0,300)
        ]
        
    }

    start(){

        this.setListeners()

        this.interval = setInterval(() =>{
            this.clear();

            this.draw()

            this.move()
        },1000/60)
    }
/////////////////////////////////////////////////////////////////////////////////
    clear(){
        this.ctx.clearRect(0,0, this.ctx.canvas.width,this.ctx.canvas.height)
        //this.obstacles = this.obstacles.filter(obstacle => obstacle.y <  this.canvas.height )
    }

    draw(){
        this.road.draw()
        this.car.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
        
        
        console.log(this.obstacles.length)

        
      
    }
    move(){
        this.road.move()
         this.car.move()
        this.obstacles.forEach(obstacle => obstacle.move())
    }
     setListeners() {
      
    document.onkeydown = (event) => {
       
      switch(event.keyCode) {
        case RIGHT:
          this.car.vx = -10
         
          break;
        case LEFT:
          this.car.vx = 10
          break;
      }
    }

        document.onkeyup = event => {
      
        if (event.keyCode) {
            this.car.vx = 0
        }
    }
    }
}