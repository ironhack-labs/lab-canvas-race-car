class background {
    constructor(ctx) {
        this.ctx = ctx

    }
       
    createBackground() {

        
     this.ctx.fillStyle = "#006400";
     this.ctx.fillRect(0, 0, 70, 750);
     this.ctx.stroke();

     this.ctx.fillStyle = "#006400";
     this.ctx.fillRect(430, 0, 70, 750);
     this.ctx.stroke();

     this.ctx.fillStyle = "#FFFFFF";
     this.ctx.fillRect(70, 0, 30, 750);
     this.ctx.stroke();

     this.ctx.fillStyle = "#FFFFFF";
     this.ctx.fillRect(400, 0, 30, 750);
     this.ctx.stroke();

     this.ctx.fillStyle = "#FFFFFF";
     this.ctx.fillRect(250, 0, 30, 750);
     this.ctx.setLineDash([5, 15]);
     this.ctx.stroke();
    }


}