class Obstacle {
    constructor(game){
        this.height = game.height;
        this.width = game.width;
        this.game = game;
        const a = Math.floor(Math.random() * 4);
        const b = Math.floor(Math.random() * 4);
        const arr1 = [200, 150, 50, 100];
        this.vx = arr1[a]
        this.vy = 0
        const arr2 = [40, 50, 70, 140];
        this.width = arr2[b]
        this.height = 20
        this.collisionAreaX = [];
        this.colisionAreaY = [];
    }

    draw(){
        game.context.fillStyle = "red";
        game.context.fillRect(this.vx, this.vy, this.width, 20);
      }

    update(){
        this.vy += 5
}
}



