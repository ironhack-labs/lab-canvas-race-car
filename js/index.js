const game = new Game('canvas');
const sound = new Audio("/audio/retro-wave-style-track-59892.mp3");

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
    sound.play();
  };
};

document.addEventListener('keydown', function(event) {
	game.player.keyDownHandler(event);
});

document.addEventListener('keyup', function(event) {
	game.player.keyDownHandler(event);
});
