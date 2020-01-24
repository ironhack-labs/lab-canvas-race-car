const gameRD = {
    name: "Island Racer",
    descripcion: "Racing simulator",
    author: "pepi",
    license: undefined,
    version: 1.0,
    canvasDom: undefined,
    ctx: undefined,
    car: undefined,
    block: [],

    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext(`2d`)
        console.log(this.canvasDom)
        this.canvasDom.width = 400
        this.canvasDom.height = 900


    },

    drawBackground() {
        this.ctx.fillStyle = "#808080";
        this.ctx.fillRect(25, 0, 350, 900);
        this.ctx.fillStyle = "#FFFFFF"
        this.ctx.fillRect(35, 0, 15, 900)
        this.ctx.fillRect(350, 0, 15, 900)


    },
    drawMovingCar() {
        this.car = new Car(this.ctx, 175, 750)
        this.car.init()
        // setInterval(() => {
        //     this.car.clear()
        //     this.drawBackground()
        //     this.car.draw()
        // }, 1)
    },

    drawBlocks() {

        //     console.log("voy loco")
        //     this.block.forEach(element => {
        //     element.blockDown(element)

        this.block.forEach(element => {
            element.clear()
            element.blockDown()

        });

    },

    setEventListeners() {
        document.addEventListener("keydown", (e) => {
            e.keyCode == 37 ? this.car.moveLeft() : null
            e.keyCode == 39 ? this.car.moveRight() : null
        })
    },

    setIntervals() {
        let i = 0

        setInterval(() => {
            this.block.push(new obj(this.ctx, this.car))
            this.block[i].init()
            i++
            console.log(this.block)
        }, 2000)

        setInterval(() => {
            this.car.clear()
            this.drawBackground()
            this.car.draw()
            this.drawBlocks()

        }, 10)
    }





}