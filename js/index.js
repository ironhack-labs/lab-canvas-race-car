const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();




  }
};

// Function that initializes and shows the road and the car
function startGame() {
  road.inicialize();
  road.show();
  car.inicialize();
  car.show();

document.addEventListener('keydown', (event) => {
  switch(event.key){
    case "ArrowRight":
      if(car.x < 450){
      car.x += 40;
      ctx.clearRect(0,0,500,700);
      road.show();
      car.show();
      console.log(event.key)   
      break;
      }
    
    case "ArrowLeft":
      if(car.x > 30){
        car.x -= 40;
        ctx.clearRect(0,0,500,700);
        road.show();
        car.show();
        console.log(event.key) 
        console.log(event.key)
        break;
      }
  }
})


}


// Creating the road object
const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,

  inicialize: function () {
    this.img = new Image();
    this.img.src = "/images/road.png";
    this.width = canvas.width;
    this.height = canvas.height;
  },

  show: function () {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
};

// Creating the car object
const car = {
    img: null,
    x: 330,
    y: 550,
    width: 0,
    height: 0,

  inicialize: function () {
    this.imgCar = new Image();
    this.imgCar.src = "/images/car.png";
    this.width = (158 / 319) * this.height;
    this.height = 80*1.7;
  },

  show: function(){
    ctx.drawImage(this.imgCar, this.x, this.y, this.width, this.height);
  }
};




