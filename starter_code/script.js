window.onload = function() {  

  var divGame = document.getElementById("game-board");
  let canvas;

  let fondo = new Image();
  let car_image = new Image();
  let alco = new Image();
  let gameOver = false;

  fondo.src = 'images/carretera.png';
  car_image.src = 'images/car.png';
  alco.src = "images/alcoholimetro.jpg";

  function car (){
  	x = 250;
  	y = 400;
  };

  loadCanvas("game-board"); // aqui asigna canvas
  let ctx = canvas.getContext("2d");
  inicioGame(document.getElementById("canvasGame")); //dibujar las condiciones iniciales

  document.getElementById("start-button").onclick = function() {
    startGame();
    draw();
  };

  let tiempo = 0;  
  let alcoArray = [];  

  alcoArray[0] = {
  	x:48,
  	y:10
  }

  function draw(){    	

  	ctx.drawImage(fondo, 0, 0, 500, 500);
	ctx.drawImage(car_image, car.x, car.y, 50, 100);

	for(let k = 0 ; k < alcoArray.length; k ++){
		ctx.drawImage(alco, alcoArray[k].x, alcoArray[k].y, 200, 40);
		alcoArray[k].y += 1;

		// PARA GENERAR UN NUEVO ALCOHOLIMETRO CADA CIERTO TIEMPO
		if (alcoArray[k].y == canvas.height - 250 ){
			xAleatorio = Math.floor(	(Math.random() * 206) + 48	); //entre 48 y 254
			alcoArray.push({
				x:xAleatorio,
				y:10
			});
		}		

		// VERIFICANDO COLISION
		if ((car.x >= alcoArray[k].x) && (car.x <= (alcoArray[k].x + 200) )) {
			if ((alcoArray[k].y >= 400) && (alcoArray[k].y <= 500)){
				ctx.fillStyle = "red";
				ctx.font = "20px Verdana";
				ctx.fillText("Fin del juego, al torito ", 140,250);
				gameOver = true;				
			}			
		}
	}
	tiempo ++;	
	ctx.fillStyle = "#000";
	ctx.font = "20px Verdana";
	ctx.fillText("Puntos: " + tiempo, 50,50);
	if (!gameOver) requestAnimationFrame(draw);
  }

  function startGame() {  	
  	if (car.x == undefined){
		car.x = 250;
	};
	if (car.y == undefined){
		car.y = 400;
	};
  	inicioGame(canvas); //dibujar las condiciones iniciales
  	tiempo = 0;
  }

  function loadCanvas(id) {
	canvas = document.createElement('canvas');
	div = document.getElementById(id);
	canvas.id     = "canvasGame";
	canvas.width  = 500;
	canvas.height = 500;
	canvas.style.zIndex   = 8;
	canvas.style.position = "absolute";
	canvas.style.border   = "1px solid";
	div.appendChild(canvas);
  }

  function inicioGame(canvas){  	  	
	fondo.onload = function(){
	    ctx.drawImage(fondo, 0, 0, 500, 500);
	}
	car_image.onload = function(){
	    ctx.drawImage(car_image, 250, 400, 50, 100);
	}	
  }
  	document.onkeydown = function(e) {
		if (car.x == undefined){
			car.x = 250;
		};
		if (car.y == undefined){
			car.y = 400;
		};

	  console.log(e.keyCode);
	  switch (e.keyCode) {	    
	    case 37:
	      moveLeft();
	      break;
	    case 39:
	      moveRight();
	      break;
	  }
	}
	function moveLeft() {		
	    car.x -= 5;
	}

	function moveRight() {
	    car.x += 5;
	}
};
