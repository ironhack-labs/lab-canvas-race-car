const drawingApp = {
    name: 'Race car',
    author: 'Amanda Ordoñez',
    canvasId: undefined,
    cntx: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },

    init(id) {
        // Some initial values
        this.canvasId = id
        this.cntx = document.getElementById(this.canvasId).getContext('2d')
        this.setEventListeners()
        // console.log('Así es el objeto de renderizado 2D', this.cntx)  
        this.obstacleLim = {
            limLeft : 20,
            limRight: 340,
            minW: 125,
            maxW: 350
        }
    },


    drawBck() {
        // Drawing the background. First, the green rectangles
        this.cntx.fillStyle = 'green'
        this.cntx.fillRect(0, 0, 45, this.canvasSize.h)
        this.cntx.fillRect(this.canvasSize.w - 45, 0, 45, this.canvasSize.h)

        // The line grey
        this.cntx.fillStyle = 'grey'
        this.cntx.fillRect(45, 0, 8, this.canvasSize.h)
        this.cntx.fillRect(this.canvasSize.w - 53, 0, 8, this.canvasSize.h)

        // The white line. This are the limits of the playground
        this.cntx.fillStyle = 'white'
        this.cntx.fillRect(53, 0, 8, this.canvasSize.h)
        this.cntx.fillRect(this.canvasSize.w - 61, 0, 8, this.canvasSize.h)

        // The road
        this.cntx.fillStyle = 'grey'
        this.cntx.fillRect(61, 0, 378, this.canvasSize.h)

        // The dashed line
        this.cntx.lineWidth = 8     
        this.cntx.strokeStyle = 'white'
        this.cntx.beginPath()       //Start to create the line
        this.cntx.setLineDash([70, 50])     //Do dashed
        this.cntx.moveTo(246, this.canvasSize.h)    // The line start from bottom because the dashed line look better in this form
        this.cntx.lineTo(246, 0)    // End of the line on the top
        this.cntx.stroke()          //Create the line
        //Define the border of the road
        borderLeft = 0 + 45
        borderRight = this.canvasSize.w - 45 - 8 - 8
        this.roadBorder = {
            left: borderLeft,
            right: borderRight
        }
    },

    drawGO(score) {
        // Draw the game over screen: black with red letters. Give the final score
        this.cntx.fillStyle = 'black'
        this.cntx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.cntx.fillStyle = "red"
        this.cntx.font = '75px serif';
        this.cntx.fillText('Game Over', 10, this.canvasSize.h / 2 -100);
        this.cntx.font = '50px serif';
        this.cntx.fillText(`Your Score: ${score}`, 10, this.canvasSize.h / 2 +100 );
    },

    drawScore(seconds) {
        // Draw the score in the upper of the screen
        this.cntx.fillStyle = "red"
        this.cntx.font = '40px serif';
        this.cntx.fillText(` Score: ${seconds}`, this.canvasSize.w / 2, 50);
    },

    draw() {
        // The initial values for the car
        // carPosX = 225
        // carPosY = this.canvasSize.h - 90
        // carW = 40
        // carH = 80
        //Create the car using their class
        this.car = new Car(this.cntx, 225, this.canvasSize.h - 90, 40, 80, "images/car.png")

        //Create the first obstacle
        this.rndX = Math.random() * (this.obstacleLim.limLeft - this.obstacleLim.limRight) + this.obstacleLim.limRight
        this.rndWidth = Math.random() * (this.obstacleLim.maxW - this.obstacleLim.minW - this.rndX) + this.obstacleLim.minW
        this.obstacle = [new Obstacle(this.cntx, Math.floor(this.rndWidth), 20, Math.floor(this.rndX), 0)]

        // Define the frame, an inner counter to the game
        this.frame = 0
        this.score = 0

        let myInterval = setInterval(() => {
            this.frame++ //Update the frame
            this.score = Math.floor(this.frame *2) // The Score
            this.clearScreen()  //Start the drawing
            this.drawBck()      //Draw background
            this.car.draw()     //Draw the car
            this.drawScore(this.score) //Draw the score
            // Add a new obstacle in a random position
            if (this.frame % 20 == 0) {
                //Define new random values
                this.rndX = Math.random() * (this.obstacleLim.limLeft - this.obstacleLim.limRight) + this.obstacleLim.limRight
                this.rndWidth = Math.random() * (this.obstacleLim.maxW - this.obstacleLim.minW - this.rndX) + this.obstacleLim.minW
                //Add the osbtacle
                this.obstacle.push(new Obstacle(this.cntx, Math.floor(this.rndWidth), 20, Math.floor(this.rndX), 0))
            }
            //Draw all the obstacles in the screen
            this.obstacle.forEach(elm => {
                elm.draw()
                this.frame % 2 == 0 ? elm.move() : null // The obstacles are moving
                //The colision
                if (this.car.carPos.x < elm.obstPos.x + elm.obstDim.w &&
                    this.car.carPos.x + this.car.carSize.w > elm.obstPos.x &&
                    this.car.carPos.y < elm.obstPos.y + elm.obstDim.h &&
                    this.car.carPos.y + this.car.carSize.h > elm.obstPos.y) {
                    clearInterval(myInterval) // Stop the animation
                    this.clearScreen() 
                    this.drawGO(this.score) // Draw the game over screen, with the score
                }
            })       
        }, 50)     
    },
   
    setEventListeners() {
        //Detect when the arrow keys are pressed
        document.onkeydown = e => {
            if (e.keyCode == 37) {
                this.car.move("left")
            }
            if (e.keyCode == 39) {
                this.car.move("right")
            }   
        }
    },
    // Clean the screen
    clearScreen() {
        this.cntx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    
}
// Define the class car
class Car {
    constructor(cntx, posX, posY, carW, carH, imageName) {
        this.cntx = cntx
        this.carPos = {
            x: posX,
            y: posY
        }
        this.carSize = {
            w: carW,
            h: carH
        }
        this.imageName = imageName
        this.imageInstance = new Image()
        this.imageInstance.src = this.imageName
        this.init()
    }
    init() {
        this.roadBorder = {
            left: 45,
            right: 439
        }
    }
    // Draw the car using the image
    draw() {
        this.cntx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
    // Move the car in the selected direction
    move(dir) {
        if (dir == "left" && this.carPos.x > this.roadBorder.left + this.carSize.w / 2) { 
            this.carPos.x -= 8
        }
        if (dir == "right" && this.carPos.x < this.roadBorder.right - this.carSize.w ) {
            this.carPos.x += 8
        }
    }
    
}
//Define the class obstacle
class Obstacle {
    constructor(cntx, obstW, obstH, posX, posY) {
        this.cntx = cntx
        this.obstDim = {
            w: obstW,
            h: obstH
        }
        this.obstPos = {
            x: posX,
            y: posY
        } 
    }
    // Draw the obstacles
    draw() {
        this.cntx.fillStyle = 'brown'
        this.cntx.fillRect(this.obstPos.x, this.obstPos.y, this.obstDim.w, this.obstDim.h)
    }
    // Move the obstacle from top to bottom
    move() {
        this.obstPos.y +=20
    }

}