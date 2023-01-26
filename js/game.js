/** @type {HTMLCanvasElement} */

/*GAME ENGINE */

class Game {
    constructor(ctx, width, height, player, canvas){

        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.canvas = canvas;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];

    }


    start(){

        
        this.intervalId = setInterval(this.update, 1000 / 60);    //1000 / 60 to be 60 FPS
        
        

    }

    update = () => {                 //needs to be an arrow function, so the .this can work calling the function, 
                                     //otherwise would refer to update function
        //Game logic goes here
        this.frames++;
        this.clear();
        this.score();
        this.player.newPos();
        this.player.draw();
        this.updateEnemies();
        this.checkGameOver(); 
        
        


    }

    stop(){                 //refering to an object property, we don't need arrow functions, only to call a function

        clearInterval(this.intervalId);

    }

    clear(){

        this.ctx.clearRect(0, 0, this.width, this.height);
    }

 
    updateEnemies(){

        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].y += 2;
            this.enemies[i].draw();

        }

        if(this.frames % 120 === 0){                                 //cada vez que passarem 120 frames (2s) ativa o if
            let randomSize = Math.floor(Math.random() * 150 - 40) + 40;       //150 tamanho máximo, 10 tamanho mínimo
            let randomX = Math.floor(Math.random() * this.width - randomSize) + randomSize;  //- randomSize para que o inimigo apareça sempre à mostra

            this.enemies.push(new Enemy(randomX, 0, randomSize, randomSize, this.ctx));
        }
    }

    checkGameOver(){

        

        const crashed = this.enemies.some((enemy) =>{    //.some vai verificar o array dos enemies, correr a função crashWith com todos os enemies
            return this.player.crashWith(enemy);
        });

        if(crashed){
            this.stop();

            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 100, canvas.width, 200)
            this.ctx.font = '46px sans-serif';
            this.ctx.fillStyle = 'red';
            this.ctx.fillText(`Game Over!`, 120, 150)
            this.ctx.lineWidth = 1;
            this.ctx.fillStyle = 'white';
            this.ctx.fillText(`Your final score `, 80, 200)
            this.ctx.lineWidth = 1;
            this.ctx.fillStyle = 'white';
            this.ctx.fillText(`${Math.floor(this.frames / 30)} `, 220, 250)
            this.ctx.lineWidth = 1;
            
            
        } 
    }

    score(){
           //Text


    //primeiro definimos a letra
        this.ctx.font = '46px sans-serif';

        this.ctx.fillStyle = 'White';
        this.ctx.fillText(`Score: ${Math.floor(this.frames / 30)} `, canvas.width / 3, 50)

        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'white';
        this.ctx.strokeText('Score: ', 700, 150) 
    }

}