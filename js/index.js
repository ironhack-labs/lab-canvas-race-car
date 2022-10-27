window.onload = () => {
	document.getElementById("start-button").onclick = () => {
		startGame();
	};

	function startGame() {
		if (!app.isGame) {
			location.reload();
		} else {
			app.init();
		}
	}
};
