class Juego {
  constructor() {
    this.velocidad = 5; 
    this.finjuego = false;
    this.estadoJuego = "Inicio";
    this.castilloTiempo = 200;
    this.suelo = height - 50;
    this.suena = false;
    this.frameFlechas = 0;
    this.frameObstaculos = 0;
    this.intervaloFlechas = 270;
    this.intervaloObstaculos = 190;    
    this.fondoInicioImg = fondoInicioImg;
    this.fondoCreditosImg = fondoCreditosImg;
    this.fondoInstruccionesImg = fondoInstruccionesImg;
    this.fondoGanasteImg = fondoGanasteImg;
    this.fondoPerdisteImg = fondoPerdisteImg;
    this.pausa = pausa;
    this.play = play;
    this.musica = musica;
  }

  pantallaInicio() {
    image(this.fondoInicioImg, 0, 0, width, height); 
    fill(0, 0, 0, 150);
    noStroke();
    rect(width / 4, height / 4, width / 2, height / 6);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("Camino al Castillo", width / 2, height / 3);

    fill(0, 255, 0);
    rect(width / 2 - 80, height / 2 - 20, 160, 40);
    fill(0);
    textSize(20);
    text("Iniciar Juego", width / 2, height / 2);

    fill(0, 255, 0);
    rect(width / 2 - 80, height / 2 + 60, 160, 40);
    fill(0);
    text("Instrucciones", width / 2, height / 2 + 80);

    fill(0, 255, 0);
    rect(width / 2 - 80, height / 2 + 140, 160, 40);
    fill(0);
    text("Créditos", width / 2, height / 2 + 160);
  }

  pantallaCreditos() {
    image(this.fondoCreditosImg, 0, 0, width, height); 
    fill(0, 0, 0, 150); 
    noStroke();
    rect(width / 4, height / 4, width / 2, height / 2 - 30);
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(255);
    text("Creado por:", width / 2, height / 3);
    text("Valentin Yuge", width / 2, height / 2);
    text("Joaquin Paez", width / 2, height / 1.65);
    fill(0, 255, 0);
    rect(width / 2 - 80, height / 2 + 100, 160, 40);
    fill(0);
    textSize(20);
    text("Volver", width / 2, height / 2 + 120);
  }

  pantallaGanando() {
    image(this.fondoGanasteImg, 0, 0, width, height); 
    fill(0, 0, 0, 150); 
    noStroke();
    rect(width / 4, height / 4, width / 2, height / 6);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("¡Llegaste al Castillo!", width / 2, height / 3);
    fill(0, 255, 0);
    rect(width / 2 - 80, height / 2 + 100, 160, 40);
    fill(0);
    textSize(20);
    text("Volver al Inicio", width / 2, height / 2 + 120);
  }

  pantallaPerdiendo() {
    image(this.fondoPerdisteImg, 0, 0, width, height);
    fill(0, 0, 0, 150); 
    noStroke();
    rect(width / 4, height / 4, width / 2, height / 6);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("¡Fuiste Capturado!", width / 2, height / 3);

    fill(0, 255, 0);
    rect(width / 2 - 80, height / 2 + 100, 160, 40); 
    fill(0);
    textSize(20);
    text("Reiniciar", width / 2, height / 2 + 120);
  }

  pantallaJuego() {
    textSize(20);
    fill(0);
    text(`Distancia: ${floor(this.Distancia)}m`, 80, 20);

    if (!this.finjuego) {
      this.Distancia += this.velocidad / 10;

      this.player.avanzar();
      this.player.mostrar();

      if (this.Distancia >= this.castilloTiempo) {
        this.Castillo.mostrar();
        if (this.player.x + this.player.r > this.Castillo.x) {
          this.estadoJuego = "Ganaste";
        }
      } else {
        this.frameObstaculos++;
        if (this.frameObstaculos % this.intervaloObstaculos === 0) {
          let obstacleHeight = random(40, 80);
          this.Obstaculos.push(new Obstacle(obstacleHeight));
        }

        this.frameFlechas++;
        if (this.frameFlechas % this.intervaloFlechas === 0) {
          this.Obstaculos.push(new Flecha());
        }

        for (let i = this.Obstaculos.length - 1; i >= 0; i--) {
          this.Obstaculos[i].avanzar();
          this.Obstaculos[i].mostrar();

          if (this.Obstaculos[i].colision(this.player)) {
            this.finjuego = true;
            this.estadoJuego = "Perdiste";
          }

          if (this.Obstaculos[i].fueraPantalla()) {
            this.Obstaculos.splice(i, 1);
          }
        }

        if (frameCount % 600 === 0) { 
          this.intervaloFlechas = max(50, this.intervaloFlechas - 10); 
          this.intervaloObstaculos = max(60, this.intervaloObstaculos - 10); 
        }
      }

      fill(100, 200, 100);
      rect(0, this.suelo, width, height - this.suelo);
    }
  }

  pantallaInstrucciones() {
    image(this.fondoInstruccionesImg, 0, 0, width, height); 
    fill(0, 0, 0, 150); 
    noStroke();
    rect(width / 4 - 20, height / 4 - 30, width / 2 + 40, height / 2 + 20);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Instrucciones", width / 2, height / 4);

    textSize(16);
    text("• Llega al castillo para salvar a Fiona", width / 2, height / 2 - 20);
    text("• Evita que los guardias te capturen", width / 2, height / 2 + 20);
    text("• Pulsa la BARRA ESPACIADORA para saltar", width / 2, height / 2 + 60);

    fill(0, 255, 0);
    rect(width / 2 - 80, height - 100, 160, 40);
    fill(0);
    textSize(20);
    text("Volver", width / 2, height - 80);
  }

  MousePressed() {
    if (this.estadoJuego === "Inicio") {
      if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height / 2 - 20 && mouseY < height / 2 + 20) {
        this.estadoJuego = "Jugando";
      } else if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height / 2 + 60 && mouseY < height / 2 + 100) {
        this.estadoJuego = "Instrucciones";
      } else if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height / 2 + 140 && mouseY < height / 2 + 180) {
        this.estadoJuego = "Creditos";
      }
    } else if (this.estadoJuego === "Instrucciones") {
      if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height - 100 && mouseY < height - 60) {
        this.estadoJuego = "Inicio"; 
      }
    } else if (this.estadoJuego === "Creditos" || this.estadoJuego === "Ganaste" || this.estadoJuego === "Perdiste") {
      if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height / 2 + 100 && mouseY < height / 2 + 140) {
        this.reiniciarJuego();
        this.estadoJuego = "Inicio";
      }
    }

    if (mouseX > width - 60 && mouseX < width - 10 && mouseY > height - 60 && mouseY < height - 10) {
      if (this.suena) {
        this.musica.pause(); 
      } else {
        this.musica.play(); 
      }
      this.suena = !this.suena; 
    }
  }

  reiniciarJuego() {
    this.player = new Jugador();
    this.Obstaculos = [];
    this.Castillo = new CastilloJuego();
    this.Distancia = 0;
    this.finjuego = false;
    loop(); 
  }
}
