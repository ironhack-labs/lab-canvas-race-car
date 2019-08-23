class Car{
  constructor(game) {
    this.game = game;
    this.image=new Image();
    this.image.src="./images/car.png";
    this.road=new Road();
    this.control=new Control();
  }

  paint() {
    const context = this.game.context;
    context.drawImage(this.image,220,510,60,130);
  }

  moveLeft(){
    this.image=drawImage(this.image,150,510);  }

  moveRight(){

  }
}