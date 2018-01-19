function CreateObstacles() {
      this.y = 0;
      this.walls = [
            {width: getRandomInt(70, 200),height: getRandomInt(30, 50), posX: getRandomInt(80, 100), posY: getRandomInt(10, 100)},
            {width: getRandomInt(50, 120),height: getRandomInt(20, 70), posX: getRandomInt(120, 40), posY: getRandomInt(200, 300)},
            {width: getRandomInt(120, 400),height: getRandomInt(15, 25), posX: getRandomInt(150, 470), posY: getRandomInt(300, 450)}
      ];



}

CreateObstacles.prototype.render = function (ctx) {
      this.y ++;
      this.walls.forEach(function(wall){
            // console.log(wall.posX, wall.posY, wall.width, wall.height);
            ctx.fillRect(wall.posX, wall.posY+=5, wall.width, wall.height);
            if(wall.posY>window.innerHeight) {
                  wall.posY=0     
            }
      });  
}

function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
}