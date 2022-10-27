const game = {

    appName: 'Canvas Race Car',
    version: '1.0.0',
    license: undefined,
    author: 'David Fernández López',
    description: 'First aproach to canvas',
    canvasSize: {

        w: undefined,
        h: undefined
    },
    ctx: undefined,
    imageInstance: undefined,
    carData: {

        pos: { x: undefined , y: undefined },
        size: {w:60, h:130},
        image:'images/car.png'
    },
    obstacles: [],
    framesCounter: 0,
    score: 0,

    init() {
        
        this.setDimensions()
        this.setContext()
        this.createCar()
        this.setCarPosition()
        this.setEventHandlers()
        this.createObstacle()
        this.start()
        // console.log('inicia')
    },

    setDimensions() {

        this.canvasSize = {
            w: 500,
            h: 700
        }
        
        document.querySelector('#canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('#canvas').setAttribute('height', this.canvasSize.h)
    },

    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },

    setEventHandlers() {
        
        document.onkeydown = event => {
                // console.log(event.key)
            switch (event.key) {
                case 'ArrowLeft':
                    this.carData.pos.x -= 7
                    // if (this.carData.x === 60) this.carData.x = 0
                    // if (this.carData.pos < this.ctx.canvasSize.w + 100) {
                    //     this.carData.pos = this.ctx.canvasSize.w + 100
                    //     break
                    // }
                    break;
                case 'ArrowRight':
                    this.carData.pos.x += 7
                    // if (this.carData.pos > this.ctx.canvasSize.w - 100) {
                    //      this.carData.pos = this.ctx.canvasSize.w - 100
                    //     break
                    // }
                    break;
                case 'ArrowUp':
                    this.carData.pos.y -= 7
                    // if (this.carData.pos < this.ctx.canvasSize.w + 100) {
                    //     this.carData.pos = this.ctx.canvasSize.w + 100
                    //     break
                    // }
                    break;
                case 'ArrowDown':
                    this.carData.pos.y += 7
                    // if (this.carData.pos > this.ctx.canvasSize.w - 100) {
                    //      this.carData.pos = this.ctx.canvasSize.w - 100
                    //     break
                    // }
                    break;
            }
        }
    },

    start() {
        
        setInterval(() => {

            this.framesCounter++
            
            if (this.framesCounter % 40 === 0) {
                this.createObstacle()
                this.score++
                // console.log(this.score)
            }

            this.clearAll()
            this.drawAll()
            this.checkCollision()
            // this.setEventHandlers()
        }, 50)
    },

    clearAll() {
        
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.drawRoad()
        this.drawLaneLine()
        this.drawCar()
        this.obstacles.forEach(elm => elm.drawObstacle())
      
        
    },

    drawRoad() {
        //background
        this.ctx.fillStyle = '#3a831e'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        //road
        this.ctx.fillStyle = '#808080'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        //hard shoulder line
        this.ctx.beginPath()    
        this.ctx.setLineDash([0])
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.strokeRect(60, -15, this.canvasSize.w - 120, this.canvasSize.h + 30)
        this.ctx.closePath()
    },

    drawLaneLine() {
        
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([50, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCar() {
        
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image

    },

    drawCar() {
        this.ctx.drawImage(
            this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h
        )
    },

     createObstacle() {
        
        this.obstacles.push(
            new Obstacle(this.ctx),
            
        )
    },
     
    moveAll() {
         this.obstacles.forEach(elm => elm.move())
    },

    checkCollision() {
        
        this.obstacles.forEach(elem => {

            if (elem.obstaclePos.x < this.carData.pos.x + this.carData.size.w &&
                elem.obstaclePos.x + elem.obstacleSize.w > this.carData.pos.x &&
                elem.obstaclePos.y < this.carData.pos.y + this.carData.size.h &&
                elem.obstacleSize.h + elem.obstaclePos.y > this.carData.pos.y) { //collision detected
            // console.log('ouch!')
                clearInterval(1)
                this.drawGameOver()
                
            } 
        })
    },

    drawGameOver() {
        
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 175, this.canvasSize.w, this.canvasSize.h/2)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 200, this.canvasSize.w -100, 300)
        
        this.ctx.beginPath()    
        this.ctx.strokeStyle = 'red'
        this.ctx.setLineDash([20, 20])
        this.ctx.lineWidth = 3
        this.ctx.strokeRect(50, 200, this.canvasSize.w -100, 300)
        this.ctx.closePath()

        this.ctx.fillStyle = 'black'
        this.ctx.font = '50px arial';
        this.ctx.fillText('GAME OVER', this.canvasSize.w /2 -150, this.canvasSize.h/2 - 75);

        this.ctx.fillStyle = 'red'
        this.ctx.setLineDash([5, 2])
        this.ctx.lineWidth = 2
        this.ctx.font = '50px arial';
        this.ctx.strokeText('GAME OVER', this.canvasSize.w /2 -150, this.canvasSize.h/2 - 75);
        
        this.ctx.fillStyle = 'black'
        this.ctx.font = '25px arial';
        this.ctx.fillText('YOUR SCORE', this.canvasSize.w / 2 - 75, this.canvasSize.h / 2);       
            
        this.ctx.fillStyle = 'black'
        this.ctx.font = '80px arial';
        
        if (this.score < 10) {
            this.ctx.fillText(`0${this.score}`, this.canvasSize.w / 2 -40, this.canvasSize.h / 2 + 100);
             
        } else {
            
            this.ctx.fillText(`${this.score}`, this.canvasSize.w / 2 -40, this.canvasSize.h / 2 + 100);
        }   
    },

    setCarPosition() {

        this.carData.pos.x = 210
        if (this.carData.pos.x < 60) {
            this.carData.pos.x = 60;
        }

        this.carData.pos.y = 700 - 180
        if (this.carData.pos.x > this.canvasSize.w - 120) {
            this.carData.pos.x = this.canvasSize.w - 120;
        }  
    }
}