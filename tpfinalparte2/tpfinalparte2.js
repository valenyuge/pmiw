//Valentin Yuge 92715/7 https://youtu.be/NgJPPq7LmOk

let player;
let Suelo;
let Obstaculos = [];
let Castillo;
let Velocidad = 5;
let Gravedad = 0.6;
let Salto = -12;
let Saltando = false;
let Distancia = 0;
let FinJuego = false;
let EstadoJuego = "Inicio"; 
let CastilloTiempo = 500; 
let ImagenParado;
let ImagenSaltando;
let ImagenCastillo;
let ImagenObstaculo; 
let ImagenFlecha;
let fondoInicioImg; 
let fondoCreditosImg; 
let fondoInstruccionesImg;
let fondoGanasteImg; 
let fondoPerdisteImg; 
let musica;
let Suena = true;
let Pausa, Play;
let frameFlechas = 0;
let frameObstaculos = 0;
let intervaloFlechas = 270;
let intervaloObstaculos = 190;

function preload() {
  ImagenParado = loadImage('data/ShrekCorriendo.png'); 
  ImagenSaltando = loadImage('data/ShrekSaltando.png'); 
  ImagenCastillo = loadImage('data/Castillo.png');
  ImagenObstaculo = loadImage('data/Caballero.png'); 
  ImagenFlecha = loadImage('data/flecha.png');
  fondoInicioImg = loadImage('data/FondoInicio.jpg'); 
  fondoCreditosImg = loadImage('data/FondoCreditos.jpg'); 
  fondoInstruccionesImg = loadImage('data/FondoInstrucciones.jpg'); 
  fondoGanasteImg = loadImage('data/FondoGanaste.jpg'); 
  fondoPerdisteImg = loadImage('data/FondoPerdiste.jpg'); 
  Play = loadImage('data/play.png');
  Pausa = loadImage('data/pausa.png');
  musica = loadSound('data/shrek.mp3');
}
function setup() {
  createCanvas(640, 480);
  musica.setVolume(0.1);
  musica.loop(); 
  Suelo = height - 50;
  ReiniciarJuego();
}

function draw() {
  background(135, 206, 235); 

  if (EstadoJuego === "Inicio") {
    PantallaInicio();
  } else if (EstadoJuego === "Jugando") {
    PantallaJuego();
  } else if (EstadoJuego === "Creditos") {
    PantallaCreditos();
  } else if (EstadoJuego === "Ganaste") {
    PantallaGanando();
  } else if (EstadoJuego === "Perdiste") {
    PantallaPerdiendo();
  } else if (EstadoJuego === "Instrucciones") {
    PantallaInstrucciones();
  }
   if (Suena) {
    image(Pausa, width - 60, height - 60, 50, 50); 
  } else {
    image(Play, width - 60, height - 60, 50, 50); 
  }
}

function PantallaInicio() {
  image(fondoInicioImg, 0, 0, width, height); 
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

function PantallaCreditos() {
  image(fondoCreditosImg, 0, 0, width, height); 
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

function PantallaGanando() {
  image(fondoGanasteImg, 0, 0, width, height); 
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

function PantallaPerdiendo() {
  image(fondoPerdisteImg, 0, 0, width, height);
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

function PantallaJuego() {
  textSize(20);
  fill(0);
  text(`Distancia: ${floor(Distancia)}m`, 80, 20);

  if (!FinJuego) {
    Distancia += Velocidad / 10;

    player.Avanzar();
    player.Mostrar();

    if (Distancia >= CastilloTiempo) {
      Castillo.Mostrar();
      if (player.x + player.r > Castillo.x) {
        EstadoJuego = "Ganaste";
      }
    } else {
      frameObstaculos++;
      if (frameObstaculos % intervaloObstaculos === 0) {
        let obstacleHeight = random(40, 80);
        Obstaculos.push(new Obstacle(obstacleHeight));
      }

      frameFlechas++;
      if (frameFlechas % intervaloFlechas === 0) {
        Obstaculos.push(new Flecha());
      }

      for (let i = Obstaculos.length - 1; i >= 0; i--) {
        Obstaculos[i].Avanzar();
        Obstaculos[i].Mostrar();

        if (Obstaculos[i].Colision(player)) {
          FinJuego = true;
          EstadoJuego = "Perdiste";
        }

        if (Obstaculos[i].FueraPantalla()) {
          Obstaculos.splice(i, 1);
        }
      }

   
      if (frameCount % 600 === 0) { 
        intervaloFlechas = max(50, intervaloFlechas - 10); 
        intervaloObstaculos = max(60, intervaloObstaculos - 10); 
      }
    }

    fill(100, 200, 100);
    rect(0, Suelo, width, height - Suelo);
  }
}

function PantallaInstrucciones() {
  image(fondoInstruccionesImg, 0, 0, width, height); 
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


function mousePressed() { 
  if (EstadoJuego === "Inicio") {
    if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height / 2 - 20 && mouseY < height / 2 + 20) {
      EstadoJuego = "Jugando";
    } else if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height / 2 + 60 && mouseY < height / 2 + 100) {
      EstadoJuego = "Instrucciones";
    } else if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height / 2 + 140 && mouseY < height / 2 + 180) {
      EstadoJuego = "Creditos";
    }
  } else if (EstadoJuego === "Instrucciones") {
    if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height - 100 && mouseY < height - 60) {
      EstadoJuego = "Inicio"; 
    }
  } else if (EstadoJuego === "Creditos" || EstadoJuego === "Ganaste" || EstadoJuego === "Perdiste") {
    if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height / 2 + 100 && mouseY < height / 2 + 140) {
      ReiniciarJuego();
      EstadoJuego = "Inicio";
    }
  }

  if (mouseX > width - 60 && mouseX < width - 10 && mouseY > height - 60 && mouseY < height - 10) {
    if (Suena) {
      musica.pause(); 
    } else {
      musica.play(); 
    }
    Suena = !Suena; 
  }
}



function keyPressed() {
  if (EstadoJuego === "Jugando" && key === ' ' && !Saltando) {
    player.Saltar();
  }
}

function ReiniciarJuego() {
  player = new Jugador();
  Obstaculos = [];
  Castillo = new CastilloJuego();
  Distancia = 0;
  FinJuego = false;
  loop(); 
}

class Jugador {
  constructor() {
    this.r = 60; 
    this.x = 50;
    this.y = Suelo - this.r;
    this.Velocidad = 0;
  }

  Mostrar() {
    if (Saltando) {
      image(ImagenSaltando, this.x - this.r / 2, this.y - this.r / 2, this.r * 2, this.r * 2); 
    } else {
      image(ImagenParado, this.x - this.r / 2, this.y - this.r / 2, this.r * 2, this.r * 2); 
    }
  }

  Avanzar() {
    this.Velocidad += Gravedad;
    this.y += this.Velocidad;

    if (this.y > Suelo - this.r) {
      this.y = Suelo - this.r;
      this.Velocidad = 0;
      Saltando = false;
    }
  }

  Saltar() {
    this.Velocidad += Salto;
    Saltando = true;
  }
}

class Obstacle {
  constructor(height) {
    this.height = height;  
    this.width = (this.height / 480) * 350;  
    this.x = width;
    this.y = Suelo - this.height;  
    this.Velocidad = random(5, 10);  
  }

  Mostrar() {
    image(ImagenObstaculo, this.x, this.y, this.width, this.height); 
  }

  Avanzar() {
    this.x -= this.Velocidad;  
  }

  Colision(player) {
    return (
      player.x + player.r > this.x &&
      player.x < this.x + this.width &&
      player.y + player.r > this.y
    );
  }

  FueraPantalla() {
    return this.x < -this.width;
  }
}

class Flecha {
  constructor() {
    this.width = 50;  
    this.height = 20;
    this.x = width;  
    this.y = Suelo - 120;  
    this.Velocidad = random(6, 12);  
  }

  Mostrar() {
    image(ImagenFlecha, this.x, this.y, this.width, this.height);  
  }

  Avanzar() {
    this.x -= this.Velocidad;  
  }

  Colision(player) {
    return (
      player.x + player.r > this.x &&
      player.x < this.x + this.width &&
      player.y + player.r > this.y &&
      player.y < this.y + this.height
    );
  }

  FueraPantalla() {
    return this.x < -this.width;
  }
}


class CastilloJuego {
  constructor() {
    this.x = width + 50; 
    this.y = Suelo - 200; 
    this.width = 100;  
    this.height = 120; 
  }

  Mostrar() {
    if (ImagenCastillo) {  
      image(ImagenCastillo, this.x, this.y, this.width * 2, this.height * 2); 
    }
    this.x -= Velocidad;
  }
}
