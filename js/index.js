const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


function init() {
	// console.log('init()')
	background()
	insertCar(car)

}


function startGame() {
	// console.log('startGame()');
	document.onkeydown = (e) => {		
		console.log('IMPORTANTE')
		switch (e.key) {
			case 'ArrowRight':
			if (car.x < (500 - car.width )){
				clear()
                car.x += 10
			    updateGameArea()
			}
			break;
			
			case 'ArrowLeft':
			if (car.x > 5){
				clear()
			    car.x -= 10
			    updateGameArea()

			}
			break;
		}
	}	
}

function goRight() {
	return true
}
function goLeft() {
	return true
}



function background() {
	// console.log('background()')
	// let ctx = game.context
	// first green rect
	ctx.fillStyle="green";
	ctx.fillRect(0, 0, 500, 700);
	// first gray rect
	ctx.fillStyle="gray";
	ctx.fillRect(50, 0, 400, 700);
	// first white rect
	ctx.fillStyle='white'
	ctx.fillRect(65, 0, 20, 700);
	
	ctx.fillStyle='white'
	ctx.fillRect(415, 0, 20, 700)

	let yInit = 0
	let yFinish = 30

	for (let i = 0; i < 100; i++){
		ctx.moveTo(245, yInit)
		ctx.lineTo(245, yFinish)
		yInit += 60
		yFinish = yInit + 30
		ctx.lineWidth = 10
		ctx.strokeStyle = 'white'
		ctx.stroke()
		

	}
}


function clear(){
	ctx.clearRect(0, 0, 500, 700);
}

// setInterval(updateGameArea,60)

const car = {
	height: 75,
	width: 150,
	x: 210,
	y: 540
}

function updateGameArea(){
	background()
	insertCar(car)

}




function insertCar(car){
	
	// console.log('insertCar()')
	let img = new Image();
	img.src = '../images/car.png';
	img.onload = () => {
	ctx.drawImage(img, car.x, car.y, car.height, car.width); 
	}
}






window.onload = () => {
	init()
	document.getElementById('start-button').onclick = () => {
	startGame();
	};
	// background()
	// function startGame() {}
	// insertCar(car)
};