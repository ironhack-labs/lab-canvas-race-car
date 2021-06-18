const canvas = document.getElementById('canvas');

const c = canvas.getContext('2d');
let deltaX = 0;
car_image = new Image();
car_image.src = './images/car.png';
background_image = new Image();
background_image.src = './images/road.png';

// const background = {
//   x: 0,
//   y: 100,
//   h: 900,
//   w: 500,
//   draw: function(){
//     c.drawImage(background_image, this.x, this.y, this.w, this.h)
//   }
// }

// const car = {
// 	x: 200,
// 	y: 700,
// 	h: 150,
// 	w: 100,
// 	draw: function () {
// 		c.drawImage(car_image, this.x, this.y, this.w, this.h);
// 	}
// };

const background = new Background(background_image, c, 0, 100, 500, 900);
const car = new Car(car_image, c, 200, 700, 100, 150);
const obstacle = new Obstacle(
	`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}`
);

const score = {
	points: 0,
	draw: function () {
		c.font = '30px Arial';
		c.fillStyle = '#000000';
		c.fillText('Score: ' + this.points, 200, 50);
	}
};

console.log(window.location);
let obstaclesArray = [];

setInterval(function () {
	obstaclesArray.push(new Obstacle(c, Math.random() * 200, 200, 100, 25));
	score.points += 10;
	console.log(obstaclesArray);
}, 1500);

function detectCollision(rect1, rect2) {
	if (
		rect1.x < rect2.x + rect2.w &&
		rect1.x + rect1.w > rect2.x &&
		rect1.y < rect2.y + rect2.h &&
		rect1.y + rect1.h > rect2.y
	) {
		// collision detected!
		console.log('COLLISION');
		cancelAnimationFrame(gameInt);
		alert('GAME OVER');
		window.location.reload();
	}
}

let gameInt = null;

function animate() {
	gameInt = requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	score.draw();
	background.draw();
	car.draw();
	obstaclesArray.forEach((eachObstacle) => {
		eachObstacle.move();
		eachObstacle.draw();
		detectCollision(car, eachObstacle);
	});
}

document.querySelector('#start-button').onclick = () => {
	animate();
};

window.addEventListener('keydown', moveSomething, false);
function moveSomething(e) {
	switch (e.keyCode) {
		case 37:
			if (car.x > 0) {
				car.x -= 15;
			} else {
				car.x = 0;
			}
			break;
		case 39:
			if (car.x < 400) {
				car.x += 15;
			} else {
				car.x = 400;
			}
			break;
	}
}
