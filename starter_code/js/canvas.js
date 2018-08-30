var roadCanvas;
var car;

function RoadCanvas() {
	this.ctx = document.getElementById('roadCanvas').getContext('2d');
	this.ROADWIDTH = 840;
	this.ROADHEIGHT = 370;
}

roadCanvas = new RoadCanvas();

car = new Image();
car.src = '../starter_code/images/car.png';
car.width = 158 * 0.5;
car.height = 319 * 0.5;

RoadCanvas.prototype.drawLines = function () {
	var lineThickness = 10;

	this.ctx.setLineDash([45, 40]); /*dashes are 20px and spaces are 15px*/
	this.ctx.beginPath();
	this.ctx.moveTo((this.ROADWIDTH / 2) - (lineThickness / 2) + 5, 0);
	this.ctx.lineTo((this.ROADWIDTH / 2) - (lineThickness / 2) + 5, this.ROADHEIGHT);
	this.ctx.strokeStyle = '#FFF';
	this.ctx.lineWidth = lineThickness;
	this.ctx.stroke();
}

RoadCanvas.prototype.createBoard = function () {
	this.ctx.clearRect(0, 0, this.ROADWIDTH, this.ROADHEIGHT);
	this.drawLines();
	car.onload = this.drawImageOnCanvas();
}

RoadCanvas.prototype.drawImageOnCanvas = function () {
	var posX = (this.ROADWIDTH / 2) - (car.width / 2);
	var posY = (this.ROADHEIGHT) - (car.height);

	this.ctx.drawImage(car, posX, posY, car.width, car.height);
}