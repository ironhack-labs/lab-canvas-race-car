![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Canvas RaceCar

## Introduction

We are ready to start making some games with `canvas` help, so in this first exercise we will a **Car Race** using some basic animations we learned today.

Remember you have the Learning Units to check any concept you might need. We are working with `2D` context, so you should think the canvas is a cartesian plane, where you can move elements changing their position in any of the `axis`.

### Requirements

- [Fork this repo]()
- Clone this repo into your `~/code/labs`
- The images are also included in the repository

## 1. First iteration: Draw the Game Board


![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ab5a6ba28003829bd3d8d485feeee649.png)

The first thing we need is to create our board. The left side of the image is already on the HTML file, but when we click on the **StartGame** button, we need to create the canvas and display our road.

## 2. Second Iteration: Draw Player´s Car

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_9a8f35a079a1343f39cee4028ab8a081.png)

Once we have our road, we need the player´s car. On the `images` folder, you will find a `.png` file you should use for the player.

## 3. Third Iteration: Make Player´s Car move right and left

In our game, the player will only be able to move the car to the right and left. Using `left` and `right` arrows, the player should be able to move the car.

:bulb: Remember the boundaries!

## 4. Fourth Iteration: Create Obstacles

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_618fa6bbeed08f1e74b9457af1ecaf4c.png)

Now let´s make this interesting. We should create obstacles that shows up every certain amount of times. (Remember how we did them on the Learning Unit). In this iteration, just limit to create them :wink:

They will always start in the position **0** of the `y` axis, but you should make them appear in a random place of the `x` axis.

## 5. Fifth Iteration: Move the Obstacles

For moving the obstacles, we need to continuously update our `canvas`. In this iteration you need to continuously change the position of the obstacles in every update, making them move down the road.

## 6. Bonus Iteration: Points, Points, Points

Oh! If we want to challenge somebody, we need to quantify who is making it better. So we need to add a **score**. Go ahead and add a method to count points while you keep the car avoiding obstacles.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e4b1a09cee1b1a827a2c68023d0d2b1f.png)

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4e64a09180fd0add2766f7e28ebce6bf.png)
