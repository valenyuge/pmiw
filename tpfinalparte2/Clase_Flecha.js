class Flecha {
  constructor() {
    this.suelo = height - 50;
    this.width = 50;  
    this.height = 20;
    this.x = width;  
    this.y = this.suelo - 120;  
    this.velocidad = random(6, 12);  
  }

  mostrar() {
    image(imagenFlecha, this.x, this.y, this.width, this.height);  
  }

  avanzar() {
    this.x -= this.velocidad;  
  }

  colision(player) {
    return (
      player.x + player.r > this.x &&
      player.x < this.x + this.width &&
      player.y + player.r > this.y &&
      player.y < this.y + this.height
    );
  }

  fueraPantalla() {
    return this.x < -this.width;
  }
}
