class Score {
    constructor(canvas){
        this.context = canvas.getContext('2d');
        this.score = 0;
        this.highScore = 0;
        this.scores=[]
    }

    update() {
        this.score++;
        this.scores.push(this.score)
    }

    draw(){
        this.context.font = '20px Georgia';
        this.context.fillText(`Score: ${this.score}`,70,20);
    }
}