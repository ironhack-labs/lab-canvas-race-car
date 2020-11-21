// class Start{
//     constructor(canvas){
//         this.canvas = canvas;
//         this.ctx = this.canvas.getContext("2d");
//         this.car;
//         this.road;
//         this.obstacle;
//     }

//     randomLoop () {
      
//       this.car = new Car(canvas);
//       this.road = new Road(canvas);
//       this.obstacle = new Obstacles(canvas);

//             this.updateCanvas();
//             this.clearCanvas();
//             this.drawCanvas();   

//       window.requestAnimationFrame(this.randomLoop);
//     }

//     updateCanvas(){
          
//             // this.obstacle.update();
//         }
   

//         clearCanvas(){
//           this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
//       }
  
//       drawCanvas(){
//           this.road.draw()
//           this.car.draw();
//           this.obstacle.draw();
//       }
  
//   } 
  
//   document.addEventListener('keydown', e => {
//     switch (e.keyCode) {
//       case 37: this.car.moveLeft();  break;
//       case 39: this.car.moveRight(); break;
//     }
//   });    