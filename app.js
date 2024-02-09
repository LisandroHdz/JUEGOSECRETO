let numeroSecreto = 0;
let intentos = 0;
let listaNumerosorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento () {
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUusario').value);
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}, ¡FELICIDADES! 🎉`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('P','El numero secreto es menor');            
        } else {
            asignarTextoElemento('P', 'El numero secreto es mayor'); 
        }
        intentos++;
        limpiarCaja();
    }    
    return;
}

function limpiarCaja() {
   let valorCaja = document.querySelector('#valorUusario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
//si ya sorteamos todos los numeros
    if(listaNumerosorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles, Gracias por participar !!');

    }else{
//SI EL NUMERO YA FUE SORTEADO 
        if(listaNumerosorteado.includes(numeroGenerado)){
            return generarNumeroSecreto;
        }else{
            listaNumerosorteado.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}


function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;   
}

function nuevojuego() {
    //limpiar la caja
    limpiarCaja();
    condicionesIniciales(); 
    document.querySelector('#reinciar').setAttribute('disabled','true');
}

condicionesIniciales();