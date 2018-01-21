function CreateObstacles() {
      this.walls = [{
                  width: 150,
                  height: 75,
                  posX: 50,
                  posY: 0
            },
            {
                  width: 75,
                  height: 75,
                  posX: 250,
                  posY: 200
            },
            {
                  width: 250,
                  height: 75,
                  posX: 375,
                  posY: 400
            }
      ];



}

// CreateObstacles.prototype.shuffle = function() {
//       this.walls.forEach(function(wall){
//             wall.posX = getRandomInt(150, 470),
//             wall.posY = getRandomInt(300, 450)
//             wall.width = getRandomInt(50, 400);
//             wall.height = getRandomInt(20, 500);
//       });
// }

CreateObstacles.prototype.render = function (ctx) {
      this.walls.forEach(function (wall) {
            // console.log(wall.posX, wall.posY, wall.width, wall.height);
            ctx.fillRect(wall.posX, wall.posY += 5, wall.width, wall.height);
            if (wall.posY > window.innerHeight) {
                  wall.posX = getRandomInt(150, 470);
                  wall.posY = getRandomInt(0, 200);
                  wall.width = getRandomInt(100, 200);
                  wall.height = getRandomInt(20, 70);
            }
      });
      console.log(this.walls.length);
}

function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
}