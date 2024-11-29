class Jugador {
  constructor() {
    this.suelo = height - 50;
    this.r = 60; 
    this.x = 50;
    this.y = this.suelo - this.r;
    this.velocidad = 0;
    this.gravedad = 0.6;
    this.salto = -12;
    this.saltando = false;
  }

  mostrar() {
    if (this.saltando) {
      image(imagenSaltando, this.x - this.r / 2, this.y - this.r / 2, this.r * 2, this.r * 2); 
    } else {
      image(imagenParado, this.x - this.r / 2, this.y - this.r / 2, this.r * 2, this.r * 2); 
    }
  }

  avanzar() {
    this.velocidad += this.gravedad;
    this.y += this.velocidad;

    if (this.y > this.suelo - this.r) {
      this.y = this.suelo - this.r;
      this.velocidad = 0;
      this.saltando = false;
    }
  }

  saltar() {
    this.velocidad += this.salto;
    this.saltando = true;
  }
}
