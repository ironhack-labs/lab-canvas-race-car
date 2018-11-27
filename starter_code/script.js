

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame(); 
  };
var canvas;
var ctx ;
var car = {
	x:215,
	y:490,
	moveLeft:  function() { this.x -= 25 },
	moveRight: function() { this.x += 25 },
	frames: 0,
};

var myObstacles = [];

function startGame() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext('2d');
	draw(car);
	board();
};
document.onkeydown = function(e) {
	switch (e.keyCode) {
	  case 37: car.moveLeft();
	  if (car.x < 45) {
	    car.x = 45;
	  }
	  break;
	  case 39: car.moveRight();  
	  if (car.x > 390) {
	    car.x = 390;
	  }
	  break;
	}
	updateCanvas();
}
function draw(car) {
    var img = new Image();
    img.onload = function () {
      ctx.drawImage(img, car.x, car.y, 70, 110);
    }
    img.src = 'images/car.png';
}

function board() {
	ctx.fillStyle = "grey";ctx.fillRect(0, 0, 500, 600);
	ctx.fillStyle = "green";ctx.fillRect(0, 0, 25, 600);ctx.fillRect(475, 0, 25, 600);
	ctx.fillStyle = "white";ctx.fillRect(35, 0, 10, 600); ctx.fillRect(455, 0, 10, 600);
	ctx.strokeStyle = "white";
	ctx.setLineDash([60, 60]);
	ctx.beginPath();
	ctx.moveTo(250, 0);
	ctx.lineTo(250, 600);
	ctx.stroke();
}
   function updateCanvas() {
    ctx.clearRect(0, 0, 500, 600);
    board();
    draw(car);
    myGame(); 
  }
   function myGame() {
    car.frames += 20;
    if(car.frames % 120 === 0) {
     	x = canvas.width;
      	minHeight = 20;
	    maxHeight = 200;
	    height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
	    minGap = 50;
	    maxGap = 200;
	    gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
	    myObstacles.push(new component(10, height, "green", x, 0));
	    myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
  }
};
