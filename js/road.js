class Road {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    draw(){
        let img = new Image()
        img.src = "/images/road.png"
        this.ctx.drawImage(img,0,0,500,700);
        //console.log("RoadDraw")
       }
}