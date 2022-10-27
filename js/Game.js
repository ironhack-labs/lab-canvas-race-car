const Game = {
    
    FPS:60,
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    heigth: undefined,

    car:undefined,
    background:undefined,
    
    winImg: undefined,
    obtacles:undefined,
    arrayObtacles: [],

    intervalID:undefined,
    intervalID2:undefined,
    
    Init(){
        this.canvas = document.querySelector('#canvas');
        this.ctx = this.canvas.getContext('2d');
      
        this.setDimensions()
        this.star()
    },

    setDimensions(){
        this.width = 500
        this.heigth= 700
        
        this.canvas.width= this.width
        this.canvas.heigth= this.heigth
    },

    star() {
        this.generateALL()
        
        this.intervalID=setInterval(()=>{
            this.clearAll()
            this.drawALL()
            this.printObtacles()
            
        }, 1000/this.FPS)
        
        this.intervalID=setInterval(()=>{
            this.generateObtacle()
            console.log(this.arrayObtacles)

        }, 2000)

    },

    generateObtacle(){
        this.obtacles= new Obtacles(this.ctx, this.width, this.heigth)
        this.arrayObtacles.push(this.obtacles)
        if (this.arrayObtacles[0].posY > 500){
            this.arrayObtacles.shift()
        }
    },

    printObtacles(){
        this.arrayObtacles.forEach(element => {
            element.draw()
            
        });
    },

    destroyObtacles(){
        this.arrayObtacles.array.forEach(element, index => {
            if (element.posY<100){
                console.push(element[index])
            }
            
        });

    },

    drawALL(){
        this.background.draw()
        this.car.draw()

        

    },

    generateALL(){
        this.background= new Background(this.ctx, this.width, this.heigth)
        this.car = new Car(this.ctx, this.width, this.heigth)
        

    },

    clearAll(){
        this.ctx.clearRect(0, 0, this.width, this.height)

    },
} 