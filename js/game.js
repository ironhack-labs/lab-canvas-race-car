class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];

        // Background Image
        const background = new Image();
        background.addEventListener("load", () => {
        this.background = background;});
        background.src = "../images/road.png";
    }

    drawBackground(){
        ctx.drawImage(this.background, 0, 0, this.width, this.height); 
    }

    start(){
        this.intervalId = setInterval(this.update,10) 
    }

    update = () => {
        this.frames++;          
        this.clear();           
        this.drawBackground();  
        this.player.moveLimiter();   
        this.player.draw();     
        this.updateEnemies(); 
        //this.checkGameOver(); 
    }

    stop(){
        clearInterval(this.intervalId); 
    }

    clear(){
        this.ctx.clearRect(0,0, this.width, this.height); 
    }
    
    updateEnemies(){
        for (let i = 0; i < this.enemies.length; i++){   
            this.enemies[i].y += 1;                      
            this.enemies[i].draw();                       
        }
        if (this.frames % 200 === 0){                    
            let y = -50;
            let minWidth = 0;
            let maxWidth = 300;

            let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);

            let minGap = 0;
            let maxGap = 50;

            let gap = Math.floor(Math.random() * (maxGap-minGap+1)+minGap);
            let x = Math.floor(Math.random() * (this.width - width - gap));
            
            this.enemies.push(new Enemies(x, y, x + width + gap, 50, "red", this.ctx)); 
        }
    }


    /*
    checkGameOver(){
       
    */

}