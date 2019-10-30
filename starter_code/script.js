const ctx = document.querySelector("#game-board").getContext('2d');  

class Car{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }  
}
Car.prototype.move = moveCar;

let carImg = new Image();
carImg.src = './images/car.png';

let stickMan = new Image();
stickMan.src ='./images/PV.png';



function drawSelf(u, obs){
    if(obs){
        ctx.drawImage(stickMan, u.x, u.y, 10, 20);
        
    } else{
        ctx.drawImage(carImg, u.x, u.y, 40, 60);
    }
    
}

let frames = 0;

function mainLoop(){
    frames++;
    
    if(theGame.score>=10){
        clearInterval(mainLoop);
        alert(`YOU SPLATTERED TOO MUCH! YOU LOST! YOUR SCORE IS ${theGame.points}`);
        theGame.score = 0;
        document.querySelector("body > div > h3 > span").innerText = 0;
        theGame.points = 0;
        document.querySelector("body > div > h3:nth-child(7) > span").innerText = 0;
        
        return clearInterval(mainLoop);
        

        
        
    }else{

    ctx.clearRect(0,0,400,400);

    // this is where we draw the Car
    drawSelf(theGame.theCar, false);
    // then we draw all the obstacles
    theGame.obstacleArray.forEach((eachObstacle)=>{
        drawSelf(eachObstacle, true)
    })
    

    if(frames % 100 === 0){
        theGame.spawnObstacle()
    }

    requestAnimationFrame(mainLoop);
    

}

}



function moveCar(futureX, futureY){

    if(futureX + this.width <= 400 && futureX >= 0 && futureY + this.height <= 400 && futureY >= 0){
        this.x = futureX;
        this.y = futureY;
    }
    // if(futureX + Car.width >= 400){

    //     Car.x = futureX

    //     setTimeout(()=>{
    //         Car.x -= 30;
    //         Car.width = 35;
    //         Car.height = 35;
    //     },100)
        

    //     setTimeout(()=>{
    //         Car.width = 20;
    //         Car.height = 20;
    //     },200)
    // }
}

let speed = 15;


document.onkeydown = function(e){

 

    if(e.key === "ArrowUp"){
        if(
            theGame.collisionDetect(theGame.theCar.x, theGame.theCar.y -speed)
        ){
            theGame.theCar.move(theGame.theCar.x, theGame.theCar.y -speed)
        }

    }
    if(e.key === "ArrowDown"){
        if(
            theGame.collisionDetect(theGame.theCar.x, theGame.theCar.y +speed)
        ){
            theGame.theCar.move(theGame.theCar.x, theGame.theCar.y +speed)
        }
       
    }
    if(e.key === "ArrowLeft"){
        if(
            theGame.collisionDetect(theGame.theCar.x - speed, theGame.theCar.y)
        ){
            theGame.theCar.move(theGame.theCar.x - speed, theGame.theCar.y)
        }
    }
    if(e.key === "ArrowRight"){
        if(
            theGame.collisionDetect(theGame.theCar.x + speed, theGame.theCar.y)
        ){
            theGame.theCar.move(theGame.theCar.x + speed, theGame.theCar.y)
        }
    }
}
   










class Obstacle{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveDownForever(){
       let blah = setInterval(()=>{
        //    each setInterval function gets a unique ID
        // were using blah here to save this ID
            this.y += 10;

            if(this.y > 400){
                clearInterval(blah)
            }

        },100)


    }

}



document.querySelector("#start-button").onclick = startGame;


let theGame;

function startGame(){    
     theGame = new Game();
    mainLoop();
}