const game = new Game("canvas")
const startBtn = document.getElementById("start-button")
const sound = new Audio('/images/Sound/Benny Hill Theme Song .mp3');

window.onload = () => {
	document.getElementById("start-button").onclick = () => {
		game.start()
		sound.play()
	}
}
document.addEventListener("keydown", (event) => {
	game.car.onKeyEvent(event)
})

document.addEventListener('keyup', (event) => {
	game.car.onKeyEvent(event)
})