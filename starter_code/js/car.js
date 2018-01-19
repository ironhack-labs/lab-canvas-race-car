function CreateCarObject() {
      this.x = 255;
      this.speed = 30;
      this.img = new Image();
      this.scale = 158 / 319;
}

CreateCarObject.prototype.move = function (key) {
      switch (key) {
            case 37: // left
                  this.x -= this.speed;
                  if (this.x < 35) {
                        this.x = 35;
                  }
                  break;
            case 39: // right
                  this.x += this.speed;
                  if (this.x > 480) {
                        this.x = 480;
                  }
                  break;
            default:
                  return; // exit this handler for other keys
      }
}

CreateCarObject.prototype.render = function (ctx) {
      ctx.drawImage(this.img, this.x, 500, 160 * this.scale, 160);
}
// function Car(ctx) {
//       this.x = 260;
//       this.img = this.carImage();
//       this.speed = 10;
//       this.ctx = ctx;
// }

// Car.prototype.carImage = function (x) {
//       var img = new Image();
//       imgScale = 158 / 319; 
//       img.onload = function () {   
//             ctx.drawImage(img, x, 700, 160 * imgScale, 160); 
//       }; 
//       img.src = 'img/car.png';
// };

// Car.prototype.moveCar = function (e) {
//       console.log('antes: ' + this.x);
//       if (this.x < 60) {
//             this.x = 60;
//       } else if (this.x > 460) {
//             this.x = 460;
//       } else {
//             this.x += (this.speed * e);
//       }
//       console.log('después: ' + this.x);
// }

// Car.prototype.stop = function () {
//       this.speed = 0;
// }
// Car.prototype.render = function (delta) {
//       this.carImage(this.x);
// }
