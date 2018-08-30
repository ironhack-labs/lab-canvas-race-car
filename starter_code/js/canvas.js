var carCanvas;

function CarCanvas() {
	this.ctx = document.getElementById('carCanvas').getContext('2d');
}

carCanvas = new CarCanvas();

CarCanvas.prototype.drawLines = function () {
	this.ctx.setLineDash([20, 15]); /*dashes are 20px and spaces are 15px*/
	this.ctx.beginPath();
	this.ctx.moveTo(115, 0);
	this.ctx.lineTo(115, 450);
	this.ctx.strokeStyle = '#FFF';
	this.ctx.lineWidth = 3;
	this.ctx.stroke();
}

CarCanvas.prototype.createBoard = function () {
	this.ctx.clearRect(0, 0, 230, 450);
	this.drawLines();
}

