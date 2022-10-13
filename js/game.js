
class Game {
    constructor(ctx, width, height, player) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.intervalId = null;
      this.obstacles = [];
      this.frames = 0;
    }

    drawBackground() {
        const backgroundImage = new Image();
        backgroundImage.src = "/images/road.png";
        ctx.drawImage(backgroundImage, 0, 0, 400, 540);
    }
    start() {
        this.intervalId = setInterval(this.update, 1000 / 60);
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    score() {
        const points = Math.floor(this.frames / 5);
        this.ctx.font = '22px monospace';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Score: ${points}`, 1000, 50);
      }

    update = () => {
        this.score();
        this.frames++;
        this.drawBackground();
        this.player.draw();
        this.x;
        this.updateObstacles();
        this.clear();
        
      };
      
    updateObstacles(){
        for (let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].y += 2;
            this.obstacles[i].draw();
        }

        let minWidth = 20;
        let maxWidth = 350;

        let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);

            
        let minGap = 75;
        let maxGap = 200;

    
        let gap = Math.floor (Math.random() * (maxGap - minGap + 1) + minGap);

        
            
        this.obstacles.push(new Component(0, 0, width, 20, 'yellow', this.ctx));

        this.obstacles.push(new Component(400, 0, width + gap, 10, y - width - gap, 'blue', this.ctx))
    }

};