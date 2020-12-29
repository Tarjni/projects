let r = 0;
let b = 255;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  // background
  r = map(mouseX, 0, 600, 0, 255); 
  b = map(mouseY, 0, 600, 255, 0); 
  background(r, 20, b);
  // ellipse
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 64, 64)

}