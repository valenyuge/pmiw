// Valentin Yuge 92715/7 

let img = []; 
let pantallas = [];
let texto = [];
let minumero;
let numeroactual = 0;
let musica;
let Suena = true;
let Pausa, Play;

function preload() {
  Play = loadImage('data/play.png');
  Pausa = loadImage('data/pausa.png');
  for (let i = 0; i < 20; i++) {
    musica = loadSound('data/shrek.mp3');
    img[i] = loadImage('data/img' + i + '.jpg');
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 20; i++) {
    pantallas[i] = 1;
  }
  musica.setVolume(0.1);
  musica.loop(); 

  texto[0] = "";
  texto[1] = "Esta historia comienza cuando Shrek y Fiona son invitados a Muy Muy Lejano para conocer a sus suegros";
  texto[2] = "Shrek no está muy seguro y debe tomar una decision:                  A. Decide No ir B. Viaja a Muy Muy Lejano";
  texto[3] = "Shrek viaja a conocer a sus suegros que no lo reciben de la mejor manera por ser un ogro. Tras esto Shrek y Fiona discuten y este se va al bosque con burro a pensar como solucionar esto";
  texto[4] = "Una vez en el bosque se encuentran un peligroso Gato con Botas con una espada que quiere asesinar a Shrek ¿Que hace Shrek? A. Se rinde B. Lo enfrenta";
  texto[5] = "Shrek se enfrenta a el peligroso gato que resulto ser muy facil de derrotar ya que al ser pequeño lo pudo atrapar facilmente";
  texto[6] = "El gato al verse derrotado decide unirseles y contarle todo el plan del Rey y el Hada. Tras esto Shrek se lleva al Gato consigo y van en Busca de unas pociones del Hada Madrina para recuperar a Fiona";
  texto[7] = "Al llegar al lugar logran robarse 3 pociones y Shrek debe decidir cual beber. A. Roja B. Azul C. Verde";
  texto[8] = "Shrek eligío la poción roja, esta era un veneno mortal el cual hizo que Shrek se desplomara en el momento";
  texto[9] = "Shrek eligió la poción verde, esta era la poción que utilizaba la Hada Madrina para dormir por las noches, por lo que Shrek cayó en un profundo sueño al tomarse toda la pocima";
  texto[10] = "Shrek eligió la poción azul, esta efectivamente era la poción para volverlo humano y uno muy bello, por lo que decidió ir a recuperar a Fiona y conseguir la aprobación de sus suegros";
  texto[11] = "Shrek volvió al reino en busca de Fiona que fue engañada por el Principe Encantador para que creyera que es Shrek con quien está por casarse";
  texto[12] = "Shrek interrumpe en el Castillo donde tras una lucha por quitarle la varita al Hada Madrina consiguen quitarsela y deshacerse de ella y el Principe Encantador";
  texto[13] = "El reloj está por marcar las 12, cuando la pocima dejará de tener efecto A. Se besan B. No se Besan";
  texto[14] = "Pasan las 12, Shrek y Fiona no se besan por lo que ambos vuelven a convertirse en ogros";
  texto[15] = "Con esto se demostraron que ambos se quieren tal como son y no necesitan cambiar para ser felices por siempre";
  texto[16] = "Shrek y Fiona se besan manteniendose ambos como humanos";
  texto[17] = "Tras esto el Rey está muy arrepentido por haberlo obligado a cambiar para aceptarlo pero Shrek solo quiso lo mejor para Fiona por mas que tenga que dejar su antigua vida de lado";
  texto[18] = "Shrek falló en conseguir que sus suegros lo aprueben y vivir con Fiona feliz para siempre";
  texto[19] = "Código de: \n-Valentin Yuge y Joaquin Paez\n-Imágenes de: Meta AI.";
}

function draw() {
  background(255);
  if (numeroactual < img.length) {
    planilla(numeroactual);
  }
  if (Suena) {
    image(Pausa, width - 60, height - 60, 50, 50); // Dibuja el ícono de pausa
  } else {
    image(Play, width - 60, height - 60, 50, 50); // Dibuja el ícono de play
  }

  if (numeroactual >= img.length) {
    numeroactual = 0;
  }
  
  fill(0);

  if (numeroactual == 2 || numeroactual == 4 || numeroactual == 13) {
    let d = dist(width / 2, height / 2, mouseX, mouseY);
    let maxDist = dist(0, 0, 2 * width, height / 2);
    let miColor = map(d, 0, maxDist, 10, 50);
    fill(miColor);
    rect(100, 400, 50, 50);
    rect(450, 400, 50, 50);
    fill(255);
    textSize(35);
    text('A', 112, 437);
    text('B', 465, 437);
  }
 if (numeroactual == 7) {
    let d = dist(width / 2, height / 2, mouseX, mouseY);
    let maxDist = dist(0, 0, 2 * width, height / 2);
    let miColor = map(d, 0, maxDist, 10, 50);
    fill(miColor);
    rect(100, 400, 50, 50);
    rect(275, 400, 50, 50);  
    rect(450, 400, 50, 50); 
    fill(255);
    textSize(35);
    text('A', 112, 437);
    text('B', 287, 437);
    text('C', 465, 437);
  }
  if (numeroactual == 18 || numeroactual == 8 || numeroactual == 9 || numeroactual == 15 || numeroactual == 17) {
    let d = dist(width / 2, height / 2, mouseX, mouseY);
    let maxDist = dist(0, 0, 2 * width, height / 2);
    let miColor = map(d, 0, maxDist, 10, 50);
    fill(miColor);
    rect(225, 400, 150, 50);
    fill(255);
    textSize(35);
    text('Reiniciar', 233, 440);
  }
  if (numeroactual == 19) {
    let d = dist(width / 2, height / 2, mouseX, mouseY);
    let maxDist = dist(0, 0, 2 * width, height / 2);
    let miColor = map(d, 0, maxDist, 10, 50);
    fill(miColor);
    rect(225, 400, 115, 50);
    fill(255);
    textSize(35);
    text('Volver', 233, 440);
  }
}

function mousePressed() {
   if (mouseX > width - 60 && mouseX < width - 10 && mouseY > height - 60 && mouseY < height - 10) {
    if (Suena) {
      musica.pause(); 
    } else {
      musica.play(); 
    }
    Suena = !Suena; 
  }
  if (numeroactual == img.length - 1) {
    if (boton(225, 340, 400, 450, 1)) {
      numeroactual = 0;
    }
  } else if (numeroactual == 0) {
    if (boton(245, 395, 240, 290, 1)) {
      numeroactual++;
    } else if (boton(225, 375, 300, 350, 2)) {
      numeroactual = img.length - 1;
    }
  } else {
    if (numeroactual == 18 || numeroactual == 8 || numeroactual == 9 || numeroactual == 15 || numeroactual == 17) {
      if (boton(0, 600, 400, 450, 1)) {
        numeroactual = 0;
      }
    } else if (numeroactual == 2) {
      if (boton(100, 150, 400, 500, 1)) { 
        numeroactual = 18;
      } else if (boton(450, 500, 400, 500, 2)) { 
        numeroactual = 3;
      }
    } 
    else if (numeroactual == 4) {
      if (boton(100, 150, 400, 500, 1)) {  
        numeroactual = 18;
      } else if (boton(450, 500, 400, 500, 2)) {  
        numeroactual = 5;
      }
    } else if (numeroactual == 7) {
      if (boton(100, 150, 400, 500, 1)) {  
        numeroactual = 8;
      } else if (boton(275, 325, 400, 500, 2)) {  
        numeroactual = 10;
      } else if (boton(450, 500, 400, 500, 3)) {  
        numeroactual = 9;  
      }
    } else if (numeroactual == 13) {
      if (boton(100, 150, 400, 500, 1)) {
        numeroactual = 16;
      } else if (boton(450, 500, 400, 500, 2)) {
        numeroactual = 14;
      }
    } else if (numeroactual == 15) {
      if (boton(0, 600, 0, 600, 1)) {
        numeroactual = 16;
      }
    } else {
      if (boton(0, 600, 0, 600, 1)) {
        numeroactual++;
      }
    }
  }
}

function boton(posicionx1, posicionx2, posiciony1, posiciony2, elnumero) {
  minumero = elnumero;
  return (mouseX > posicionx1 && mouseX < posicionx2 && mouseY > posiciony1 && mouseY < posiciony2);
}

function planilla(pantalla) {
  image(img[pantalla], 0, 0, width, height);
  fill(255, 150);

  if (numeroactual != 0 && numeroactual != img.length) {
    rect(3, 3, 593, 100);
    fill(0);
    textSize(20);
    text(texto[pantalla], 10, 10, 570, 100);
  } else if (numeroactual == 0) {
    textSize(40);
    fill(255);
    text('Shrek', 20, 40);
    rect(225, 225, 150, 50);
    rect(225, 300, 150, 50);
    fill(0);
    textSize(30);
    text('Empezar', 241, 260);
    text('Créditos', 245, 335);
  } 
}
