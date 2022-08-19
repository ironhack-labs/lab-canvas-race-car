window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');

  function startGame() {
    let myVariables = {
      carX: 130,
      carY: 560,
      fps: 60,
      framesCounter: 0

      this.interval = setInterval(() => {

        this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++;
        this.drawStuffs();
        console.log("passed";)
    this.move();



    }, 1000 / this.fps);






    // function animate() {
    //   ctx.context.clearRect(0, 0, width, height);
    //   ctx.drawImage(car, canvas.width, 0);
    //   x -= 4;
    //   if (x > 250) requestAnimationFrame(animate);

    // }





    // ctx.beginPath();
    // ctx.drawImage(background, 200, 50);
    // ctx.fill(); clickable;
    // ctx.closePath();
    function drawStuffs() {

      const background = new Image();
      //imgScale = 1000 / 380;
      background.src = "./images/road.png";
      background.onload = function () {
        ctx.drawImage(background, 30, 0, 500, 750);
      };



      const car = new Image();
      car.src = "./images/car.png";
      car.onload = function () {
        ctx.drawImage(car, carX, carY, 60, 100);
      };

    }



    function move(e) {

      if (e.keyCode == 39) {
        carX += 8;
      }
      if (e.keyCode == 37) {
        carX -= 8;
      }
      if (e.keyCode == 38) {
        carY -= 8;
      }
      if (e.keyCode == 40) {
        carY += 8;
      }



      ctx.clearRect(0, 0, 500, 750);
      ctx.drawImage(background, 30, 0, 500, 750);
      ctx.drawImage(car, carX, carY, 60, 100)



    }

    document.onkeydown = move;




  }












}
};
