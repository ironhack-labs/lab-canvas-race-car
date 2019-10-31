window.onload = function() {
  const carApp = {
    title: "Background car game",
    author: "chiti juanichi",
    license: undefined,
    version: "1.0",
    canvasDom: undefined,
    ctx: undefined,
    wWidth: undefined,
    wHeight: undefined,
    car: undefined,
    init(id) {
      this.canvasDom = document.getElementById(id);
      this.ctx = this.canvasDom.getContext("2d");
      this.setDimensions();
      this.startGame();
      // this.drawRoad();
    },
    setDimensions() {
      document.getElementsByTagName("body")[0].style.margin = 0;
      this.wWidth = window.innerWidth;
      this.wHeight = window.innerHeight;
      this.canvasDom.setAttribute("height", this.wHeight);
      this.canvasDom.setAttribute("width", this.wWidth / 2);
    },
    drawRoad() {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 25, 400, 600);
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(50, 25, 300, 600);
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(60, 25, 10, 600);
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(330, 25, 10, 600);
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 8;
      this.ctx.setLineDash([30, 50]); // ['tamaño del trazo', 'espacio entre trazos']
      this.ctx.beginPath();
      this.ctx.moveTo(196, 50);
      this.ctx.lineTo(196, 600);
      this.ctx.stroke();
    },

    // drawCar(name) {
    //   let myImage = new Image();
    //   myImage.src = `./images/${name}`;
    //   myImage.onload = () => this.ctx.drawImage(myImage, 178, 520, 36, 80);

    startGame() {
      // this.drawCar("car.png");
      this.setEventListeners();
      this.drawControlledCar("car.png");

      setInterval(() => {
        this.drawAll();
      }, 10);
    },

    drawAll() {
      this.clearScreen();
      this.drawRoad();
      this.car.draw();
    },

    setEventListeners() {
      // alert(e.keyCode);
      document.onkeydown = e => {
        switch (e.keyCode) {
          case 37:
            this.car.goLeft();
            break;
          case 39:
            this.car.goRight();
            break;
        }
      };
    },

    drawControlledCar(name) {
      this.car = new Car(this.ctx, name);
    },

    clearScreen() {
      this.ctx.clearRect(0, 0, this.wWidth, this.wHeight);
    }
  };

  document.getElementById("start-button").onclick = function() {
    carApp.init("ourCanvas");
    carApp.startGame();
  };
  //document.getElementById("start-button").setAttribute("style","background-color: blue")
};
