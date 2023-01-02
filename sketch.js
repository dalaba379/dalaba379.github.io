
let theta = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(250);
  translate(0, 0, 0);//座標
  normalMaterial();
  push();
  //旋轉方向
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  sphere(150)//形狀大小
  pop();
  theta += 0.05;//speed
}

function mouseClicked() {
    var triColor = color(random(0, 255), random(0, 255), random(0, 255));