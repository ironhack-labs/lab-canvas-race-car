
document.getElementById('start-button').onclick = () => {
  startGame();
};

//GAME AREA
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d')

//START
function startGame() {
  canvas.style.backgroundImage = 'url("images/road.png")'
  canvas.style.backgroundSize = "cover"
  car.draw()
}

//CAR 🏎️
class Car { 
  constructor(x0, y0) {
    this.x = x0;
    this.y = y0;

    const img = document.createElement('img'); // <img>
    img.src = "images/car.png";

    this.image = img;
    img.addEventListener('load', () => {   //loading img ou --> img.onload = function(){}
      this.image = img})
    }

  draw() {
    if (!this.image) return//si img == "rien" pas de de function
    ctx.drawImage(this.image, this.x, this.y, 60, 105)//trace l'image "car"
  }

  update() {
    
  }

}

//NEW CAR 🏎️
let car = new Car(220, 555) // { x: , y: , draw: f() }



//ANIMATION LOOP (+Update??)
function drawLoop() {
  ctx.clearRect(0,0, 500,700) // 🧽
  car.draw()
  requestAnimationFrame(drawLoop)// draw & clear img 16FPS
}

document.addEventListener('keydown', function (event) {
  console.log('keydown!!!!!!!!' ,event.keycode)
  switch (event.Keycode) {

    case 37:
      console.log("gauche")//car.x -= 100
      break;
    case 39:
      console.log("gauche")//car.x += 100
      break;
  }
})

  /*

  pourquoi ca ne reagit pas à l'Event...

    ????????????
    newPos(){
    this.x += ; 
    this.y += ;
    }
    ????????????



    */






