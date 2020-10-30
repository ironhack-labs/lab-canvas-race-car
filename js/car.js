class Player {
constructor(canvas, lives){
    this.size = 40;
    this.canvas = canvas;
    this.context = document.querySelector("#canvas").getContext("2d");
    let roadImg = new Image();
    roadImg.src = './images/car.png';
    this.context.drawImage(roadImg, 100, 0, 400, 540);
    this.x = 10 + this.size / 2;
    this.y = this.canvas.height / 2;
    this.speed = 5;
    this.direction = 0;
    this.lives = lives;
}
}