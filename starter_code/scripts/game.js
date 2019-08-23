class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.context = $canvas.getContext('2d');
        this.image = new Image();
        this.image.src = "./images/car.png";
    }
    startGame(){
        // window.addEventListener('onload', function (){
        //     document.getElementById("start-button").onclick = function() {
        //         // startGame(this);
        //     this.canvas = canvas;
        //     this.context = $canvas.getContext('2d');
        //     }
            
        // });
        // console.log("hi");
        // window.requestAnimationFrame(() => this.startGame());



        // window.onload = function() {
            
        //     };
          
        
        //     // function startGame() {
             
        //     // console.log("hi");
        //     // }
        //   };
    }
   

    clear () {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.clearRect(0, 0, width, height);
      }
    
      paint () {
        this.context.fillStyle = "grey";
        this.context.fillRect(20, 0, 460, 600);
        
        this.context.fillStyle = "white";
        this.context.fillRect(40, 0, 10, 600);
        
        this.context.fillStyle = "white";
        this.context.fillRect(450, 0, 10, 600);

        this.context.strokeStyle= "white";
        this.context.beginPath();
        this.context.setLineDash([20, 15]);
        this.context.moveTo(250, 15);
        this.context.lineTo(250, 600);
        // this.lineWidth = 100;
        this.context.stroke();
        
      }

      paintCar(){
        this.context.drawImage(this.image, 100, 100,100,100);
        
        this.context.fillRect(100,100,100,100);
        console.log("carrrrrrrrrrr");     
      }
      
}