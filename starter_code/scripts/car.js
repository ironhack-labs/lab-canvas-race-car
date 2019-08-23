class Car{
    constructor(game){
        this.game = game;
        this.image = new Image();
        this.image.src = "./images/car.png";
    }
    paint(){
        const context = this.game.context;
        // console.log(this.image);  
        context.drawImage(this.image, 200, 100,100,100);
      
      // this.context.fillRect(200,100,100,100);
    //   console.log("carrrrrrrrrrr");     
    window.requestAnimationFrame(() => this.paint());
    }
}