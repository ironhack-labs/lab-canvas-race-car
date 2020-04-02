const app = {
    canvasDom: undefined,
    ctx: undefined,
    canvasSize:{
        width: 350,
        height: 600
    },
    
    startGame(id){
        this.canvasDom = document.getElementById(id),
        this.canvasSize.width = this.canvasSize.width,
        this.canvasSize.height = this.canvasSize.height,
        this.ctx = this.canvasDom.getContext('2d')
        this.drawRoad()
        // this.interval = setInterval( () => {
        //     this.clearScreen()
        //     console.log()
        //     this.drawRoad()
        // }
        // ,10)
        drawImage()
    }, 

    drawRoad(){
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(75, 40, this.canvasSize.width, this.canvasSize.height)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(100, 40, this.canvasSize.width = 300, this.canvasSize.height)

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 8
        this.ctx.beginPath()
        this.ctx.moveTo(390, 640)
        this.ctx.lineTo(390, 40)
        this.ctx.stroke()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 8
        this.ctx.beginPath()
        this.ctx.moveTo(110, 640)
        this.ctx.lineTo(110, 40)
        this.ctx.stroke()

        // this.ctx.strokeStyle = 'white'
        // this.ctx.lineWidth = 10
        // this.ctx.strokeRect(115, 0, 270, 700)

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 7
        this.ctx.beginPath()
        this.ctx.setLineDash([25, 20])
        this.ctx.moveTo(250, 640)
        this.ctx.lineTo(250, 40)
        this.ctx.stroke()
    },

    drawImage(name) {
        let image = new Image()
        image.src = `./images/${name}`
        image.onload = () => this.ctx.drawImage(image, 300, 500, 50, 100)
    }

    // clearScreen() {
    //     this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    // },

}
