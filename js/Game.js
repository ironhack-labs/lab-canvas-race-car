const Game = {
    
    FPS:60,
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    heigth: undefined,

    car:undefined,
    background:undefined,

    intervalID:undefined,
    
    Init(){
        this.canvas = document.querySelector('#canvas')
        this.ctx = this.canvas.getContext('2d')

        this.winImg= new Image()
        this.winImg.src= "../images/road.png"

        this.setDimensions()
        this.star()
        
    },

    setDimensions(){
        this.width = window.innerWidth
        this.heigth= window.innerHeight
        
        this.canvas.width= this.width
        this.canvas.heigth= this.heigth
    },

    star() {
        this.generateALL()

        this.intervalID=setInterval(()=>{
            this.clearAll()
            this.drawALL()

        }, 1000/this.FPS)

    },

    drawALL(){
        this.background.draw()
        this.car.draw()

    },

    generateALL(){
        this.car = new Car(this.ctx, this.width, this.heigth)
        this.background= new Background(this.ctx, this.width, this.heigth)
    },

    clearAll(){
        this.ctx.clearReact(0,0,this.width, this,this.heigth)

    },
} 