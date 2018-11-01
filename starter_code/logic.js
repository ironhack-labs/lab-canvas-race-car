
function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.width = 500;
    this.height = 800;
    this.x = 0;
    this.y = 0;
}
Canvas.prototype.drawBackground = function () {
    var offset = 0;

    this.ctx.fillStyle = '#008500';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.x + 40, this.y, this.width - 80, this.height);

    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x + 50, this.y, this.width - 490, this.height);

    
    setInterval(function () {
        this.ctx.clearRect(this.width / 2-1, 0, 5, this.height);
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'grey';
        this.ctx.lineWidth = 16; //ponemos ancho muy grande para no ver los restos de la linea al repintarse
        this.ctx.setLineDash([25, 25]);
        this.ctx.lineDashOffset = -offset; //desplaza la linea discont
        offset++; 
        if (offset > 100) {
            offset = 0;
        }
        
        this.ctx.moveTo(this.width / 2, 0);
        this.ctx.lineTo(this.width / 2, this.height);
        this.ctx.stroke();
        this.ctx.closePath();


    }.bind(this), 20);


    


    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x + 440, this.y, this.width - 490, this.height);
}

