class Background  {


constructor(game) {

    this.context = game.context;
    this.temp = 0;

}

draw(){
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 400, 600);
    this.context.fillStyle = 'grey';
    this.context.fillRect(30, 0, 340, 600);
    this.context.lineWidth = '5';
    this. context.strokeStyle ='white';
    this.context.strokeRect(50, 0, 300, 600);
    
    
        for (let origin = 0 ; origin<100 ; origin +=5)
            {
            this.context.beginPath();
            let startPoint = origin*10-100;
            this.context.moveTo(200,startPoint + this.temp);
            this.context.lineTo(200,startPoint+20 + this.temp);
            this.context.stroke();
            this.context.closePath();
        }
       this.temp+=2; 
       if (this.temp>100) {this.temp = 0;}
       
    }
}
