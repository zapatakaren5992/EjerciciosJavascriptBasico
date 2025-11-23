// Generar un número aleatorio entre 1 y 100
// Para generar un número aleatorio en JavaScript, podemos usar la función Math.random()
// Math.round() redondea el número al entero más cercano
// Math.floor() redondea hacia abajo al entero más cercanob => Math.floor(4.7) devuelve 4
// Creemos un juego que corra hasta que el usuario adivine el número secreto
// Este juego no podrá ser implementado localmente, tendrá que hacerse en un entorno que soporte prompt() y alert, como un navegador web https://playcode.io/javascript

let numSecreto = Math.floor(Math.random() * 10) + 1;
let intento = 0;
let opcionUsuario = 0;
let haAdivinado = false;

while (haAdivinado) {
    intento++;
    opcionUsuario = parseInt(prompt("Adivina el número secreto entre 1 y 100:")); // prompt() muestra un cuadro de diálogo, recibe por defecto tipo TEXT
    if(opcionUsuario == numSecreto)
    {
        console.log(`El usuario adivino en el intento ${intento}, Número secreto ${numSecreto} y opción Usuario ${opcionUsuario}`);
        alert("¡Felicidades! Has adivinado el número secreto" + numSecreto + "en" + intento + "intentos.");
        haAdivinado = true;
    } else {
        console.log(`El usuario aún no adivino en el intento ${intento}, Número secreto ${numSecreto} y opción Usuario ${opcionUsuario}`);
        alert("¡Oops! Has adivinado el número secreto" + intento + "intentos.");
        haAdivinado = true;

    }

}

