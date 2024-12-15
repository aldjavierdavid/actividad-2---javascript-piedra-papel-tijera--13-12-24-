function tiradaCPU() {
  var imgCPU = document.getElementById('tiradaCPU').src
  let tiradasPosibles = ['piedra', 'papel', 'tijera']
  let tirada = Math.floor(Math.random() * tiradasPosibles.length)
  const resultado = tiradasPosibles[tirada]
  console.log('resultado cpu: ' + resultado);

  if (resultado === 'piedra') {
    imgCPU = 'images/rock.png'; // Actualiza la imagen a 'rock.png' si la tirada es 'piedra'
    document.getElementById('tiradaCPU').src = imgCPU; // Cambia el atributo src de la imagen
  } else if (resultado === 'papel') {
    imgCPU = 'images/paper.png'; // Actualiza la imagen a 'paper.png' si la tirada es 'papel'
    document.getElementById('tiradaCPU').src = imgCPU; // Cambia el atributo src de la imagen
  } else if (resultado === 'tijera') {
    imgCPU = 'images/scissor.png'; // Actualiza la imagen a 'scissor.png' si la tirada es 'tijera'
    document.getElementById('tiradaCPU').src = imgCPU; // Cambia el atributo src de la imagen
  }

  return resultado
}

function tiradaSeleccionada(idBoton) /*como parametro le pasamos el id del boton seleccionado*/ {
  const boton = document.getElementById(idBoton) /* cogemos el elemento */;
  if (boton) {
    const imagen = boton.querySelector("img") /* seleccionamos el elemento <img> y la guardamos en la constante imagen*/;
    console.log("Imagen:", imagen); // Muestra el elemento <img>
    console.log("URL de la imagen:", imagen?.src); // Muestra el src de la imagen
    document.getElementById('tiradaJugador').setAttribute('src', imagen?.src) // cambiamos el atributo src en tiradaJugador
    console.log('tirada seleccionada: ' + idBoton);

    return idBoton

  } else {
    console.error(`Botón con ID "${idBoton}" no encontrado`);
    return null;
  }
}

let ganadas = 0
let perdidas = 0 
let empatadas = 0

function definirGanador(seleccionJugador, seleccionCPU) {
  console.log(`Tirada Jugador: ${seleccionJugador}, Tirada CPU: ${seleccionCPU}`);

  if (seleccionJugador === seleccionCPU) {
    empatadas++
    document.getElementById('empatadas').innerHTML = 'Empatadas:' + empatadas
    document.getElementById('outResultado').innerHTML = 'Empate!'
    document.getElementById('outResultado').setAttribute('style', 'color: rgb(255, 225, 0)')
    console.log("¡Es un empate!");
  } else if (
    (seleccionJugador === 'piedra' && seleccionCPU === 'tijera') ||
    (seleccionJugador === 'papel' && seleccionCPU === 'piedra') ||
    (seleccionJugador === 'tijera' && seleccionCPU === 'papel')
  ) {
    ganadas++
    document.getElementById('ganadas').innerHTML = 'Ganadas: ' + ganadas
    document.getElementById('outResultado').innerHTML = 'Has ganado!'
    document.getElementById('outResultado').setAttribute('style', 'color: green')
    console.log("¡Jugador gana!");
  } else {
    perdidas++
    document.getElementById('perdidas').innerHTML = 'Perdidas: ' + perdidas
    document.getElementById('outResultado').innerHTML = 'Has perdido!'
    document.getElementById('outResultado').setAttribute('style', 'color: red')
    console.log("¡CPU gana!");
  }
}

let partidas = 0

function jugarRonda(idBotonJugador) {
  const seleccionJugador = tiradaSeleccionada(idBotonJugador); // Tirada del jugador
  const seleccionCPU = tiradaCPU(); // Tirada de la CPU
  
  partidas++
  document.getElementById('partidas').innerHTML = 'Partidas: ' + partidas

  definirGanador(seleccionJugador, seleccionCPU); // Determina el ganador
}


