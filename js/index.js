window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		startGame();
	};

	function startGame() {
		alert('hello');
		const canvas = document.getElementById('canvas');
		const img = canvas.getContext('2d');

		//creating the image of the road
		const backGroundImage = new Image();
		backGroundImage.src = '../images/road.png';
		this.img.drawImage(backGroundImage, 0, 0, canvas.width, canvas.height);
	}
};
