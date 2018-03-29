	function Game(elem) {
		this.canvas = document.getElementById(elem);
		this.ctx = this.canvas.getContext('2d');
		this.width = 700;
		this.height = 900;
		this.car = new Car(this.canvas, this.ctx);
		this.road = new Road(this.canvas, this.ctx);
		//this.obstacles = new Obstacles(this.canvas, this.ctx);				
	}
	
	Game.prototype.clear = function() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};
	

	Game.prototype.start = function(){
		setInterval(function () {
			this.clear();
			this.road.drawRoad();
			this.car.drawCar();
			this.car.moveCar();
		}.bind(this), 10
		);
	}


	