class Car extends Component {
    constructor(road, x, y, width, height) {
      super(road, x, y, width, height);
      this.img = new Image();
    }
    changePos() {
      document.onkeydown = event => {
        const key = event.keyCode;
          switch (key) {
            case 37:
              if (this.x >= 10) this.x -= 20;
              break;
            case 39:
              if (this.x <= 490 - this.width) this.x += 20;
              break;
          } 
        //}
      };
    }
  
    crashWith(obstacle) {
      return !(
        (this.y + 5 < obstacle.y + obstacle.height && this.x + 5 < obstacle.x + obstacle.width && this.x + this.width - 5 > obstacle.x) ||
        (obstacle.y + obstacle.height > this.y && obstacle.x < this.x + this.width && this.x < obstacle.x + obstacle.width)
        );
    }

    drawCar() {
        //let img = this.img;
        let ctx = document.getElementById('canvas').getContext('2d');
        this.img.onload = () => {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        };

        this.img.src = '/images/car.png';
    }
}
  