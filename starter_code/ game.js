

/** @type HTMLCanvasElement */

/** @type CanvasRenderingContext2D */

class Game{
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.w = 450;
        this.h = 650;
        this.intervalId;
        this.carW;
        this.cardH;
        this.carX;
        this.carY;
    }

    start(){
        this.intervalId = setInterval(() => {
            this.board();
            this.drawCar();
            // this.moveCar();
            // this.gameOver();
        }, 1000/60);
    }

    board(){
        this.canvas.setAttribute("height", this.h);
        this.canvas.setAttribute("width", this.w);
        this.ctx.fillStyle = "rgb(0, 129, 0)";
        this.ctx.fillRect(0, 0, this.w, this.h);
        this.ctx.fillStyle = "rgb(128, 128, 128)";
        this.ctx.fillRect(30, 0, this.w -60, this.h);
        this.ctx.fillStyle = "rgb(255,255, 255)";
        this.ctx.fillRect(40, 0, 17, this.h);
        this.ctx.fillStyle = "rgb(255,255, 255)";
        this.ctx.fillRect(this.w - 40, 0, -17, this.h);

    }

    drawCar(){
        this.car = new Image();

    }
   
}








// class Board{

//     constructor(w, h){

//         this.w = w;
//         this.h = h;


        
//     }

//     paint(){
//         const canvasDOMEL = document.createElement("canvas");


//     }

   
// }








// function paintBoard(){

//   const h = 650;
//   const w = 350;


//     const canvasDomel = document.createElement("canvas");

//     canvasDomel.classList.add("canvas");

//     canvasDomel.setAttribute("height", h);

//   canvasDomel.setAttribute("width", w);

//   document.querySelector("#game-board").appendChild(canvasDomel);



// }


// let ctx = canvasDomel.getContext("2d");

// paintBoard();



