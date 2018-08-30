var roadCanvas;
var car;
var CARWIDTH = 158;
var CARHEIGHT = 319;


function RoadCanvas() {
	this.ctx = document.getElementById('roadCanvas').getContext('2d');
	this.ROADWIDTH = 840;
	this.ROADHEIGHT = 370;
}

roadCanvas = new RoadCanvas();
car = new Image();
car.src = '../starter_code/images/car.png';


RoadCanvas.prototype.drawLines = function () {
	var lineThickness = 10;
	this.ctx.setLineDash([45, 40]); /*dashes are 20px and spaces are 15px*/
	this.ctx.beginPath();
	this.ctx.moveTo((this.ROADWIDTH/2)-(lineThickness/2), 0);
	this.ctx.lineTo((this.ROADWIDTH/2)-(lineThickness/2), this.ROADHEIGHT);
	this.ctx.strokeStyle = '#FFF';
	this.ctx.lineWidth = lineThickness;
	
	this.ctx.stroke();
}

RoadCanvas.prototype.createBoard = function () {
	this.ctx.clearRect(0, 0, 560, 370);
	this.drawLines();
	car.onload = this.drawImageOnCanvas();
}

RoadCanvas.prototype.drawImageOnCanvas = function() {
	this.ctx.drawImage(car, 0, 0);
	console.log('hola');
}
