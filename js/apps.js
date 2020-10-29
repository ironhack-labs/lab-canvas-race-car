const drawingApp = {
    name: 'Drawing app',
    description: 'Canvas app for basic shapes drawing',
    version: '1.0.0',
    license: undefined,
    author: 'Patricia Muñoz',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    car: undefined,
    keys: {
        left: 37,
        right: 39
    },
    frames: 0,
    obstacles: [],
    

    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.createCar()
        this.drawRoad()
        this.setEventListener()
    },

    setDimensions() {
        this.canvasSize.w = this.canvasTag.width
        this.canvasSize.h = this.canvasTag.height
    },

    createCar() {
        this.car = new Car(this.ctx, this.canvasSize.w / 2 - 25, this.canvasSize.h - 130, 100, 50, "car.png", this.canvasSize)
    },
    
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(50, 0, 10, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w - 60, 0, 10, this.canvasSize.h)

        // v  This is a dashed line  v
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 20])      // Dash generator
        this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
        this.ctx.stroke()
    },

    setEventListener() {
        document.onkeydown = evt => {
            evt.keyCode === this.keys.left ? this.car.move('left') : null
            evt.keyCode === this.keys.right ? this.car.move('right') : null
        }
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    createObstacles() {
        //constructor(ctx, obsPosX, obsPosY, obsHeight, obsWidth, canvasSize, speed, color)
        const obs1 = new Obstacle(this.ctx, 100, 0, 30, 200, this.canvasSize, 4, 'black')
        const obs2 = new Obstacle(this.ctx, 230, 0, 30, 180, this.canvasSize, 6, 'brown')
        const obs3 = new Obstacle(this.ctx, 370, 0, 30, 80, this.canvasSize, 8, 'blue')
        this.obstacles.push(obs1, obs2, obs3)
    },

    drawAll() {
        setInterval(() => {
            this.frames++
            this.frames % 50 === 0 ? this.createObstacles() : null
            this.clearScreen()
            this.drawRoad()
            this.car.draw()
            this.colisioning()
            this.obstacles.forEach(elm => elm.draw())
        }, 70)
        
    },

    colisioning() {
        this.obstacles.forEach(elm => {
            if (this.car.carPos.x < elm.obsPos.x + elm.obsSize.w && this.car.carPos.x + this.car.carSize.w > elm.obsPos.x && this.car.carPos.y < elm.obsPos.y + elm.obsSize.h && this.car.carSize.h + this.car.carPos.y > elm.obsPos.y) {
                console.log('Game over! Te has estrellado!')

                //alert('Game over! Te has estrellado!')
                //docuent.location.reload()
            }
        })

    }

}



class Car {
    constructor(ctx, carPosX, carPosY, carHeight, carWidth, carImage, canvasSize) {
        this.ctx = ctx
        this.carPos = {
            x: carPosX,
            y: carPosY
        }
        this.carSize = {
            w: carWidth,
            h: carHeight
        }
        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.imgName = carImage
        this.carInstance = undefined
        this.init()
    }
    
    init() {
        this.carInstance = new Image()
        this.carInstance.src = `images/${this.imgName}`
    }

    draw() {
        this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
    
    move(dir) {
        if (this.carPos.x > 50 && (this.carPos.x + this.carSize.w) < this.canvasSize.w - 50) {
            dir === 'left' ? this.carPos.x -= 20 : null
            dir === 'right' ? this.carPos.x += 20 : null
        } else if (this.carPos.x <= 50) {
            dir === 'left' ? console.log(`Can't leave the road!`) : null
            dir === 'right' ? this.carPos.x += 20 : null
        } else if ((this.carPos.x + this.carSize.w) >= this.canvasSize.w - 50) {
            dir === 'left' ? this.carPos.x -= 20 : null
            dir === 'right' ? console.log(`Can't leave the road!`) : null
        }
        
    }

}

class Obstacle {
    constructor(ctx, obsPosX, obsPosY, obsHeight, obsWidth, canvasSize, speed, color) {
        this.ctx = ctx
        this.obsPos = {
            x: obsPosX,
            y: obsPosY
        }
        this.obsSize = {
            w: obsWidth,
            h: obsHeight
        }
        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.speed = speed
        this.color = color
        this.draw()
    }

    draw() {
        this.move()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.obsPos.x, this.obsPos.y, this.obsSize.w, this.obsSize.h)
    }

    move() {
        this.obsPos.y += this.speed
    }

}