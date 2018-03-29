var RIGHT_KEY = 39;
var LEFT_KEY = 37;
var misObstaculos = [];

window.onload = function() {
	document.getElementById('start-button').onclick = function() {
		startGame();
	};

	function startGame() {
		function Canvas(id) {
			this.canvas = document.getElementById(id);
			this.w = 500;
			this.h = 800;
			this.x = 200;
      this.y = 700;
			this.ctx = this.canvas.getContext('2d');
      this.moveCar();
      

       
  
			setInterval(
				function() {
					this.clear();
					this.draw();
				}.bind(this),
				1000 / 120
      );
      
      setInterval(
				function() {
					//this.laYdelObstaculo++;
				}.bind(this),
				1/100
      );
		}

		Canvas.prototype.drawRect = function(x, y, width, height, color) {
			this.ctx.fillStyle = color;
			this.ctx.fillRect(x, y, width, height);
		};


		Canvas.prototype.drawMessage = function(x, y, message) {
			this.ctx.font = '30px sans-serif';
			this.ctx.lineWidth = 1;
			this.ctx.fillText(message, x, y, 250);
		};

		Canvas.prototype.setRandomColor = function() {
			function rand() {
				return Math.floor(Math.random() * 255);
			}

			var color = rand() + ',' + rand() + ',' + rand();

			this.ctx.fillStyle = 'rgba(' + color + ')';
			this.ctx.strokeStyle = this.ctx.fillStyle;
		};

		Canvas.prototype.clear = function() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		};

		Canvas.prototype.draw = function() {
			this.carretera();
      this.drawImage();
      this.obstaculo();
      
    };
    
    Canvas.prototype.carretera= function(){
      this.drawRect(0, 0, this.w, this.h, 'green');
			this.drawRect(50, 0, this.w - 100, this.h, 'grey');
			this.drawRect(70, 0, 20, this.h, 'white');
			this.drawRect(this.w - 90, 0, 20, this.h, 'white');
			for (let i = 0; i < 15; i++) {
				this.drawRect(this.w / 2, 1 + i * 60, 6, 40, 'white');
			}
    }

    Canvas.prototype.generarObstaculos = function(){
      for (let i = 0; i <100; i++){
      var objetoObstaculo = {
          x: Math.floor(Math.random()*400),
          y: 0 - (160*i),
          w: Math.floor(Math.random()*60+100),
          h: 40}
      misObstaculos[i]= objetoObstaculo;
    }

    }

    Canvas.prototype.obstaculo = function(){
     for (let i = 0; i < misObstaculos.length; i++){
       misObstaculos[i].y = misObstaculos[i].y+1;
      this.drawRect(misObstaculos[i].x, misObstaculos[i].y , misObstaculos[i].w, misObstaculos[i].h , 'black');  
     }
    };

		Canvas.prototype.drawImage = function() {
			this.img = new Image();
			this.img.src = './images/car.png';
			this.img.onload = function() {
				this.ctx.drawImage(this.img, this.x, this.y, 45, 70);
			}.bind(this);
		};

		Canvas.prototype.moveCar = function() {
			document.onkeydown = function(event) {
				var d = 15;
				switch (event.keyCode) {
					case RIGHT_KEY:
						if (this.x <= 440) {
							this.x += d;
						}
						break;
					case LEFT_KEY:
						if (this.x >= 10) {
							this.x -= d;
						}
						break;
				}
			}.bind(this);
		};
    var canvas = new Canvas('my-canvas');
    canvas.generarObstaculos();
		canvas.draw();
	} //StarGame
}; //onload


