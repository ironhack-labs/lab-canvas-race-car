const game = {
    
    canvasSize: {
        w: 500,
        h: 700
    }, 
    ctx: undefined,
    obstacles: [],
    framesIndex: 0,


    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
        this.setEventListeners()
        this.createAll()
        this.drawAll()
        
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            w: document.querySelector(canvasId).setAttribute('width', this.canvasSize.w),
            h: document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
        }
        // document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        // document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },
    setEventListeners () {
window.onkeydown = (event) => {
    if(event.key === "ArrowRight"){
        this.coche.moveRight();
    }
    if(event.key === "ArrowLeft") {
        this.coche.moveLeft();
    }
    if(event.key === "ArrowUp") {
        this.coche.moveUp();
    }
    if(event.key === "ArrowDown") {
        this.coche.moveDown();
    }

}
    },
    createAll() {
        this.createRoad()
        this.coche = new Coche(this.ctx, 230, 600, 60, 100, "car.png");
        this.coche.init()
        
    },
    drawAll() {
        this.intervalID = setInterval(() => {
            
            this.framesIndex++;
            this.clearAll()
            this.createRoad()
            this.coche.draw()
            this.obstacles.forEach(elm => elm.draw())
            if(this.framesIndex % 50 === 0){
                this.generateObstacles()
            }

            console.log ('hola')            
        }, 50) 
    },
    generateObstacles() {
        this.obstacles.push(
            new Obstacles(this.ctx, Math.floor(Math.random()*300), 0, 200, 10, 10, 'red')
        )
    },
    clearAll() {
        this.intervalID = this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },
    createRoad() {
    this.drawRectangles(0, 0, 35, 700, 'green')
    this.drawRectangles(35, 0, 10, 700, 'grey')
    this.drawRectangles(60, 0, 380, 700, 'grey')
    this.drawRectangles(455, 0, 10, 700, 'grey')
    this.drawRectangles(465, 0, 350, 700, 'green')
    this.drawDashedLines(250, 0, 250, 700, 40, 20, 10, 'white')
    },
    drawRectangles(x, y, w, h, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);

     },
    drawDashedLines(x, y, x2, y2, i, j, w, color) {
        this.ctx.lineWidth = w;
        this.ctx.strokeStyle = color;

        this.ctx.beginPath()
        this.ctx.setLineDash([i, j])
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(x2, y2)
        this.ctx.stroke()
        this.ctx.closePath()
        }, 
    drawImage(imageSrc, x, y, j, k) {
        const image = new Image(); 
        image.src = imageSrc 
    
        image.onload = () => {
             this.ctx.drawImage(image, x, y, j, k);
        }
        },
    
   
    
    
}

    