/** @type {HTMLCanvasElement} */ 

class Game{
    constructor(ctx, width, height, player){ //width and height n é obrigatório mas é boa pratica caso se redimensione
        this.ctx=ctx
        this.width=width
        this.height=height
        this.player=player
        this.intervalId=null // meter para o jogo não começar automáticamente
        this.frames= 0 
        this.enemies= []
    }

  /*   drawbackground(){
        const road = new Image()
        road.src = "../images/road.png"
        this.ctx.drawImage(road, 0, 0, canvas.width, canvas.height)

    }
 */
    start(){
        this.intervalId= setInterval(this.update, 1000/60)
    }

    update= () => { // here we use the => Funtion porque chamamos a função
        //game logic here
        
        this.frames++
        this.clear()
        this.player.newPos()
        this.player.draw()
        this.updateEnemies()
        this.checkGameOver()
        this.Score()

    }

    stop(){
        clearInterval(this.intervalId)
    }

    clear(){
        this.ctx.clearRect(0,0,this.width,this.height)
    }

    updateEnemies(){

        for( let i = 0; i < this.enemies.length; i++){
            this.enemies[i].y +=5
            this.enemies[i].draw()        // como .draw() está fora da classe, nao é preciso transformar em => arrow function
        }

        
        if(this.frames % 120 === 0){ // vao aparecer de 2 em 2 segundos (120 frames)
            let randomSize = Math.floor(Math.random () * 200 -10) + 30  // define the size of the Square Enemies
            let randomX = + Math.floor(Math.random()* this.width - randomSize) + randomSize

            // create the enemies
            this.enemies.push(new Enemy(randomX, 0 , randomSize, randomSize, "green", this.ctx))

        }
    }

    Score(){
         ctx.font = '30px sans-serif';
         ctx.fillStyle = 'black';
         ctx.fillText(`Score: ${Math.floor(this.frames / 40)} `, 100, 50)
         ctx.lineWidth = 1;
         ctx.strokeStyle = 'white';
         ctx.strokeText('Score: ', 700, 150) 
    } 

    checkGameOver() {
        const crashed = this.enemies.some( (enemy) => {
            return this.player.crashWith(enemy)
        })
        if(crashed) {
            this.stop()
        }
    }
   
}