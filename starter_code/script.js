window.onload = function() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var carPlay = new car(50,70,150,400,"images/car.png");

	var interval = undefined;
	var myObstacles = [];
	var frames = 0; 

	document.getElementById("start-button").onclick = function() {
		startGame();
	};	

	function startGame() {		
		drawRace();		
		interval = setInterval(updateCanvas,1000/60);
	}

	function drawRace(){
		ctx.clearRect(0,0,350,500);
		ctx.fillStyle = 'green';
		ctx.fillRect(0,0,33,500);
		ctx.fillStyle = 'gray';
		ctx.fillRect(33,0,7,500);
		ctx.fillStyle = 'white';
		ctx.fillRect(40,0,8,500);
		ctx.fillStyle = 'gray';
		ctx.fillRect(48,0,250,500);
		ctx.fillStyle = 'white';
		ctx.fillRect(298,0,8,500);
		ctx.fillStyle = 'gray';
		ctx.fillRect(306,0,7,500);
		ctx.fillStyle = 'green';
		ctx.fillRect(313,0,33,500);
		ctx.beginPath();
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 3;
		ctx.setLineDash([20, 10]);
		ctx.moveTo(173, 10);
		ctx.lineTo(173, 500);		
		ctx.stroke();
	}

	function car(width, height, x, y, src) {
	    this.width = width;
	    this.height = height;
	    this.x = x;
	    this.y = y;
	    this.speedX = 0;
	    this.speedY = 0;
	    this.image = new Image();
	    this.image.src = src;
	    this.update = function(){	
		    ctx.drawImage(this.image, x, y, width, height); 
    	}
    	this.newPos = function() {
	        this.x += this.speedX;
	        this.y += this.speedY;
    	}
	}

	function component(width, height, color, x, y) {
	    this.width = width;
	    this.height = height;
	    this.x = x;
	    this.y = y;
	    this.speedX = 0;
	    this.speedY = 0;
	    this.update = function(){	  	    	  
		    ctx.fillStyle = color;
		    ctx.fillRect(this.x, this.y, this.width, this.height);
    	}
	}

	function generateObstacles(){				
		frames += 1;
		if (frames % 120 === 0) {
		  x = 48;
		  minWidth = 50;
		  maxWidth = 150;
		  width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
		  minGap = 50;
		  maxGap = 100;
		  gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
		  myObstacles.push(new component(width,20, "green", x, 0));
		  myObstacles.push(new component(248 - (width + gap),20,"green", x + width + gap,0));		      
		}
		drawObstacles();		    
	}

	function drawObstacles(){
		myObstacles.forEach(function(ele){
			ele.y += 1;
			ele.update();
		});
	}

	function updateCanvas(){
		drawRace();
		generateObstacles();
		carPlay.update();
	}

	document.onkeydown = function(e) {
	  	switch (e.keyCode) {
		    case 37:
		      moveLeft();
		      carPlay.newPos();
	          break;
		    case 39:
		      moveRight();
			  carPlay.newPos();
		      break;
	 	}	  
	}
  	function moveLeft(){
  		carPlay.speedX -= 1;
  	}
  	function moveRight(){
  		carPlay.speedX +=1;
  	}
};
