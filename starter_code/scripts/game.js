class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.context = $canvas.getContext('2d');
       
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
        // window.onload = function() {  
        //     };
        //     // function startGame()      
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
        this.board = new Board(this);
        this.board.paint();
        console.log("painting board");

        this.car = new Car(this);
        this.car.paint();
    }
      
}