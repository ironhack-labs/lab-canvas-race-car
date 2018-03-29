	function Game(elem) {
		this.canvas = document.getElementById(elem);
		this.ctx = this.canvas.getContext('2d');
		this.width = 700;
		this.height = 900;
		this.car = new Car(this.canvas, this.ctx);
		this.road = [new Road(this.canvas, this.ctx),new Road(this.canvas, this.ctx)] ;
		this.listaObstacles = [];				
	}
	
	Game.prototype.clear = function() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};
	

	Game.prototype.start = function(){
		setInterval(function () {
			this.clear();
			this.liveRoad();
			this.car.drawCar();
			this.car.moveCar();
			this.drawObstacles();


		}.bind(this), 60
		);
		setInterval(this.addObstacle.bind(this), 10000);	

	}


Game.prototype.liveRoad = function(){

	var d=5;
	this.road[0].y += d;
	if (this.road[0].y > this.height) {
		this.road[0].y = 0;
	}
	this.road[1].y = this.road[0].y - this.height;
	this.road[0].drawRoad();
	this.road[1].drawRoad();
}

Game.prototype.addObstacle = function(){
	this.listaObstacles.push(new Obstacles(this.canvas, this.ctx));
}

Game.prototype.drawObstacles = function(){
	var e=3;

	for (var i = 0; i < this.listaObstacles.length; i++) {
		this.listaObstacles[i].y += e;
		this.listaObstacles[i].drawObs()
		
	}


	




}
	