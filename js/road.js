  class Road {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    draw(){
        let img = new Image()
        img.src = "./images/road.png"
        this.ctx.drawImage(img,0,0,500,700);
      
       }
} 


  // classe para criar background em loop
  class ScrollingBackground {
    constructor (canvas, source) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.img = new Image();
      this.img.src = source;
      this.x = 0;
      this.y = 0;
      this.speed = 1;
      this.height = 700;
    }
    // atualiza posição
    move () {
      this.y += this.speed;
      this.y %= 700;
    }
    // desenha imagem
    draw () {
      ctx.drawImage(this.img, 0, this.y, 500, 700);
      if (this.speed < 0) {
        this.ctx.drawImage(this.img, 0, this.y + this.img.height, 500, 700);
      } else {
        this.ctx.drawImage(this.img, 0, this.y - 700, 500, 700);
      }
    }
  }

 
