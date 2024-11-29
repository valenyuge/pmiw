class CastilloJuego {
  constructor() {
    this.suelo = height - 50;
    this.x = width + 50; 
    this.y = this.suelo - 200; 
    this.width = 100;  
    this.height = 120; 
    this.velocidad = 5;
  }

  mostrar() {
    if (imagenCastillo) {  
      image(imagenCastillo, this.x, this.y, this.width * 2, this.height * 2); 
    }
    this.x -= this.velocidad;
  }
}
