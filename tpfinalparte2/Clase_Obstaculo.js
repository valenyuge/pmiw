class Obstacle {
  constructor(height) {
    this.suelo = 430;
    this.height = height;  
    this.width = (this.height / 480) * 350;  
    this.x = width;
    this.y = this.suelo - this.height;  
    this.velocidad = random(5, 10);  
  }

  mostrar() {
    image(imagenObstaculo, this.x, this.y, this.width, this.height); 
  }

  avanzar() {
    this.x -= this.velocidad;  
  }

  colision(player) {
    return (
      player.x + player.r > this.x &&
      player.x < this.x + this.width &&
      player.y + player.r > this.y
    );
  }

  fueraPantalla() {
    return this.x < -this.width;
  }
}
