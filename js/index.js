
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const roadimg = document.createElement('img')
roadimg.onload = function(){
ctx.drawImage(roadimg, 0, 0, canvas.width, canvas.height);
};
roadimg.src = 'images/road.png';

const voiture = {
  x: 230,
  y: 550,
}

voiture.image = document.createElement('img') // <img>
voiture.image.onload = function(){
  ctx.drawImage(voiture.image,225,550, 50, 100,)
};
voiture.image.src = 'images/car.png'

function draw() {
  
  ctx.clearRect(0,0, canvas.width,canvas.height)
  
  ctx.drawImage(roadimg, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(voiture.image, voiture.x, voiture.y,50,100)
 
  
  
  requestAnimationFrame(draw)
}
draw()

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
    startGame();
  };

  function startGame() {}
};
