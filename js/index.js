console.log('JS is working!')

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

 function startGame() {

  const roadImage = new Image();
  roadImage.src='./images/road.png';

  roadImage.onload = function(){
    ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
  };

  const player = new Player(ctx)
  const obstacles = new Obstacles(ctx)
  let frame = 0

  const obstacles1 = [];

 setInterval(function(){
    ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height)
    player.draw()
    frame += 1
    obstacles1.forEach(function(obstacles){
      obstacles.draw()
    })
    if (frame % 200 === 0){
      console.log('log ')
      obstacles1.push(new Obstacles(ctx))
    }
 },10)



 }

}


