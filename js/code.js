// Code from the Course

intersect(
    { x: 10, y: 10, width: 100, height: 100 },
    { x: 50, y: 0, width: 200, height: 50 }
);

let intersect = (obj1, obj2) => {
    let obj1left = obj1.x;
    let obj1top = obj1.y;
    let obj1right = obj1.x + obj1.width;
    let obj1bottom = obj1.y + obj1.height;
    let obj2left = obj2.x;
    let obj2top = obj2.y;
    let obj2right = obj2.x + obj2.width;
    let obj2bottom = obj2.y + obj2.height;
    return !(
        obj1left > obj2right ||
        obj1top > obj2bottom ||
        obj1right < obj2left ||
        obj1bottom < obj2top
    );
};

// return boolean
// Wenn sie sich berühre, return true
