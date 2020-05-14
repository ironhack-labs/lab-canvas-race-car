window.onload = () => {
  let game = new Game();
  document.getElementById('start-button').onclick = () => {
    game.start();
  };

};

class Game {
  car = {}; // composition pattern
  obstacles = []; // composition pattern
  start(){
    // intialize game and start rendering the game continiously
  }
  
  render(){
    // the game manages the other game elements
    this.car.render();
    this.obstacles.forEach((obstacle)=> obstacle.render());
  }

}

class Car {
  render(){
    // car dom manipulation here
  }
}

class Obstacle {
  render(){
    // obstacle dom manipution here
  }
}