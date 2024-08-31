function dibujo(cantX, cantY) {
  let modX = 400 / cantX;
  let modY = 400 / cantY;
  for (let j = 0; j < cantY; j++) {
    for (let i = 0; i < cantX; i++) {
      let esPar = (i + j) % 2 == 0;
      fill(esPar? color1 : color2);
      rect(400 + i * modX, j * modY, modX, modY);
      fill(esPar? color2 : color1);
      ellipse(400 + i * modX + modX / 2, j * modY + modY / 2, 18, 18);
    }
  }
}
