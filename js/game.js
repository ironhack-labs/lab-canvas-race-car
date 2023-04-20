console.log("JS-game");

class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
        this.road = new Image();
        this.score = 0;
    }
    
    start(){
        this.intervalId = setInterval(this.update, 10)
     }
    update = ()=>{
        this.frames++;
        this.player.newPos();
        if (this.frames%25===0) {
            this.score++;
        }
        this.drawbackground();
        this.player.draw();
        this.updateEnemies();
        this.checkGameOver();
     }

     stop(){
        clearInterval(this.intervalId);
     }
     
    drawbackground(){
        this.road.src="../images/road.png";
        ctx.drawImage(this.road,0,0,500,700);
        ctx.fillText(`Score: ${this.score}`, this.width - 150,30);
        ctx.fillStyle = "white";
        ctx.font = "25px Arial";
        ctx.fontWeight = "bold";
    }
    
    updateEnemies(){
        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].y += 2; // enemy goes down
            this.enemies[i].draw(); // continue to Draw enemy
        }
        if(this.frames % 150 === 0){
            let y = -20;
            let minWidth = 125; // atleast  of min width
            let maxWidth = 200; // at least  of max heigth
            
            let width = Math.floor(Math.random() * (maxWidth - minWidth +1) + minWidth);
    
            let minGap = 0;
            let maxGap = 100;
    
            let gap = Math.floor(Math.random() * (maxGap - minGap +1) + minGap);
            let x = Math.floor(Math.random() * (this.ctx.canvas.width - width - gap));

            this.enemies.push(new Component(x, y,x + width + gap, 35, "darkred", this.ctx));


        }  
}
checkGameOver(){
    let crashed = this.enemies.some((enemy)=>{
        return this.player.crashWith(enemy);
    });
    if(crashed){
        this.stop();
        ctx.fillStyle = "red";
        this.ctx.font = "72 px Arial";
        this.ctx.fillText("Game Over", 0, this.height/2);
    }
}
}