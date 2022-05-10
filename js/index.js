const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    clearSpace();
  };

  function startGame() {
    update();
  }

  class Background {
    constructor(){
      this.x = 0;
      this.y = 0;
      this.w = canvas.width;
      this.h = canvas.height;
      this.img = new Image();
      this.img.src = '/images/road.png';
    }

    draw() {
      this.y ++;
      if(this.y > +canvas.height){
        this.y = 0;
      }
      ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
      ctx.drawImage(this.img,this.x,this.y - this.h,this.w,this.h);
    }
  }

  class Car {
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.w = 70;
      this.h = 140;
      this.img = new Image();
      this.img.src = '/images/car.png'
    }

    draw(){
      ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
    }
  }

  const background = new Background();
  const car = new Car(215,560);

  function update() {
    background.draw();
    car.draw();
    requestAnimationFrame(update);
    console.log('funciono')
  }

  addEventListener('keydown',event=>{
    if(event.keyCode === 37 && car.x > 50){
      car.x -= 35;
    }
    if(event.keyCode === 39 && car.x < 180){
      car.x += 35;
    }
  })


  function clearSpace() {
    let page = document.querySelector('body');
    page.innerHTML = '<canvas id="canvas" width="500" height="700"></canvas>';
    startGame();
  }
};
