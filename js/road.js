class Road {

    constructor(ctx) {
        this.ctx = ctx

        this.w = ctx.canvas.width
        this.h = ctx.canvas.height

        this.y = 0
        this.vy = 5
    }

    draw() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, this.y, this.w, this.h)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40,  this.y, this.w - 80, this.h)

        this.ctx.setLineDash([0, 0])
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 6
        this.ctx.beginPath()
        this.ctx.moveTo(50,  this.y)
        this.ctx.lineTo(50, this.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(this.w - 50,  this.y)
        this.ctx.lineTo(this.w - 50, this.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.setLineDash([25, 30])
        this.ctx.beginPath()
        this.ctx.moveTo(this.w / 2,  this.y)
        this.ctx.lineTo(this.w / 2, this.h)
        this.ctx.stroke()
        this.ctx.closePath()

        //top road
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, this.y - this.h, this.w, this.h)

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, this.y - this.h, this.w - 80, this.h)
        
        this.ctx.setLineDash([0, 0])
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 6
        this.ctx.beginPath()
        this.ctx.moveTo(50, this.y - this.h)
        this.ctx.lineTo(50, this.y)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(this.w - 50, this.y - this.h)
        this.ctx.lineTo(this.w - 50, this.y)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.setLineDash([25, 30])
        this.ctx.beginPath()
        this.ctx.moveTo(this.w / 2, this.y - this.h)
        this.ctx.lineTo(this.w / 2, this.y)
        this.ctx.stroke()
        this.ctx.closePath()

        this._move()
    }

    _move() {
        this.y += this.vy
        if (this.y >= this.h) {
            this.y = 0
        }
    }
}