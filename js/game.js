console.log("JS is loaded game");

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
        this.score=0;

    }
    



    start(){
        this.intervalId = setInterval(this.update, 10)
     }
    update = ()=>{
        this.frames++;
        this.drawbg();
        this.player.newPos();
        this.player.draw();
        this.updateEnemies();
        if (this.frames % 50 === 0) { //increasing score every 0.5 seconds
            this.score++;
        //this.checkGameOver();
        }
     }

     stop(){
        clearInterval(this.intervalId);
     }
     
    drawbg(){
        this.road.src="../images/road.png";
        ctx.drawImage(this.road,0,0,500,700);
        ctx.fillStyle = "white";  //drawing score
        ctx.font = "24px Arial";
        ctx.textAlign = "right";
        ctx.fillText(`Score: ${this.score}`, this.width - 10, 30)
        
    }
    updateEnemies(){
        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].y += 1; // enemy goes down
            this.enemies[i].draw(); // continue to Draw enemy
        }
        if(this.frames % 200 === 0){
            let y = -50;
            let minWidth = 20; // atleast  of min width
            let maxWidth = 300; // at least  of max heigth
            
            let width = Math.floor(Math.random() * (maxWidth - minWidth +1) + minWidth);
    
            let minGap = 0;
            let maxGap = 50;
    
            let gap = Math.floor(Math.random() * (maxGap - minGap +1) + minGap);
            let x = Math.floor(Math.random() * (this.ctx.canvas.width - width - gap));
    
    
           
    //y, x, width + gap , 50, "purple", this.ctx))
            //right obstacle
    
            this.enemies.push(new Component(x, y,x + width + gap, 50, "darkred", this.ctx));
//height + gap
//x,y,w,h,color,ctx

        }  
}
/*checkGameOver(){
    const crashed = this.enemies.some((enemy)=>{
        return this.player.crashWith(enemy);

    });
    if(crashed){
        this.stop();
        ctx.fillStyle = "red";
        this.ctx.font = "72 px Arial";
        this.ctx.fillText("game Over", 0, this.height/2);
    }
}
 */
}




