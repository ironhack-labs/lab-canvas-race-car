function road(ctx){
    this.ctx = document.getElementById('canvas').getContext('2d');
}

road.prototype.draw = function(ctx){
    this.ctx.strokeRect(0, 0, 800, 330);
    this.ctx.fillStyle = "#008400";
    this.ctx.fillRect(0, 0, 330, 750);
    this.ctx.fillStyle = "#666666";
    this.ctx.fillRect(10, 0, 280, 750);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(15, 0, 7, 750);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(277, 0, 7, 750);
    this.ctx.beginPath();
    this.ctx.setLineDash([10, 20]);
    this.ctx.moveTo(150, 0);
    this.ctx.lineTo(150, 700);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
  }
