// Square Enemies:
class Game {
    constructor(ctx, width, height, player) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.interval = null;
        this.frames = 0;
        this.enemies = [];

    }
    start() {
        this.intervalId = setInterval(this.update, 1000 / 60) 
    }
    // Update needs to be an arrow function because "this" needs to refer to 
    // the class and not the update method
    update = () => {
        // Game logic here
        this.frames++;
        this.clear();
        this.player.newPos();
        this.player.draw();
        this.updateEnemies();
        this.checkGameOver();
    }
    stop() {
        clearInterval(this.intervalId);
    }
    clear() {
        this.ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    }
    // When the enemies appear
    updateEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].y += 1;
            this.enemies[i].draw();
        }
        // the if statement is to create the enemies
        // which we only want to do every 120 frames (2 seconds)
        if (this.frames % 60 === 0) {
            // 150 is the maximum square size
            // 10 is the minimum size
        let randomSize = Math.floor(Math.random() * 90 - 80) + 80;
        let randomX = Math.floor(Math.random() * this.width - randomSize) + randomSize;

        this.enemies.push(new Enemy(randomX, 0, randomSize, 20, "purple", this.ctx)
            );
        }
    }

    checkGameOver() {
        const crashed = this.enemies.some((enemy) => {
            return this.player.crashWith(enemy);
        });

        if(crashed) {
            this.stop()

            function drawSquare(x, y, w, h, color) {
                //before drawing the square, update the color
                ctx.fillStyle = color;
                ctx.fillRect(x, y, w, h);
        }
        drawSquare(100, 225, 300, canvas.height / 3, 'black');
        ctx.font = "40px Comic Neue";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", canvas.width/2, canvas.height/2);
        
    }
}

        /* if (crashed) {
            this.stop();
            
            alert("Game Over");
        } */
    }




/* 
class Game {
    constructor(ctx, width, height, player) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.interval = null;
        this.frames = 0;
        this.enemies = [];

    }
    start() {
        this.intervalId = setInterval(this.update, 1000 / 120) 
    }
    // Update needs to be an arrow function because "this" needs to refer to 
    // the class and not the update method
    update = () => {
        // Game logic here
        this.frames++;
        this.clear();
        this.player.newPos();
        this.player.draw();
        this.updateEnemies();
        this.checkGameOver();
    }
    stop() {
        clearInterval(this.intervalId);
    }
    clear() {
        this.ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    }
    // When the enemies appear
    updateEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
          this.enemies[i].y += 5;
          this.enemies[i].draw();
        }
        if (this.frames % 180 === 0) {
          let y = 0;
          //calculate the height of the columns/enemies
          let minWidth = 20;
          let maxWidth = 400;
          let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
          //these variables control the size of the gap between obstacles
          let minGap = 75;
          let maxGap = 200;
          //this creates the gap
          let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          //add the obstacles to the array
          //top obstacle
          this.enemies.push(new Enemy(0, y, 50, width, 'green', this.ctx));
          //bottom obstacle
          this.enemies.push(new Enemy(width + gap, y, 50, y - width - gap, 'blue', this.ctx));
        }
      }

    checkGameOver() {
        const crashed = this.enemies.some((enemy) => {
            return this.player.crashWith(enemy);
        });

        if (crashed) {
            this.stop();
            alert("Game Over");
        }
    }
}


 */