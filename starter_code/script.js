const $canvas = document.querySelector('canvas')
const ctx = $canvas.getContext("2d")

let movil
let interval
let frames = 0


image = new Image();
image.src = './images/car.png'
  class Background {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = $canvas.width
      this.height = $canvas.height
      this.draw()
    }

    draw(){ 
      if (this.x < $canvas.width) this.x = 0
      this.x--

      
      
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 800, 900)
      ctx.fillStyle = "gray";
      ctx.fillRect(40, 0, 300, 900)
      
      ctx.fillStyle = "white";
      ctx.fillRect(50, 0, 10, 900)
      ctx.fillRect(315, 0, 10, 900)


      for(let i =0; i <= 10; i ++){

        ctx.fillRect(200, 130*i, 10, 900/10)
      }
    }   
  }

  class Car{
    constructor(){
      this.sx = 0
      this.sy = 0
      this.width = 50;
      this.height=100
      this.x = ($canvas.width / 2) - (this.width / 2);
      this.y = $canvas.height -150;
      this.img = new Image()
      this.img.src = './images/car.png'
      this.img.onload = () =>{
      this.draw()
      
      }
    }
    draw(){
        ctx.drawImage(this.img,this.x,this.y, this.width, this.height)
      }
      goRight() {
        if (this.x > $canvas.width - 100) return
        // ctx.clearRect(this.x,this.y,this.width,this.height)
        this.x += 10
        //this.draw()
        this.move()
      }
      goLeft() {
        if (this.x <= 25) return
        ctx.clearRect(this.x,this.y,this.width,this.height)
        this.x -= 10
        //this.draw()
        this.move()
      }

      move() {
        // this.x += 34
        console.log(carrito)
        fondo.draw()
        this.draw()

      }
  }

  const carrito = new Car(0, $canvas.heigh - 200)



  const fondo = new Background(300, 800)






  document.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
      case 39: 
      console.log(carrito)
        return carrito.goRight()
  
      case 37:
        return carrito.goLeft()
    }
  })
   

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    // startGame();

    // function startGame() {
      fondo.draw()
      bocho= new Car()
     bocho.draw()
    // }
  }

  };
  


 


