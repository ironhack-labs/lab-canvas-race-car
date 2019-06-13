/** @type HTMLCanvasElement */
 class Game {
   constructor() {
     this.canvasDOMEl = undefined
     this.ctx = undefined
     this.w = 600
     this.h = 600
     this.greenField 
     this.greyRoad
     this.offset = 0;
     this.car = new Image()
     this.car.src = "./images/car.png"
     this.background = "green"
  
  


   }

   init = (id) => {
     
     this.canvasDOMEl = document.getElementById(id)
     this.ctx = this.canvasDOMEl.getContext("2d")
     this.canvasDOMEl.setAttribute("height", this.h);
     this.canvasDOMEl.setAttribute("width", this.w)
     
     
     this.setDimensions()
     //  this.drawAll()
   }

   setDimensions = () => {
     //Verde
     console.log("hola")
     this.canvasDOMEl.style.backgroundColor = this.background

     //Grey
     this.ctx.fillStyle = "rgb(128,128,128)"
     this.ctx.fillRect(this.w/8, 0, this.w*3/4, this.h)
     this.ctx.beginPath()

     //White
     this.ctx.fillStyle = "rgb(255,255,255)"
     this.ctx.fillRect(this.w/6.7, 0, this.w*3/4.3, this.h)
     this.ctx.beginPath()

     //Double-grey
     this.ctx.fillStyle = "rgb(128,128,128)"
     this.ctx.fillRect(this.w/5.4, 0, this.w*2.5/4, this.h)
     this.ctx.beginPath()


   }

  // drawAll = () => {
  //   this.drawCar()
    
  // }

 






  }







// var canvasDOMEl = document.getElementById("#canvas");

// /** @type CanvasRenderingContext2D */
// var ctx = canvasDOMEl.getContext("2d");


// var w = window.innerWidth;
// var h = window.innerHeight;
// var w2 = w / 2;
// var h2 = h / 2;

// canvasDOMEl.setAttribute("height", h2);
// canvasDOMEl.setAttribute("width", w2);

// function clearScreen() {
//     ctx.clearRect(0, 0, w, h);
// }

// const squareDimensions = 100

// // this holds the object position in the screen
// // and has to be updated everytime we press the cursors
// let dataModel = {
//     x: w2 - squareDimensions/2,
//     y: h2 - squareDimensions/2
// }

// window.onkeydown = function (e) {
//     console.log(e.keyCode)

//     const positionInc = 30

//     switch (e.keyCode) {
//         case 39: //goes to the right
//             dataModel.x+=positionInc
//             break;

//         case 37: //goes to the left
//             dataModel.x-=positionInc
//             break;

//         case 38: //goes up
//             dataModel.y-=positionInc
//             break;

//         case 40: //goes down
//             dataModel.y+=positionInc
//             break;
//     }

//     // to be completed by my favourite students :)
//     if (dataModel.y < -squareDimensions) {
//         dataModel.y = h
//     }

//     paintSquare()

// }

// paintSquare()

// function paintSquare() {
//     clearScreen()

//     ctx.beginPath();
//     ctx.rect(dataModel.x, dataModel.y, squareDimensions, squareDimensions)
//     ctx.fill();
//     ctx.closePath();


// }