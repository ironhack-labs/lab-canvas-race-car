export function loaderImage(url) {
    return new Promise(resolve => {
        const image = new Image();

        image.addEventListener('load', () => {
            resolve(image)
        });

        image.src = url;
    })
}


export function loadCar() {
    return loaderImage('images/car.png').then(
        image => {
            return image;
        }
    )
}