window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame()
    }

    function startGame() {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        const road = new Image()
        road.src = '/images/road.png'

        setTimeout(() => {
            ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
        }, 500)

        const car = new Image()
        car.src = '/images/car.png'

        setTimeout(() => {
            ctx.drawImage(car, canvas.width / 2 - 25, canvas.height - car.height / 2 + 50, 50, 100)
        }, 500)

        class Car {
            constructor() {
                this.x = 0
                this.y = 0
            }
            moveLeft() {
                this.x -= 10
            }
            moveRigth() {
                this.x += 10
            }
        }
        const ferrari = new Car()

        document.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case 37:
                    ferrari.moveLeft()
                    console.log('izq')
                    break
                case 39:
                    ferrari.moveRigth()
                    break
            }
        })
    }
}
