//Valentin Yuge 92715/7 https://youtu.be/NgJPPq7LmOk

function preload() {
  imagenParado = loadImage('data/ShrekCorriendo.png'); 
  imagenSaltando = loadImage('data/ShrekSaltando.png'); 
  imagenCastillo = loadImage('data/Castillo.png');
  imagenObstaculo = loadImage('data/Caballero.png'); 
  imagenFlecha = loadImage('data/flecha.png');
  fondoInicioImg = loadImage('data/FondoInicio.jpg'); 
  fondoCreditosImg = loadImage('data/FondoCreditos.jpg'); 
  fondoInstruccionesImg = loadImage('data/FondoInstrucciones.jpg'); 
  fondoGanasteImg = loadImage('data/FondoGanaste.jpg'); 
  fondoPerdisteImg = loadImage('data/FondoPerdiste.jpg'); 
  play = loadImage('data/play.png');
  pausa = loadImage('data/pausa.png');
  musica = loadSound('data/shrek.mp3');
}

function setup() {
  createCanvas(640, 480);
  musica.setVolume(0.1);
  suelo = height - 50;
  juego = new Juego();
  juego.reiniciarJuego();
}

function draw() {
  background(135, 206, 235); 

  if (juego.estadoJuego === "Inicio") {
    juego.pantallaInicio();
  } else if (juego.estadoJuego === "Jugando") {
    juego.pantallaJuego();
  } else if (juego.estadoJuego === "Creditos") {
    juego.pantallaCreditos();
  } else if (juego.estadoJuego === "Ganaste") {
    juego.pantallaGanando();
  } else if (juego.estadoJuego === "Perdiste") {
    juego.pantallaPerdiendo();
  } else if (juego.estadoJuego === "Instrucciones") {
    juego.pantallaInstrucciones();
  }

  if (juego.suena) {
    image(pausa, width - 60, height - 60, 50, 50); 
  } else {
    image(play, width - 60, height - 60, 50, 50); 
  }
}


function mousePressed() {
  juego.MousePressed();
}

function keyPressed() {
  if (juego.estadoJuego === "Jugando" && key === ' ' && !this.saltando) {
    juego.player.saltar();
  }
}
