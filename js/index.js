window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  const myGameArea = {
    canvas: document.getElementById('canvas'),
    frames: 0,
    start: function () {
      this.canvas.width = 500;
      this.canvas.height = 700;
      this.context = this.canvas.getContext('2d');
      this.interval = setInterval(updateGameArea, 20);
    },
    clear: function(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  class Component {
    constructor(_image, _src, _x, _y, _width, _height) {
      this.image = _image;
      this.src = _src;
      this.width = _width;
      this.height = _height;
      this.x = _x;
      this.y = _y;
    }
    update(){
      const ctx = myGameArea.context;
      return ctx;
    }
  }
  function startGame(){
    console.log('Pulsaste el botón de Start!');
    const road = new Component(new Image(), '../images/road.png', 0, 0, 500, 700);
    const car = new Component(new Image(), '../images/car.png', 218, 512, 64, 128);

    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowRight'){
        //console.log("pulsaste derecha!");
        car.x += 9;
        roadImage.onload();
        carImage.onload();
      }else if(event.key === 'ArrowLeft'){
        //console.log("Pulsaste izquierda!");
        car.x -= 9;
        roadImage.onload();
        carImage.onload();

      }
    });
    //console.log("Hiciste click!");
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const roadImage = road.image;
    roadImage.src = road.src;
    roadImage.onload = () => {
      ctx.drawImage(roadImage, road.x, road.y, road.width, road.height);
    };
    const carImage = car.image;
    carImage.src = car.src;
    carImage.onload = () => {
      ctx.drawImage(carImage, car.x, car.y, car.width, car.height);
    };
  }
  function updateGameArea(){
    myGameArea.clear();
    car.update();
  }
};
