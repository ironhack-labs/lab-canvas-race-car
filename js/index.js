window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame.init('canvas');
    
  };
const startGame = {
    name: 'Simple game writting in canvas',
    author: 'Pedro',
    canvasId: undefined,
    ctx: undefined,
    carSize: {
        witdth: 50,
        heigth: 50
    },
    posX: undefined,
    posY: undefined,
    imgInstance: undefined,
    init(id) {
        this.canvasId = id
        this.ctx = document.getElementById(this.canvasId).getContext('2d')
        this.drawRoad()
        this.obstacles()
        this.drawCar()
        this.moveCar()
        console.log('Así es el objeto de renderizado 2D',this.ctx) 
    },
    drawRoad() {
        let imgInstance = new Image()
        imgInstance.src = 'images/road.png'
        this.ctx.drawImage(imgInstance, 10, 50, 500, 950)
    },

    drawCar(){
        this.posX = 250
        this.posY = 630
        this.imgInstance = new Image()
        this.imgInstance.src = 'images/car.png'
        setInterval(() => {
            this.ctx.strokeStyle = 'gray'
            this.clearCar()
            this.ctx.drawImage(this.imgInstance, this.posX, this.posY, this.carSize.witdth, this.carSize.heigth)
        }, 5);

    },

    obstacles(){
        this.ctx.fillRect(330, 330, 100, 80);
    },

    moveCar() {
        window.addEventListener('keydown', (event) => {
            console.log(event.keyCode)
            if (event.keyCode === 37){
                if (this.posX > 38){
                    console.log(this.posX)
                    this.posX -= 2;
                    this.ctx.drawImage(this.imgInstance, this.posX, this.posY, 50, 50)
                }
            }
            if (event.keyCode === 39){
                if (this.posX < 420){
                console.log(this.posX)
                    this.posX += 2;
                    this.ctx.drawImage(this.imgInstance, this.posX, this.posY, 50, 50)
                }
            }
        }, 5)
    },
    clearCar() {
        this.ctx.clearRect(this.posX, this.posY, this.carSize.witdth, this.carSize.heigth)
    }

    };
}
