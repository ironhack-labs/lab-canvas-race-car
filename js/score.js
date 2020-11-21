class Score {
    constructor(canvas){
        this.context = canvas.getContext('2d');
        this.score = 0;
        this.highScore = 0;
    }

    update() {
        this.score++;
    }

    draw(){
        this.context.font = '20px Georgia';
        this.context.fillText(`Score: ${this.score}`,70,20);
    }
}