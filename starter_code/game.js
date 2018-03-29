	function Game(elem) {
		this.canvas = document.getElementById(elem);
		this.ctx = this.canvas.getContext('2d');
		this.width = 700;
		this.height = 900;
		this.car = new Car(this.canvas, this.ctx);
		this.road = [new Road(this.canvas, this.ctx),new Road(this.canvas, this.ctx)] ;
		this.obstacles = new Obstacles(this.canvas, this.ctx);				
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


		}.bind(this), 10
		);


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

Game.prototype.liveObstacles = function(){
	var e=3;

	if () {
		
	}

	this.obstacles.drawObstacules();




}
	