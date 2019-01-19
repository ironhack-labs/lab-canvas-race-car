class GameArea {
    constructor(){
      this.canvas = document.createElement("canvas");
      this.canvas.width = 400;
      this.canvas.height = 700;
      this.ctx = this.canvas.getContext("2d");
      this.frames = 0;
      this.points = 0;
      this.linestart = -this.canvas.height;
    }
    start() {
      document.querySelector("#game-board").appendChild(this.canvas);
      this.frames = 0;
      this.points = 0;
      myObstacles = [];
    }
    drawRoad() {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, 30, this.canvas.height);
      this.ctx.fillRect(this.canvas.width - 30, 0, 30, this.canvas.height);
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(30, 0, 10, this.canvas.height);
      this.ctx.fillRect(this.canvas.width - 40, 0, 10, this.canvas.height);
      this.ctx.fillRect(50, 0, 300, this.canvas.height);
      this.ctx.lineWidth = 3;
      this.ctx.setLineDash([15, 15]);
      this.ctx.beginPath();
      this.ctx.moveTo(this.canvas.width / 2, this.linestart);
      this.ctx.lineTo(this.canvas.width / 2, this.canvas.height*2);
      this.ctx.strokeStyle = "white";
      this.ctx.stroke();
    }
    updateRoad() {
        this.linestart += 3;
        if(this.linestart > 0) {
            this.linestart = -this.canvas.height
        }
    }
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    score() {
      this.points = (Math.floor(this.frames/5));
      this.ctx.font = "18px serif";
      this.ctx.fillStyle = "black";
      this.ctx.fillText('Score: '+this.points, 100, 100);
    }
};
  