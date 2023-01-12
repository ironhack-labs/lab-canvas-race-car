window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		startGame();
	};

	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	function startGame() {
		let img = new Image();
		img.src = 'images/road.png';

		img.onload = () => {
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		};
	}
};
