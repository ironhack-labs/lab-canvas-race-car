const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// const road = {
//   img: null,
//   x: 0,
//   y: 0,
//   width: 0,
//   height: 0,
//   initiate: function() {
//     this.img = new Image();
//     this.img.src = '/images/road.png';
//     this.img.onload = this.mostrar;
//     this.width = canvas.width;
//     this.height = canvas.height;
//   },
//   mostrar: function() {
//     context.drawImage(this.img, this.x, this.y, this.width, this.height);
//   }
// }

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const road = new Image();
    road.src = './images/road.png';
    road.addEventListener('load', () => {
      context.drawImage(road, 0, 0, canvas.width, canvas.height);
    });
    const car = new Image();
    car.src = './images/car.png';
    car.addEventListener('load', () => {
      context.drawImage(car, canvas.width/2 - 25, canvas.height - 120, 50, 319*50 / 158);
    });
  }
};
