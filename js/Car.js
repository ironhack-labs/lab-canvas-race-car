class Car {
    constructor(ctx) {
        this.ctx = ctx;
        this.carHeight = 100
        this.carWidth = 80
        this.x = canvas.width / 2
        this.y = canvas.height - this.carHeight
        this.carImg = new Image()
        this.carImg.src = './images/car.png'
    }

    drawCar = () => {
        this.ctx.drawImage(this.carImg,this.x,this.y,this.carWidth,this.carHeight)
    }

    controls = (code) => {
        if (code === 'ArrowLeft') this.x -= 10
        if(code === 'ArrowRight') this.x += 10
    }
}
    

    // constructor(classGame, x, y, w, h, imageSrc){
    //     super(classGame, x, y, w, h, imageSrc); 

    //     this.immunity = false; 
    //     this.lives = 3; 
        
    // }

    // move(){
    //     document.addEventListener("keydown", (event) => {
    //         // console.log(event.code); 
    //         switch(event.code){
    //             case "ArrowRight":
    //             case "KeyD":
    //                 this.x += 10;
    //                 break; 
    //             case "ArrowLeft":
    //             case "KeyA":
    //                 if (this.x > 0) this.x -= 10; 
    //                 break; 
    //             case "ArrowUp":
    //             case "KeyW":
    //                 this.y -= 10;
    //                 break; 
    //             case "ArrowDown": 
    //             case "KeyS": 
    //                 this.y += 10; 
    //                 break;
    //             default: 
    //                 console.log("You are not using arrow keys!"); 
    //         }
    //     })
    // }

    // switchImmunity(){
    //     this.immunity = true; 

    // setTimeout(() => {
    //     this.immunity = false;
    // }, 1000); 
    // }
