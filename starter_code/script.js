function Obstacle(y) {
	this.y = 500 - y;
	this.x =Math.floor(Math.random()*220)+40;
	this.width = Math.floor(Math.random()*60)+20;
	this.height =20;
}

Obstacle.prototype.draw=function(ctx) {
	ctx.fillStyle="red";
	ctx.fillRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height)
}

function Car (ctx) {
	this.x = 200;
	this.y = 750;
	this.speed = 2;
	this.ctx = ctx;
}

Car.prototype.moveLeft = function() {
	this.x -= this.speed;
}
Car.prototype.moveRight = function() {
	this.x += this.speed;
}

Car.prototype.draw = function() {
	var img = new Image()
	img.src = './images/car.png'
	img.onload = () => {
		this.ctx.drawImage(img, this.x-25, this.y-50, 50, 100)
	}
}

function Board () {
	this.ctx = document.getElementById('boardgame').getContext('2d');
	this.car = new Car(this.ctx);
	this.drawBoard();
	this.car.draw();
	this.obstacles = [];
	for (var i = 0; i<100; i++) {
		var obstacle = new Obstacle(i*120);
		this.obstacles.push(obstacle)
		obstacle.draw(this.ctx);
	}
	setInterval(()=>{
		this.obstacles.forEach((obs) => {
			obs.y += 6;
		});
		this.updateCanvas();
	},100)
}

Board.prototype.updateCanvas = function () {
	this.drawBoard();
	this.car.draw();
	this.obstacles.forEach((obs) => { obs.draw(this.ctx); })
}
Board.prototype.drawBoard = function() {
	this.ctx.clearRect(0,0, 400, 800);
  	this.ctx.fillStyle ="green";
  	this.ctx.fillRect(0,0, 40,800);
  	this.ctx.fillStyle ="green";
  	this.ctx.fillRect(400-40,0, 40,800);
  	this.ctx.fillStyle ="gray";
  	this.ctx.fillRect(40,0, 10,800);
  	this.ctx.fillStyle ="gray";
  	this.ctx.fillRect(400-40-10,0, 10,800);
  	this.ctx.fillStyle ="gray";
  	this.ctx.fillRect(40+10+10,0, 400 - 2*(40+10+10),800);
  	this.ctx.strokeStyle ="white";
  	this.ctx.setLineDash([10,4]);
  	this.ctx.moveTo(200, 0);
  	this.ctx.lineTo(200, 800);
  	this.ctx.stroke();
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
  	var myBoard = new Board();
	document.onkeydown = function(e) {
	  switch (e.keyCode) {
	    case 37: myBoard.car.moveLeft(); break;
	    case 39: myBoard.car.moveRight(); break;
	  }
	  // myBoard.updateCanvas();
	}  	
  }
};
