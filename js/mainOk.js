// CALCULO PROMEDIO - HACER FUNCION
function finalPromedio(q1, q2, q3) {
    let final = (q1 + q2 + q3) / 3;
    console.log('q1:' + q1);
    console.log('q2:' + q2);
    console.log('q3:' + q3);
    console.log('final:' + final)
    return final;
}

let q1 = 0;
let q2 = 0;
let q3 = 0;

const Sainz = {
    nombre: "Carlos",
    apellido: "Sainz",
    nacionalidad: "español",
    nombreEscuderia: "Ferrari",
    directorEscuderiaNombre: "Fred",
    directorEscuderiaApellido: "Vasseur",
    color: "rojo",
}

const Verstappen = {
    nombre: "Max",
    apellido: "Verstappen",
    nacionalidad: "holandes",
    nombreEscuderia: "Red Bull",
    directorEscuderiaNombre: "Christian",
    directorEscuderiaApellido: "Horner",
    color: "azul",
}

const pilotos = [Sainz, Verstappen];

for (const piloto of pilotos) {
    for (const propiedad in piloto) {
        console.log(`${propiedad}: ${piloto[propiedad]}`);
    }
    console.log('------------------');
}

console.log()

let usuarioNombre = 0;
let usuarioApellido = 0;
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-usuario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const usuarioNombre = document.querySelector(".input-nombre").value;
        const usuarioApellido = document.querySelector(".input-apellido").value;

        console.log("Nombre: " + usuarioNombre);
        console.log("Apellido: " + usuarioApellido);
    });
});

/*const containerTextos = document.querySelector (".container-textos");

containerTextos.innerText = "Su tarjeta de acceso ha sido emitida " + usuarioNombre + " " + usuarioApellido + "."; */

let containerTextos2 = document.createElement("p");
containerTextos2.classList.add("bievenida");
containerTextos2.innerHTML = <p>"Su tarjeta de acceso ha sido emitida " + usuarioNombre + " " + usuarioApellido + "."</p>
