window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const roadImage = new Image();
    roadImage.src = 'images/road.png';

    const carImage = new Image();
    carImage.src = 'images/car.png';

    const carWidth = 60;
    const carHeight = 120;
    let carX = canvas.width / 2 - carWidth / 2;
    const carY = canvas.height - carHeight;
    let isMovingLeft = false;
    let isMovingRight = false;


    let obstacles = [];
    let i=0;
    let score = -20;

    roadImage.onload = function() {
      // Objeto para mover la imagen de la carretera
      const roadImageMove = {
        img: roadImage,
        y: 0,
        speed: 1, // Cambia el valor a positivo para mover la carretera hacia abajo
        draw: function() {
          this.y += this.speed; // Incrementa la posición vertical de la carretera

          if (this.y >= canvas.height) {
            this.y = 0; // Reinicia la posición de la carretera al llegar al final
          }

          // Dibuja la imagen de la carretera en la posición actual y la posición anterior
          ctx.drawImage(this.img, 0, this.y, canvas.width, canvas.height);
          ctx.drawImage(
            this.img,
            0,
            this.y - canvas.height,
            canvas.width,
            canvas.height
          );
        }
      };

      carImage.onload = function() {
        // Dibuja la imagen de la carretera y el coche en su posición inicial
        ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(carImage, carX, carY, carWidth, carHeight);
      };

    class Rectangle {
      constructor (x,w) {
        this.x = x;
        this.y = -40;
        this.w = w;
        this.h = 40;    
      }

      print() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,this.w,this.h)
      }
    
      recalculatePosition() {
        this.y += 2;
        
      }
    

    }


      function updateCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        roadImageMove.draw(); // Dibuja la carretera en movimiento

        if (isMovingLeft) {
          carX -= 5; // Ajusta el valor para la velocidad deseada de movimiento hacia la izquierda
        } else if (isMovingRight) {
          carX += 5; // Ajusta el valor para la velocidad deseada de movimiento hacia la derecha
        }

        ctx.drawImage(carImage, carX, carY, carWidth, carHeight); // Dibuja el coche en su nueva posición

        

      }
      let newObstacle = new Rectangle()
      
      newObstacle.recalculatePosition();
      newObstacle.print();

      setInterval(updateCanvas, 1000 / 60); // Actualiza el lienzo del juego a 60 FPS

    };

    // Event listeners para detectar las teclas de flecha presionadas y liberadas
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        isMovingLeft = true; // Activa el movimiento hacia la izquierda al presionar la flecha izquierda
      } else if (event.key === 'ArrowRight') {
        isMovingRight = true; // Activa el movimiento hacia la derecha al presionar la flecha derecha
      }
    }

    function handleKeyUp(event) {
      if (event.key === 'ArrowLeft') {
        isMovingLeft = false; // Desactiva el movimiento hacia la izquierda al soltar la flecha izquierda
      } else if (event.key === 'ArrowRight') {
        isMovingRight = false;
      }
    }

  }
};