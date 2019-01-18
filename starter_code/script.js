window.onload = function() {
	console.log('test');
	document.getElementById('start-button').onclick = function() {
		startGame();
	};

	function startGame() {
		game.drawbackgruond();
	}

	var game = new Game();

	function Game() {
		this.canvasDOM = document.querySelector('#canvasCar');
		this.ctx = this.canvasDOM.getContext('2d');
		this.width = this.canvasDOM.width;
		this.height = this.canvasDOM.height;
		this.img = new Image();
		this.img.src = 'images/car.png';
	}

	Game.prototype.drawbackgruond = function() {
		this.ctx.fillStyle = '#008200';
		this.ctx.fillRect(0, 0, this.width, this.height);
		this.ctx.fillStyle = '#6E6E6E';
		this.ctx.fillRect(50, 0, 500, this.height);
		this.ctx.fillStyle = '#FFFFFF';
		this.ctx.fillRect(70, 0, 5, this.height);
		this.ctx.fillStyle = '#FFFFFF';
		this.ctx.fillRect(525, 0, 5, this.height);
		this.ctx.strokeStyle = '#FFFFFF';
		this.ctx.lineWidth = 5;
		this.ctx.setLineDash([30, 30 ]);
		this.ctx.moveTo(300, 0);
		this.ctx.lineTo(300, 1000);
		this.ctx.stroke();
		


		this.ctx.drawImage(this.img, 200, 500);
	};
	Image.prototype.drawImage = function() {};
};

function Game() {
	
}
