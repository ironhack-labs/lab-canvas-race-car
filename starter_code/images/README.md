![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | FlappyBirds

## Introduction

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_6706fdbfdce80220b94fc6c04e2c990d.jpg)

The famous FlappyBird is a game developed by Vietnamese video game artist and programmer Dong Nguyen, under his game development company [dotGEARS](https://en.wikipedia.org/wiki/DotGEARS).

The objective is to direct a flying bird, named "Faby", who moves continuously to the right, between sets of pipes. If the player touches the pipes, they lose. Faby briefly flaps upward each time that the player clicks on the spacebar; if the screen is not tapped, Faby falls because of gravity.

If you want to understand better the game, go ahead and play a bit [here](http://flappybird.io/)

### Requirements

- [Fork this repo]()
- Clone this repo into your `~/code/labs`
- The images are also included in the repository

## First iteration: Let's create our board

You notice we have a `div` with **game-board** `id` in our HTML file, so you need to create the `canvas` element inside it from our `javascript` file.

After adding the `canvas`, you should add the `background`. In the `images` folder, you will find the file you should use for it.

:::info
:wink: Check the Learning Unit to remember how to do an infinite loop with an image!
:::


## Second Iteration: Create our Player

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5279ab3427a72a2fbf77cbc9e2b32664.png)

We have the `canvas` with our beautiful background. Now we need to add ´Faby´.

Remember he should have the following properties:

- `width`
- `height`
- `speedX`
- `speedY`
- `gravity`
- `gravitySpeed`

And the functions `update` and `newPos` to keep updating its position in every update.

We should also check the user iteration when he clicks the **spacebar**. Every time the **spacebar** is clicked, the `gravity` of 'Faby' should change to negative, and after the user removes the clicking finger, set the `gravity` to positive again.

## Third Iteration: Creating the obstacles

<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_032b5d79ab1c7412e747473b679f0b59.png" alt="" style="width:450px; float:right; margin-left: 50px"/>

You need to add some obstacles to make this fun. If you notice every time we create obstacles we should create two of them and position one at the top, and the other at the bottom, and of course make a gap between them where 'Faby' could pass.

It might be a good idea to create an array to store all our obstacles. This will help us later to move them, and check if 'Faby' crash with one of them.

For now, just push them into the array.

## Fourth Iteration: Updating our Canvas

This is the most important function in our project. The `update` function should do the following:

- Clear the `canvas`
- Update obstacles position
- Update our player position
- Create new obstacles

:::info
For creating **new obstacles**, we recommend to do it every certain amount of updates. You should consider adding a counter to see how many time we update our `canvas`.
:::

## Fifth Iteration: Checking crashes

When 'Faby' crash to one of the obstacles, or goes out of the `canvas` the game should stop.

In this iteration, you need to create a function that checks if 'Faby' have not crush to any obstacle. For that purpose you can use the array of obstacles we had to create, iterating over it and checking the position.

### BONUS: Adding points

If we want to challenge somebody, we need to know who makes more points. Go ahead and add it to the game.

Oh! And when you lose, show how much they get!

:bulb: You can use the counter we add to the update function!
