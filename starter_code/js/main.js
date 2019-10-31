const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');

const HEIGHT = 600;
const WIDTH = 400;
const CENTER = 200;

const track = new Track;
const car = new Car;

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

};


function startGame() {
  track.drawTrack();
  car.drawCar();
}

