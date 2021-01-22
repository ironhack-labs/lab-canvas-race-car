var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d');


// function road(){
//   let base_image = new Image()
//   base_image.src = "images/road.png"
//   base_image.onload = function(){    // las imagenes siempre van con onload
//     // ctx.drawImage(base_image, 0, 0 ,500,700)
//   }
// }
let largoInicial = 220

function obst(){
  ctx.fillStyle = "yellow"
  ctx.fillRect(largoInicial,0,280,20)
  ctx.closePath();
}

setInterval(()=>{
  largoInicial = Math.floor(Math.random()*300)
  obst()
},2000)

let xi = 225
function carro(){
  let base_image = new Image()
  base_image.src = "images/car.png"
  base_image.onload = function(){    // las imagenes siempre van con onload
  ctx.drawImage(base_image, xi, 600,50,90);
  }
}

function moveLeft(){
  if(xi>0){
    xi -= 25
    carro()
    ctx.clearRect(0, 0, 500, 700)
  }
    
}
function moveRight(){
  if(xi<450){
    xi += 25
    carro()
    ctx.clearRect(0, 0, 500, 700)
  }
}


document.addEventListener("keydown", (e) => {
  console.log(e)
  switch (e.keyCode){
      case 37:
          moveLeft()
          break
      case 39:
          moveRight()
          break
  }
})

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    // alert("vivo y coleando")
    carro()
    obst()
  };
  
  
  road()
  function startGame() {
  }
};

