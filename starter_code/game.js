class Game{
    constructor(){
        this.theCar = new Car(180, 380, 20,20),
        this.obstacleArray = []
        this.score = 0; 
        this.points = 0;
    }

    spawnObstacle(){
        let rX = Math.floor(Math.random() * 200);
        let rY = Math.floor(Math.random() * 200);
        let newObstacle = new Obstacle(rX, rY, 10, 20);
        this.obstacleArray.push(newObstacle);
        newObstacle.moveDownForever();
    }

    clearUnusedObstacles(){
        this.obstacleArray.forEach((ob, i)=>{
            if(ob.y > 400){
                this.obstacleArray.splice(i, 1)
            }
        })
    }


    collisionDetect(futureX, futureY){
        let canMove = true;

        this.obstacleArray.forEach((obs)=>{

            console.log(futureX, futureY, this.theCar.width, this.theCar.height, obs.x, obs.y, obs.width, obs.height)

           
        if(futureX + this.theCar.width >= obs.x && futureX <= obs.x + obs.width 
            && futureY + this.theCar.height >= obs.y && futureY <= obs.y + obs.height){
                this.score +=1;
                document.querySelector("body > div > h3 > span").innerText = this.score;
                canMove = false;
                obs.x = 0;
                obs.y = 0;
               

             } else{
                 
                  this.points +=1;
                    document.querySelector("body > div > h3:nth-child(7) > span").innerHTML = this.points;   
                 
                
             }
        })
       
        return canMove;
    }

    

   
   


    }

