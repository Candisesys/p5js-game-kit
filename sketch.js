var mgr
var scene
function preload() {
    // Put sounds here.
}
function setup() {
    // Put images here.
    createCanvas(600, 500);
    mgr = new SceneManager()
    // Add another scene to the "scene" variable in order for it to be a valid scene.
    scene = [scene1]
    for (var s in scene) {
      mgr.addScene(scene[s])
    }
    mgr.showNextScene()
}
// p5 events
function draw() {
    mgr.draw()
}

function mousePressed() {
  mgr.handleEvent("mousePressed")
}
function keyPressed() {
  mgr.handleEvent("keyPressed")
}
// Scenes
function scene1() {
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
