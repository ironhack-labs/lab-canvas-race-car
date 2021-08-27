window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		startGame();
	};
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const road = new Image();
road.src = './images/road.png';
const car = new Image();
car.src = './images/car.png';
canvas.width = 500;
canvas.height = 700;

let honda = {
	w: 25,
	h: 50,
	x: 235,
	y: 650
};

function startGame() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(car, honda.x, honda.y, honda.w, honda.h);
	requestAnimationFrame(startGame);
}

//CONTROLS
window.onkeydown = function(e) {
	console.log(e.key, honda);
	switch (e.key) {
		case 'ArrowRight':
			if (honda.x < canvas.width - honda.w) {
				honda.x += 10;
			}
			break;
		case 'ArrowLeft':
			if (honda.x > 0) {
				honda.x -= 10;
			}
			break;
		case 'ArrowUp':
			if (honda.y > 0) {
				honda.y -= 10;
			}
			break;
		case 'ArrowDown':
			if (honda.y < canvas.height - honda.h) {
				honda.y += 10;
			}
			break;
	}
};
