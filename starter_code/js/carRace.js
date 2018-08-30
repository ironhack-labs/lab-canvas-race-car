var race;

function Race() {

}

Race.prototype.startGame = function() {
	carCanvas.createBoard();
}

document.getElementById("start-button").onclick = function() {
	race = new Race();

	race.startGame();
};