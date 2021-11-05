window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };



  const $canvas = document.querySelector("canvas");
  const ctx = $canvas.getContext("2d");
  
  let frames=0;
  const obstacle=[];
  

  function startGame() {
    
    update();
  }

  class Board {
    constructor(){
      this.x=0;
      this.y= 0;
      this.width = $canvas.width;
      this.height = $canvas.height;
      this.image = new Image();
      this.image.src = "../images/road.png"
    }

    draw() {
      this.y+=8;
		if (this.y > this.height) this.y = 0;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		ctx.drawImage(
			this.image,
			this.x,
			this.y - this.height,
			this.width,
			this.height
		);
      
    }

  }

  const board = new Board();
  
  
  class Character {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 30;
      this.height = 65;
      this.image = new Image();
      this.move = 60;
      this.image.src =
        "../images/car.png";
    };
  
  
    draw() {
      this.x;
      if (this.x > $canvas.width - this.width - 60)
        this.x = $canvas.width - this.width - 60;
        if (this.x < 60)
        this.x = 60;  
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    }
  
    moveLeft() {
      this.x -= this.move;
    }
    moveRight() {
      this.x += this.move;
    }
  
    isTouching(obj) {
      return (
        this.x < obj.x + obj.width &&
        this.x + this.width > obj.x &&
        this.y < obj.y + obj.height &&
        this.y + this.height > obj.y
      );
    }
  }

    const car = new Character(235, 600)

    class Obstacles extends Character {
      constructor(x, y) {
        super(x, y);
        this.image.src =
          "https://e7.pngegg.com/pngimages/190/613/png-clipart-stone-wall-brick-brick-wall-s-orange-fence.png";
      }
      draw() {
        this.y+=2;
        if (this.x > $canvas.width - this.width - 60)
        this.x = $canvas.width - this.width - 60;
        if (this.x < 60)
        this.x = 60;  
        
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }


    function checkCollitions(){
      obstacle.forEach((wall)=>{
        if(car.isTouching(wall)){
            alert("Game Over");
        }
      })
    }

    function generateObstacles(){

      if(frames%100 === 0){
        const x= Math.floor(Math.random()*380);
        const wall= new Obstacles(x,0);
        obstacle.push(wall)

      }

    }

    function drawObstacles(){
      obstacle.forEach((wall)=> wall.draw());

    }


    function checkKeys() {
      document.onkeydown = (event) => {
        switch (event.key) {
          
          case "ArrowLeft":
            car.moveLeft();
            break;
          case "ArrowRight":
            car.moveRight();
            break;
    
          default:
            break;
        }
      };
    }

    function update(){
      frames++;
      checkKeys();
      generateObstacles();
      checkCollitions();

      ctx.clearRect(0, 0, $canvas.width, $canvas.height);

      board.draw();
      car.draw();
      drawObstacles();
      requestAnimationFrame(update);


    }


};





