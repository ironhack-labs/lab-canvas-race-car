
var race;

function GameRace() {
	this.keys = {
		LEFT: 37,
		RIGHT: 39
	}
}

GameRace.prototype.startGame = function () {
	roadCanvas.createBoard();
}

GameRace.prototype.checkKeyCode = function(event) {
	var code = event.keyCode;
	console.log('CODE', code);
	return code;
	//if 'code' is 37 car.moveToLeft
	//else if 'code' is 39 car.moveToRight
}


// START
function init(){
	document.getElementById("start-button").onclick = function () {
		race = new GameRace();
		race.startGame();
	};

	document.addEventListener('keydown', function(){});

	document.onkeydown = function(e){
		race.checkKeyCode(e);
	}
}