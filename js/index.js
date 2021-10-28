const green = '#018100'
const grey = '#808080'
const white = '#FFFFFF'
const red = '#f56342'
const canvaswidth = 500
const canvasHeight = 700
//////////
const raceCarApp = {
	name: 'Race Car app',
	author: 'Rasul',
	canvasDOM: document.querySelector('#canvas'),
	ctx: undefined,
	canvasSize: { width: 500, height: 700 },
	carX: 110,
	carImage: undefined,

	init() {
		this.AddListeners()
		this.carImage = new Image()
		this.src = '../images/car.png'
		this.canvasSize.width = 500
		this.canvasSize.height = 700
		this.ctx = this.canvasDOM.getContext('2d')
		this.carImage = new Image()
		this.carImage.src = '../images/car.png'
		setInterval(() => {
			this.draw()
		}, 1)
	},
	draw() {
		this.ctx.clearRect(0, 0, canvaswidth, canvasHeight)
		this.paintBoard()
		this.paintCar()
		this.printObstacle()
	},
	paintBoard() {
		let ctx = this.ctx
		printRec(ctx, 0, 0, canvaswidth, canvasHeight, green)
		printRec(ctx, 20, 0, canvaswidth - 40, canvasHeight, grey)
		printRec(ctx, 30, 0, 10, canvasHeight, white)
		printRec(ctx, canvaswidth - 40, 0, 10, canvasHeight, white)
		drawDashes(ctx)
	},
	paintCar() {
		let ctx = this.ctx
		ctx.drawImage(this.carImage, this.carX, canvasHeight - 110, 50, 100)
	},
	printObstacle() {
		printRec(this.ctx, 40, 0, 100, 40, red)
	},
	AddListeners() {
		document.addEventListener('keydown', movehandler.bind(this))

		function movehandler(e) {
			console.log('moving ..', e.code)
			switch (e.code) {
				case 'ArrowLeft':
					if (this.carX > 37) this.carX -= 4
					console.log(this.carX)
					break
				case 'ArrowRight':
					if (this.carX < 414) this.carX += 4
					console.log(this.carX)
					break
			}
		}
	},
}
window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		console.log('pulsando start')
		raceCarApp.init()
	}
}
//Aux :
function printRec(ctx, x, y, width, height, color) {
	ctx.fillStyle = color
	ctx.fillRect(x, y, width, height)
}
function drawDashes(ctx, offset) {
	ctx.beginPath()
	ctx.strokeStyle = white
	ctx.lineWidth = 6
	ctx.setLineDash([20, 25])
	ctx.moveTo(canvaswidth / 2, 0)
	ctx.lineTo(canvaswidth / 2, canvasHeight)
	ctx.stroke()
}
