let myCar = {
    ctx: undefined,
    height: undefined,
    width: undefined,
    imgCar: new Image(),
    speed : 15,

    initCar: function() {
        
        this.ctx = startGame.ctx
        this.width = startGame.winW /2 -25
        this.heigth = startGame.winH -130
        
    },
    
    showCar : function () {
        this.imgCar.src = "./images/car.png"
        //console.log(img)
        // Esperar a su carga previo a randerizarla en Canvas
        this.imgCar.onload = () => this.ctx.drawImage(this.imgCar, this.width, this.heigth ,50, 120)

    },

    moveCar : function () {
        document.onkeydown = e => {
        e.keyCode === 37 ? myCar.goLeft() : null
        e.keyCode === 39 ? myCar.goRight() : null
        }
    },

    goLeft : function () {
        console.log(this.width)
        this.width -= this.speed
        console.log(this.width)
    },

    goRight : function () {
        this.width += this.speed
        console.log(this.width)
    }
}