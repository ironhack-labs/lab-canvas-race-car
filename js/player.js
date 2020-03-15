class Player {
    constructor(game) {
      this.game = game;
      this.context = game.context;
      this.x = this.game.width / 2;
      this.y = 510;
      this.width = 40;
      this.height = 50;
      this.speedX = 0;
      this.image = new Image();
      this.image.src = "../images/car.png";
      this.carCrashAudio = new Audio();
      this.carCrashAudio.src =
        "../audios/car_brake_crash-Cam_Martinez-567114981.mp3";
    }
    draw() {
      // this.context.fillStyle = "black";
      // this.context.fillRect(this.x, this.y, this.width, this.height);
      this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    update() {
      this.x += this.speedX;
  
      if (this.x <= 0) {
        this.speedX = 0;
      }
      if (this.x >= this.game.width - this.width) {
        this.speedX = 0;
      }
    }
    setControls() {
      window.addEventListener("keydown", event => {
        if (event.keyCode === 37) {
          this.speedX = -2;
        }
        if (event.keyCode === 39) {
          this.speedX = 2;
        }
      });
    }
  }