var canvas, ctx, road, key, img;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
function startGame() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  road = new Road();
  car = new Car();
  car.setCarImage();
  road.render();
  animLoop();
 }

//Game loop
function animLoop() {
  ctx.clearRect(0,0, 300, 450);
  road.render();
  ctx.drawImage(img, car.x, car.y, car.width, car.height);
  requestAnimationFrame(animLoop);
}

//Keyboard controls
key = {
  pressed: {},

  left: 37,
  right: 39,

  isDown: function(keyCode) {
    return this.pressed[keyCode];
  },

  onKeydown: function(event) {
    this.pressed[event.keyCode] = true;
    car.update();
  },

  onKeyup: function(event) {
    delete this.pressed[event.keyCode];
  }
};

window.addEventListener('keyup', function(event) { key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { key.onKeydown(event); }, false);
