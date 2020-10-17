     let x = 225;
      let y = 575;
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    drawRoad();
    drawCar();
  };
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
  function drawRoad() {
    const road = new Image();
    road.onload = function(){
      ctx.drawImage(road,0,0,500,700)
    }
    road.src = './images/road.png'
  } 


 function drawCar() {
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, x, y, 50, 100)
    };
    img.src = './images/car.png'
  }
  
  function moveLeft() {
    x -= 25;      
    }
  function moveRight(){
    x +=25;
  }
  function updateCanvas(){
    ctx.clearRect(0,0,500,700);
    drawRoad();
    drawCar();
  }
  

document.addEventListener('keydown', e => {
  switch(e.keyCode){
    case 37: moveLeft(); break;
    case 39: moveRight(); break;
  }
updateCanvas();
console.log(x);
})
  

