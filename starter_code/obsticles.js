class Obsticle {
    constructor() {
      this.col = 0;
      this.row = 0;
    //   this.image = context.fillRect(30, 30, 100, 100);
    }
setRandomPosition(){ 
        this.col = Math.floor(Math.random()*10)
        this.row = Math.floor(Math.random()*10)
    }
}

