window.onload = function() {
	document.getElementById("start-button").onclick = function() {
		startGame();
	};

	function startGame() {
		var cv = document.getElementById('myCv');
		var ctx = cv.getContext('2d');

		
		ctx.fillStyle = "#1c8100"; //dar color verde
		ctx.fillRect(0, 0, 500, 800); //posX, posY, tam W, tam Y
		ctx.fillStyle = "#808080"; //dar color 
		ctx.fillRect(30, 0, 440, 800); //posX, posY, tam X, tam Y
		ctx.clearRect(40, 0, 10, 800); //Borrar posX, posY, grosor de borrado, altura 
		ctx.clearRect(450, 0, 10, 800);
		ctx.beginPath(); //donde empieza la linea discontinua
		ctx.strokeStyle = "#ffffff"; //dar color linea discontinua
		ctx.lineWidth = 5; //grosor linea discontinua
		ctx.setLineDash([30, 30]);
		ctx.moveTo(250, 800); //donde se mueve X, Y
		ctx.lineTo(250, 30); //donde se linea X, Y
		ctx.stroke(); //Cerra linea

		var img = new Image();
		img.src = 'images/car.png'
		console.log(img);
	    img.onload = function () {
	     	ctx.drawImage(img, posX, posY, 50, 100); // X, Y, Ancho, Alto
		};
	
		function moveUp() {
		    player.speedY -= 20;
		}

		function moveDown() {
		    player.speedY += 20;
		}

		function moveLeft() {
		    player.speedX -= 20;
		}

		function moveRight() {
		    player.speedX += 20;
		}

		document.onkeydown = function(e) {
			switch (e.keyCode) {
			    case 38:
			     	moveUp();
			    break;
			    case 40:
			     	moveDown();
			    break;
			    case 37:
			     	moveLeft();
			    break;
			    case 39:
			     	moveRight();
			    break;
			}
		}		
	}


};

























