

window.onload = function() {
    console.log('working')
//canvas
    var canvas = document.getElementById('qanbitas')
    console.log('info canvas:'+canvas);
    var ctx = canvas.getContext('2d')
//variables
    var interval
    var frames = 0
    var images = {
        bg: "http://pixelartmaker.com/art/f24b692e2bcb754.png",
        droid: "http://www.pngmart.com/files/4/Android-PNG-Free-Download.png",
        truck: "https://i.pinimg.com/originals/0c/f8/40/0cf8401fa818ae17aa794014fcb12615.png",
        logo: "./images/logo.png"
    }
    var music = {
        start: 'https://cf-media.sndcdn.com/134tWjwmYFvg.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMTM0dFdqd21ZRnZnLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1NDE3OTE3ODF9fX1dfQ__&Signature=pEvQRa3lUL~6NsWcxeqansa60qZL9hXuRzpImrHaTLbA3mZ~TqLbDXjlj5PtFE-EKMJViavOg141iKRc-uce~PSlyQxdRt9TI~U95GnRLPaoLgX9NGoMJnPD4A2zzdU1H3F85TsnW4TgTGwIxqlym4jsdswnALnRgD-s3flY4SWXrGOe8HKp0Zhi~z8GU3aqyqljWrPAK-hdgXSA2LK4UqbRS004dwiO-eZXYOb2IviYyWKBPPejxvkr41i9Q15EP~ft28tykJGGCbz5zu7OrviEPkGyoYPLcAy4GCuWe1AXA8Vs1vvvspo0Xr697Kt4qqH50msDJ2I1ksc-DPIURA__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ',
        lost: 'https://fsb.zobj.net/download/bYVkR2Yfw2lB1gRozIpMSiJMoIctaCmcY8kTlW6IpaiUZinMG18tSLGc1-9Ljc16Nifn9EHN8moC8c9F0MVOPccvMMwnkyzuih3JV1an3DoDLlbsWBDqK4bGcXoQ/?a=web&c=72&f=for_the_damaged_coda.mp3&special=1541789789-mzWdHQJLTplbbQDxOrEmvVXWmh5W8PHHlOWgud1a2No%3D',
    }
    var pipes = []
    var trucks = []
//clases
    function Board(){
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.image = new Image()
        this.image.src = images.bg
        //this.image.onload = ()=>this.draw()
        this.draw = function(){
            this.y++
            if(this.y > this.height) this.y = 0
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            ctx.drawImage(this.image,this.x,this.y-this.height,this.width,this.height)
        }

        this.drawScore = function(){
            ctx.font = "bold 24px Avenir"
            ctx.fillText("Score: " + Math.floor(frames/60), 50,50)
        }
    }

    function Truck(x) {
        Board.call(this)
        this.x = x;
        this.y = -120;
        this.width = 120
        this.height = 120
        this.image = new Image()
        this.image.src = images.truck
        this.draw = function(){
            this.y+=2
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        }
    }

    function Droid(){
        Board.call(this)
        this.x = 300
        this.y = 50
        this.width = 40
        this.height = 60
        this.image.src = images.droid
        //this.image.onload = ()=>this.draw()
        this.draw = function(){
            this.boundaries()
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        }
        this.boundaries = function(){
            if(this.y+this.height > canvas.height-10) {
                this.y = canvas.height-this.height
            }
            else if(this.y < 10 ) {
                this.y = 10
            }
            else this.y+=2.01

        }

        this.isTouching = function(item){
            return (this.x < item.x + item.width) &&
                (this.x + this.width > item.x) &&
                (this.y < item.y + item.height) &&
                (this.y + this.height > item.y);
        }

    } 


//instances
    var bg = new Board()
    var droid = new Droid()
    var audio = new Audio()
//main functions
    function start(){
        /*if (!audio.paused && audio.currentTime > 0 && audio.ended) {
            audio.play();
        }*/
        audio.src = music.start
        audio.play();
        pipes = []
        frames = 0
        droid = new Droid()
        if(!interval) interval = setInterval(update,1000/60)
    }
    function update(){
        frames++
        ctx.clearRect(0,0,canvas.width, canvas.height)
        bg.draw()
        droid.draw()
        drawTrucs()
        bg.drawScore()
        checkFlappyCollition()
    }
    function gameOver(){
        clearInterval(interval)
        interval = null
        ctx.fillStyle = "red"
        ctx.font = "bold 80px Arial"
        ctx.fillText("GAME OVER", 50,200)
        ctx.fillStyle = "black"
        ctx.font = "bold 40px Arial"
        ctx.fillText("Tu score: " + Math.floor(frames/60), 200,300)
        ctx.font = "bold 20px Arial"
        ctx.fillText("Presiona 'Return' para reiniciar", 50,350)
        audio.src=music.lost
        audio.play()
    }

//aux functions
    function drawCover(){
        var img = new Image()
        img.src = images.logo
        img.onload = function(){
            bg.draw()
            ctx.drawImage(img, 50,100,300,100)
            ctx.font = "bold 24px Avenir"
            ctx.fillText("Presiona la tecla 'Return' para comenzar", 50,300)
        }
    }


    function generateTrucks() {
      if(frames%150 === 0){
        var x = Math.floor(Math.random()*400)
        trucks.push(new Truck(x))
      }
    }

    function drawTrucs() {
        generateTrucks()
        trucks.forEach(function (truck) {
            truck.draw()
        })
    }

    function checkFlappyCollition(){
        for(var truck of trucks){
            if(droid.isTouching(truck)){
                gameOver()
            }
        }
    }

//listeners
    addEventListener('keyup',function(e){
        switch(e.keyCode){
            case 13:
                return
            default:
                return
        }
    } )

    addEventListener('keydown',function(e){
      console.log('keydown detected')
        switch(e.keyCode){
            case 39:
              droid.x += 10
              return
            case 37:
              droid.x -= 10
            default:
                return
        }
    } )

    drawCover()




  document.getElementById("start-button").onclick = function() {
      start()
  };


  function startGame() {

  }
};
