
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const roadimg = document.createElement('img')
roadimg.onload = function(){
ctx.drawImage(roadimg, 0, 0, canvas.width, canvas.height);
};
roadimg.src = 'images/road.png';

let frames = 0; // variable que l'on va incrementer dans la fonction draw pour eviter un NaN

   function score() {
    const points = Math.floor(frames / 5);
    ctx.font = '18px serif';
    ctx.fillStyle = 'white';
    ctx.fillText(`Points: ${points}`, 100, 50);
  }



const voiture = {
  x: 230,
  y: 550,
}

voiture.image = document.createElement('img') // <img>
voiture.image.onload = function(){
  ctx.drawImage(voiture.image,225,550, 50, 100,)
};
voiture.image.src = 'images/car.png'


class Obstacle {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveDown() {
    this.y += 5; // cela correspond à la vitesse des objects
  }

  updateObstaclePosition() {
    if (this.y > canvas.height) {
      this.y = -50; // cela permet de renitialiser les obstacles
      this.x = Math.floor(Math.random() * (canvas.width - 50)); // Random x position
    }
  }
}


const obstacles = [];


function createObstacles() {
  for (let i = 0; i < 3; i++) { // cela choisit le nombre d'obstacles
    const x = Math.floor(Math.random() * (canvas.width - 50)); // Random x position
    const y = Math.floor(Math.random() * -500); // Random y position above the canvas
    const obstacle = new Obstacle(50, 50, 'red', x, y); // Create a new obstacle
    obstacles.push(obstacle); // Add the obstacle to the list
  }
}
createObstacles();

function draw() {
  
  ctx.clearRect(0,0, canvas.width,canvas.height)
  
  ctx.drawImage(roadimg, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(voiture.image, voiture.x, voiture.y,50,100)
  score();
  frames++;
  for (let obstacle of obstacles){
    obstacle.updateObstaclePosition();   
    obstacle.update();
    obstacle.moveDown();
  }
  
  requestAnimationFrame(draw)
}


document.addEventListener('keydown', function (event) {
  console.log('une touche vient d etre appuyee', event.keyCode)
  
  switch (event.code) {
      
    //
    // haut,bas,gauche,droite
    //
      
    case "ArrowLeft":
      voiture.x -= 10
      console.log(voiture.x);
      break;
    case "ArrowRight":
      voiture.x += 10
      break;
    
  }
})
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    draw();
    
  };
  
};


