const carApp = {
    name: 'Car App',
    description: '',
    author: 'Bárbara Díaz',
    version: '1.0.0',
    license: undefined,
    canvasDom: undefined,
    /** @type {CanvasRenderingContext2D} */
    ctx: undefined,
    canvasSize: undefined,

    init(id) {
        this.canvasDom = document.getElementById(`${id}`)
        this.ctx = this.canvasDom.getContext('2d')
            // const seeDOM = this.canvasDom
            // console.log(this.canvasDom.width)
        this.setDimensions()
        setInterval(() => {
            this.setBackgroundImg('road.png')
        }, 500)
    },

    setDimensions() {
        this.canvasSize = {
            w: this.canvasDom.width,
            h: this.canvasDom.height,
        }
    },

    setBackgroundImg(imgName) {
        let imageInstance = new Image()
        imageInstance.src = `images/${imgName}`
        this.ctx.drawImage(imageInstance, 0, 0, this.canvasSize.w, this.canvasSize.h)
    }

}