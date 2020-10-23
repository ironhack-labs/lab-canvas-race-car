//// Caracteristicas do Carro
class Car {
    constructor(){
      this.x = 220;
      this.y = 520;
      this.width = 50;
      this.height = 80;
      this.img = '/images/car.png';
    }
    drawCar(){ /// desenhar o carro no canvas
      const carImg = new Image();
      carImg.src = this.img;
      ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
    }
    moveCar(keyCode){
      console.log('x', this.x);
      console.log('y', this.y);
      ctx.clearRect(this.x, this.y, this.width, this.height); //limpar coordenadas do carro onde esta no momento. limpar sempre a posicao do carro sempre
      switch(keyCode){
        case 37:
        if(this.x > 20){ //Making sure car doesn't go off the road
          this.x -= 10; //moving to the left i need to decrease the x axis
        }
          break;
        case 39:
        if (this.x < 430 ){ //Making sure car doesn't go off the road
          this.x += 10; //moving to the left i need to increase the x axis
        }
          break;
      }
    }
  }