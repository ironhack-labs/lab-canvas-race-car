function Road(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
}

Road.prototype.draw = function() {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, 20, 600);
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(20, 0, 5, 600);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(25, 0, 5, 600);  
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(30, 0, 240, 600);   
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(270, 0, 5, 600);    
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(275, 0, 5, 600);   
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(280, 0, 20, 600);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([20, 10]);
    this.ctx.strokeStyle = 'white';
    this.ctx.moveTo(150, 0);
    this.ctx.lineTo(150, 600);
    this.ctx.stroke();
    this.ctx.closePath();
}