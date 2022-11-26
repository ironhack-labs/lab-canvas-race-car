const game = new Game('canvas');
const sound = new Audio("/audio/onlymp3.to - This Life (Sons of Anarchy Theme Song) Full-Qd9ULJf2jqU-192k-1654980555263.mp3");
const policesound = new Audio ("/audio/police-6007.mp3")

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
    sound.play();
    policesound.volume = 0.03;
    policesound.play();
  };
};

document.addEventListener('keydown', function(event) {
	game.player.keyDownHandler(event);
});

document.addEventListener('keyup', function(event) {
	game.player.keyDownHandler(event);
});
