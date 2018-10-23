 window.onload = function() {	 
 	document.getElementById("start-button").onclick = function() {
 	};




var myGame = {
	canvas : document.getElementById("canvas-race"),
	start : function() {
		this.context = this.canvas.getContext("2d");
	}
}

function Component(width, height,  x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	ctx = myGame.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
}

green1 = new Component(0, 0, "green", 50, 800);