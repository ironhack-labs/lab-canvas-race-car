window.onload = function() {  

  var divGame = document.getElementById("game-board");
  let canvas;

  let fondo = new Image();
  let car_image = new Image();
  let alco = new Image();

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

  let alcoAbajo = 10;
  let alcoAbajo2 = 10;
  let alcoAbajo3 = 10;
  function draw(){  	

  	console.log(alcoAbajo);
  	console.log(alcoAbajo2);
  	console.log(alcoAbajo3);

  	ctx.drawImage(fondo, 0, 0, 500, 500);
	ctx.drawImage(car_image, car.x, car.y, 50, 100);

	// for(let k = 0 ; k <= alcoY.length) working on the random
	// I need to work on the collision, but first I need to save all the obstacles

	if (tiempo>0){
		ctx.drawImage(alco, 10, alcoAbajo, 200, 40);	
		alcoAbajo += 1;	
	}			

	if (tiempo>200){
		ctx.drawImage(alco, 140, alcoAbajo2, 200, 40);
		alcoAbajo2 += 1;
	}		

	if (tiempo>600){
		ctx.drawImage(alco, 140, alcoAbajo3, 200, 40);
		alcoAbajo3 += 1;
	}		

	tiempo ++;

	if (tiempo > 1200) {
		tiempo = 0;
		alcoAbajo = 10;
		alcoAbajo2 = 10;
		alcoAbajo3 = 10;
	}
	requestAnimationFrame(draw);
  }

  function startGame() {  	
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
  	console.log(ctx);	  	
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
	// document.onkeyup = function(e) {
	//   stopMove();
	// }

	// function stopMove() {
	//     car.x = 0;
	//     car.y = 0;
	// }	

	function moveLeft() {		
	    car.x -= 5;
	}

	function moveRight() {
	    car.x += 5;
	}

};
