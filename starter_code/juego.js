const islandRace = {
    name: 'Drawing Map app',
    description: 'App to create the road in HTML5 Canvas',
    author: 'Juan & Andrés',
    license: undefined,
    version: '1.0',
    canvas: undefined,
    ctx: undefined,
    sizes: {
        width: 300,
        height: 470
    },

    init(id) {
        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext('2d')
        this.player = new Car(this.ctx, this.sizes.width / 2 - 30, 370, 2)
        this.obstacle = new Obstacle(this.ctx)
        this.start()
        this.setDimensions()
        this.setEventListeners()

    },
    setListeners() {

    },
    setDimensions() {
        this.canvas.width = this.sizes.width
        this.canvas.height = this.sizes.height
    },
    drawGrass() {
        this.ctx.fillStyle = '#0A4F00'
        this.ctx.fillRect(0, 0, this.sizes.width, this.sizes.height)
    },
    drawRoad() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.sizes.width - 60, this.sizes.height)
    },
    drawBorder() {
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 8
        this.ctx.strokeRect(40, -10, this.sizes.width - 80, this.sizes.height + 30)
    },

    drawLine() {
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = "white"
        this.ctx.setLineDash([20, 15])
        this.ctx.beginPath()
        this.ctx.moveTo(this.sizes.width / 2, 0, )
        this.ctx.lineTo(this.sizes.width / 2, this.sizes.height)
        this.ctx.stroke()
        this.ctx.setLineDash([0])
    },

    clearFullScreen() {
        this.ctx.clearRect(0, 0, this.sizes.width, this.sizes.height)
    },
    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode == 37 ? this.player.moveCar("left") : null
            e.keyCode == 39 ? this.player.moveCar("right") : null

        }
    },

    start() {
        // let count = 0
        setInterval(() => {
            this.clearFullScreen()
            this.drawGrass()
            this.drawRoad()
            this.drawBorder()
            this.drawLine()
            this.player.draw()
            this.obstacle.drawObstacle();
            this.obstacle.fallObstacle()
            this.player.checkColition()


            // if (count % 40 == 0) {
            //     let obj = new Obstacle(this_context)
            //     obj.createObstacle()
            //     this.obstacle.push(obj)
            // }
            // count++
        }, 1000 / 50)
    }
}