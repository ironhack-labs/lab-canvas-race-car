const road = {
    name: 'road',
    description: 'Canvas app fro Car Race app',
    version: '1.0.0',
    author: 'Enrique VOZA',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { w: undefined, h: undefined },
    init() {
        this.setContext()
        this.setDimensions()
        this.drawFilledSquares()
    },
    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
    },
    setDimensions() {

        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
        this.canvasDOM.setAttribute("background-color: #28a745")
    },
    drawFilledSquares() {


    },
}
