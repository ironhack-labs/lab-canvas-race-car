window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  	var canvas = document.getElementById('game-board');
  	var ctx = canvas.getContext('2d');
  	canvas.width = 400;
  	canvas.height = 600;

  	


  	var x = 174;
	var y = 300;
	var img =  new Image();
	img.src = 'images/car.png';
	img.onload = function() {
		draw();
	} 
	function draw() {

		ctx.fillStyle = "#00a035";
	  	ctx.fillRect(0,0,canvas.width,canvas.height);

	  	//Pintar la carretera
	  	ctx.fillStyle = "#808080";
	  	ctx.fillRect(20,0,360,canvas.height);

	  	//Pintar las líneas de la carretera
	  	ctx.fillStyle = "#fff";
	  	ctx.fillRect(40,0,10,canvas.height);
	  	ctx.fillRect(350,0,10,canvas.height);

	  	ctx.fillRect(195,25,10,60);
	  	ctx.fillRect(195,125,10,60);
	  	ctx.fillRect(195,225,10,60);
	  	ctx.fillRect(195,325,10,60);
	  	ctx.fillRect(195,425,10,60);
	  	ctx.fillRect(195,525,10,60);
		
		ctx.drawImage(img,x,y,img.width/3,img.height/3);
		//Pintar el pasto
	  	
	}
	function goRight() {
		x += 5;
	}
	function goLeft() {
		x -= 5;
	}

  	addEventListener('keydown',function(e) {

  		if(e.keyCode === 37) {
  			ctx.clearRect(x,y,canvas.width,canvas.height);
  			goLeft();
  		}

  		if(e.keyCode === 39) {
  			ctx.clearRect(x,y,canvas.width,canvas.height);
  			goRight();
  		}


  	});

  	function update() {
	  ctx.clearRect(0,0,canvas.width,canvas.height);
	 
	  draw();
	}

	var interval = setInterval(function() {
	  update();
	}, 1000/60);



  }
};
