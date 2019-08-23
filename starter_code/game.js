
class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.context = this.canvas.getContext('2d');
      this.board = new Board(this);
      this.car = new Car(this);
      // this.control = new Control(this);
    }
      paint () {
        this.board.paint();
        this.car.paint();
      }
    
    
}



     




 