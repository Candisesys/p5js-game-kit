var mgr
var scene
function setup() {
    createCanvas(600, 500);
    mgr = new SceneManager()
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