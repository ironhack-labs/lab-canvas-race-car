window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    let canvas = document.getElementById("canvas")
    canvas.style.background = "url('/images/road.png')";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
  }
};


const ctx = document.getElementById('canvas').getContext('2d');
const img = new Image();
imgScale = 640/480;
img.onload = function() {
  ctx.drawImage(img, 215, 525,50*imgScale,150);
};

img.src = '/images/car.png';

const ctx2 = document.getElementById('canvas').getContext('2d');
const img2 = new Image();
imgScale = 640/480;
img2.onload = function() {
  ctx2.drawImage(img2, 0, 0,350*imgScale,600);
};
 
img2.src = '/images/road.png';