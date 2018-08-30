var race;

function GameRace() {

}

GameRace.prototype.startGame = function() {
	roadCanvas.createBoard();
}

document.getElementById("start-button").onclick = function() {
	race = new GameRace();

	race.startGame();
};