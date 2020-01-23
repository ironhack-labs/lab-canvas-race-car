let score = document.getElementById("score")

const raceCarGame = {
    name: 'Race Car Game',
    description: 'Car Game in HTML5 Canvas',
    author: 'Luis Alberto Peña & Nelson Cabrera',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    car: undefined,
    obstacle: [],
    count: 0,
    wSize: {
        width: 700,
        height: 900
    },
    init(id) {

        this.canvasDom = document.getElementById("myGame")
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()

        this.car = new Car(this.ctx)
        // let obs = new Obstacles(this.ctx)
        // this.obstacle.push(obs)
        // this.obstacle[0].createObstacle()

        this.mapcreate()

        this.car.createCar()
        this.setEventListeners()

        this.frecuency(50)




    },
    setDimensions() {
        this.canvasDom.width = this.wSize.width
        this.canvasDom.height = this.wSize.height
    },
    mapcreate(n) {

        this.greenBase();
        this.roadBase();
        this.sideLines();
        this.centralLine(n)


    },
    greenBase() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 700, 900)

    },

    roadBase() {
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(50, 0, 600, 900)

    },

    sideLines() {

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(70, 0, 20, 900)
        this.ctx.fillRect(610, 0, 20, 900)

    },

    centralLine(n) {


        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = "white"

        this.ctx.setLineDash([80, 40])
        this.ctx.beginPath()

        this.ctx.setLineDash([80, 40])

        this.ctx.moveTo(350, n * 10 - 500)
        this.ctx.lineTo(350, n * +900)
        this.ctx.stroke()
    },

    refresh() {


        if (this.count % 40 == 0) {

            let obj = new Obstacles(this.ctx)
            obj.createObstacle()
            this.obstacle.push(obj)
        }
        // if (this.count % 200 == 0) this.obstacle.shift()

        this.obstacle.forEach((elm) => elm.fallObstacle())
        this.ctx.clearRect(0, 0, this.wSize.width, this.wSize.height)
        this.mapcreate(this.count % 25)
        this.obstacle.forEach(elm => elm.drawObstacle())
        this.car.drawCar()
        this.Crashed()
        score.innerText = `Score: ${this.count}`

        this.count++
    },


    frecuency(f) {
        setInterval(() => {
            this.refresh()
        }, f)
    },


    setEventListeners() {
        document.onkeydown = e => {

            e.keyCode == 37 ? this.car.moveLeft() : null
            e.keyCode == 39 ? this.car.moveRight() : null
        }

        // document.addEventListener('keypress', (event) => {
        //     console.log(event)
        //     event.key == "a" ? this.car.moveLeft() : null
        //     event.key == "d" ? this.car.moveRight() : null
        // })
    }

    ,

    Crashed() {

        this.obstacle.forEach(elm => {
            if ((this.car._yPos <= elm._yPos + 40) && (this.car._xPos + 79 >= elm._xPos) && (this.car._xPos <= elm._xPos + 300) && (this.car._yPos + 169.5 >= elm._yPos)) {
                console.log(elm._xPos, elm._yPos);
                console.log(this.car._xPos, this.car._yPos)
                confirm(`seguir?\n score: ${this.count}`) ? this.obstacle = [] : window.close()

            }
        })

    }
}