const game ={

    canvasSize: {
        w: 500,
        h: 700
    },
    ctx: undefined,
    obstacles: [],
    framesIndex: 0,

    init(canvasId){
        this.ctx = document.querySelector('#canvas').getContext('2d'),
        this.setDimensions(canvasId),
        this.setEventListeners(),
        this.createCar(),
        this.drawAll()
        this.drawRoad()

    },
    setDimensions(canvasId){
    //      this.canvasSize = {
    //          w: document.querySelector(canvasId).setAttribute('with', 500),
    //          y: document.querySelector(canvasId).setAttribute('height', 700)
    // }
},
    
    setEventListeners(){
        window.addEventListener('keydown', e => {
            console.log(e.keyCode)
            switch(e.keyCode){
                case 37:
                this.coche.moveLeft();
                break;  
                case 38:
                this.coche.moveUp();
                break;
                case 39:
                this.coche.moveRight();
                break;
                case 40:
                this.coche.moveDown();
                break;
            }
})
    },
    drawRoad(){
        const road = new Image()
        road.src = './images/road.png'
        this.ctx.drawImage(road, 0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    createCar(){
        this.coche = new Car(this.ctx, 230, 600, 60, 100)
    },

    drawAll(){
        setInterval(() =>{

            this.framesIndex++
            //this.clearAll()
            this.drawRoad()
            this.coche.draw()
            this.obstacles.forEach(elm => elm.draw())
            if(this.framesIndex % 50 === 0){
                this.generateObstacles()
            }

        }, 50)
    }


}