// Object Global 

const game = {

    // Global Canvas Size

    canvasSize: {
        w: 500,
        h: 700
    },
    ctx: undefined,
    obstacles: [],
    framesIndex: 0,


    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
        this.setEventListeners()
        this.createCar()
        this.drawAll()
        this.setRoad()

    },

    // Canvas Set   // This is DOM 

    setDimensions(canvasId) {
        // this.canvasSize = {
        //     w: document.querySelector(canvasId).setAttribute('width', this.canvasSize.w),
        //     h: document.querySelector(canvasId).setAtribute('height', this.canvasSize.h)
        // }
    },

    // Create road

    setRoad() {

        const road = new Image();
        road.src = "./images/road.png";
        this.ctx.drawImage(road, 0, 0, 500, 700);
    },

    // Create BackGround( road ) & car

    createCar() {

        //invokation Car

        this.car = new Car(this.ctx, 250, 600, 70, 100,)
    },

    // All Creation... Car, road, obstacles...

    drawAll() {
        this.intervalID = setInterval(() => {

            //????

            this.framesIndex++

            // Elimination elements
            this.clearAll()

            // Road Creation
            this.setRoad()

            // Car Painting
            this.car.draw()

            // Obstacles Generation

            // this.obstacles.forEach(e => e.draw())
            // if (this.framesIndex % 50 === 0) {
            //     this.generateObstacles()
            // }
        }, 50)
    },

    // Elimination of old Draw

    clearAll() {
        this.intervalID = this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    setEventListeners() {
        window.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case 37:
                    this.car.moveLeft()
                    break;
                case 38:
                    this.car.moveUp()
                    break;
                case 39:
                    this.car.moveRight()
                    break;
                case 40:
                    this.car.moveDown()
                    break;
            }
        })
    }
}