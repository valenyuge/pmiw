// Valentin Sebastian Yuge 92715/7 TP1 pmiw Comision 3
// https://youtu.be/lKXykCrXRu8

let img;
let color1, color2

function preload() {
  img = loadImage('https://as1.ftcdn.net/v2/jpg/02/98/99/64/1000_F_298996465_FjkuaOBwnzmrsijFQZn0pE9XVltuoP2t.jpg');
}

function setup() {
  createCanvas(800, 400);
  color1 = color(0)
  color2 = color(255)
}

function draw() {
  background(255);
  dibujo(10,10);
  image(img, 0, 0, 400, 400);
}
