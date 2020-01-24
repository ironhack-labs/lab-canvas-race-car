const islandRacer = {
    name: 'Island Racer',
    description: 'Driving minigame',
    author: ['Arnoldo', 'Sara', 'Roberto'],
    license: undefined,
    version: 'beta',
    canvasDom: undefined,
    ctx: undefined,
    obs: undefined,
    obsArr: [],
    fpsCounter: 0,
    wSize: {
        width: 400,
        height: 500,
    },
    refresh: 0,

    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.canvasDom.width = this.wSize.width
        this.canvasDom.height = this.wSize.height
        this.setEventListeners()

        //Coche
        this.car = new Car(this.ctx, this.wSize.width)
        this.car.init()

        //Obstáculos
        this.obs = new Obs(this.ctx, 50)

    },

    startGame() {
        this.refresh = setInterval(() => {

            if (this.fpsCounter % 100 === 0) {
                // Crea obscátulo
                this.newObstacle()
            }

            this.drawBackground()
            this.drawRoad()
            this.drawLines(50)
            this.drawLines(350)
            this.drawDashedLine()
            this.car.drawCar()
            this.obsArr.forEach(elm => {
                elm.drawObs()
                elm.moveObs()
                this.checkCollision(elm)
            })

            this.fpsCounter++

        }, 10)



    },

    drawLinearRectangle() {
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'blue'
        this.ctx.strokeRect(this.wSize.width / 2 - 250, this.wSize.height / 2 - 250, 500, 500)
    },

    drawBackground() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.wSize.width, this.wSize.height)
    },

    drawRoad() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.wSize.width - 60, this.wSize.height)
    },

    drawLines(position) {
        this.ctx.lineWidth = 7
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(position, 0)
        this.ctx.lineTo(position, this.wSize.height)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawDashedLine() {
        let velDashedLine = -60
        this.ctx.lineWidth = 7
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([30, 30])
        this.ctx.beginPath()
        this.ctx.moveTo(this.wSize.width / 2, velDashedLine)
        this.ctx.lineTo(this.wSize.width / 2, this.wSize.height + 100)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.setLineDash([0, 0])
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode == 37 ? this.car.move('left') : null
            e.keyCode == 39 ? this.car.move('right') : null
        }
    },

    newObstacle() {
        let posX = Math.floor(Math.random() * (270 - 30) + 30)
        let newObject = new Obs(this.ctx, posX)
        this.obsArr.push(newObject)
    },

    checkCollision(elm) {

        let carX = this.car._posX
        let carX2 = this.car._posX + 58
        let carY = this.car._posY

        let obsX = elm._oPosX
        let obsX2 = elm._oPosX + 100
        let obsY = elm._oPosY + this.obs._oHeight

        if (obsX2 >= carX && carX2 >= obsX && carY == obsY) {
            clearInterval(this.refresh)
            alert("ESTAS MUERTOOOOO")

        }

    }

}