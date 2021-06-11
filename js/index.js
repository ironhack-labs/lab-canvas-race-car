window.onload = () => {

	//We create the canvas and its context
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');

	//We create instances of the classes we want to paint in the canvas 
	//using the information we decided on their constructors 
	const background = new Background(ctx);
	const car = new Car(ctx, canvas.width / 2 - 25, canvas.height - 110);

	//This is where the game logic happens
	function startGame() {

		//TODO - We have to create a loop

		//Check if the game is working with a console log
		console.log('Game Started');

		//1- Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		//2- paint the objects
		background.draw();
		car.draw();

		//3- check and update score, position or number of elements and restart from part 1

	}

	
	//Start the game when we click on the start button
	document.getElementById('start-button').onclick = () => {
		startGame();
	};


};
