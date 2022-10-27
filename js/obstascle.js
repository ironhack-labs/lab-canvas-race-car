class obstacle{
    constructor(ctx, obstPosX, obstPosY, obstWidth, obstHeight, obstSpeed, canvasSize) {
        this.ctx = ctx
        this.obstacleSize = {
            w: obstWidth,
            h: obstHeight
        }
        this.obstaclePos = {
            x: obstPosX,
            y: obstPosY
        }
        this.obstSpeed = obstSpeed
        this.canvasSize = canvasSize
        this.init()
    }
    init() {
        
    }
    draw() {
        this.ctx.fillStyle='red'
         this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        
    }
}