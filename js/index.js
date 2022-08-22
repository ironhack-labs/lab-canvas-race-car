window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		startGame();
	};

	// CANVAS
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	let animateId = null;
	let canvasWidth = 500;

	// CREATING ROAD MAP
	const roadMap = () => {
		canvas.style.background = 'url(/images/road.png)';
		canvas.style.background += 'no-repeat';
	};

	// CAR OBJECT
	let carObj = {
		x: 122,
		y: 350,
		width: 35,
		height: 60
	};

	// OBSTICLE OBJECT
	let obsticle1 = {
		x: Math.random() * 180,
		y: 0,
		width: 100,
		height: 20
	};
	let obsticle2 = {
		x: Math.random() * 180,
		y: 0,
		width: 80,
		height: 20
	};

	// OBSTICLE DRAWING
	const obsticleDrawing = () => {
		// 1st Ob
		ctx.fillStyle = 'blue';
		ctx.fillRect(obsticle1.x, (obsticle1.y += 2), 100, 20);
		// 2nd Ob
		ctx.fillStyle = 'red';
		ctx.fillRect(obsticle2.x, (obsticle2.y += 3), 80, 20);

		if (obsticle1.y >= 350) {
			obsticle1.y = 0;
			obsticle1.x = Math.floor(Math.random() * 180);
		}

		if (obsticle2.y >= 350) {
			obsticle2.y = 0;
			obsticle2.x = Math.floor(Math.random() * 180);
		}
	};

	// CAR IMAGE LOADED
	let carImage = new Image();
	carImage.src = './images/car.png';

	// CREATING CAR DRAWING
	const carDrawing = () => {
		ctx.drawImage(carImage, carObj.x, carObj.y, 35, 60);
	};

	//MOVING THE CAR WITH KEYS
	document.body.onkeypress = function(e) {
		if (e.key === 'd' && carObj.x <= 220) {
			//Move right
			carObj.x += 20;
		}
		if (e.key === 'a' && carObj.x >= 42) {
			//Move left
			carObj.x -= 20;
		}
	};

	// START GAME FUNCTION
	function startGame() {
		// COUNT POINTS
		let total = 0;
		let rect1 = obsticle1;
		let rect2 = carObj;
		let rect3 = obsticle2;
		

		setInterval(function() {
			if (rect1.y + rect1.height < rect2.y || rect3.y + rect3.height < rect2.y) {
				total++;
				document.querySelector('h2').innerText = `Score : ${total}`;
			} else {
				total = 0;
				document.querySelector('h2').innerText = `Score : 0`;
			}
		}, 1000);

		// Score Board
		document.querySelector('h2').innerText = `Score : 0`;

		// EXECUTING ROAD MAP
		roadMap();

		// EXECUTING CAR DRAWING
		carDrawing();

		// ANIMATE FUNCTION
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas - flipping to a blank page

			carDrawing(); // Car Drawing
			obsticleDrawing(); // Obsticle Drawing

			animateId = window.requestAnimationFrame(animate); //Game rendering -infinite loop that goes super fast
		};
		animate();
	}
};