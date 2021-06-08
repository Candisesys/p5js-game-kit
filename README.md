# Documentation

## Collision
[The collision library I put here](https://github.com/bmoren/p5.collide2D) is fairly simple. These are some of the functions that are in this library.

ColideRectRect(x1, y1, w1, h1, x2, y2, w2, h2)
Returns true if the x, y, width, and height values in this function are overlapping.

ColideRectCircle(x1, y1, w1 h1, cx, cy, d)
Returns true if the x, y, width, height, and diameter values in this function are overlapping.

BMoren (the creator of this library) has a great documentation that goes into more detail. [Read it.](https://github.com/bmoren/p5.collide2D#readme)

## Scene Manager.

Now that's a different beast. This library dosen't really have documentaion that I can just link to. I learnt this library through inspecting examples.

In line 10 of the sketch.js file, you'd probably notice that there is a peice of code like this.

```javascript
scene = [scene1]
```

The values in that array are the amount of scenes. The code loads them automatically, so no worry to do anything else to the setup() function. (Unless you are loading images.)

### How to make a scene.

Ok, first you need to add a value to the scene array.

```javascript
scene = [scene1, sceneName]
```

Next, make a function with the scene name.

```javascript
function sceneName() {
  this.enter = function () {
    // setup code
  }
  this.draw = function () {
    background(220)
    // drawing code
  }
  
  this.mousePressed = function () {
    // mousePressed script
  }
  
  this.keyPressed = function () {
    // keyPressed script
  }
}
```
Ok, you're probably thinking...
"OH MY GOD, YOU DIDN'T TELL ME ABOUT THIS EXTRA CODE!"
Don't worry, I'll explain.

Add scene-specific variables like this.
```javascript
function sceneName() {
  var x;  
  this.enter = function () {
    x = 0;
  }
}
```
Now that's what the enter function is for.

The draw function is for any shapes drawn on the screen. For example...
```javascript
function sceneName() {
  this.draw = function () {
    background(220)
    rect(width/2, height/2, 50, 50);
  }
}
```
The mousepressed and keydown functions are for when any of the mouse buttons are pressed or if the key is down.

# IMPORTANT: IF YOU WANT TO ADD SOUND AND THE CODE ISNT WORKING, RUN IT THROUGH A LIVE SERVER!!! IT WILL RUN THAT WAY!!!

## Credits
[bmoren for the collision library.](https://github.com/bmoren)
[mveteanu for the scene manager.](https://github.com/mveteanu/)