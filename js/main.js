    // CALCULO PROMEDIO - HACER FUNCION
    function finalPromedio() {
        let final = (q1 + q2 + q3) / 3; // NO DEFINIDA
    console.log(final) // PROMEDIAR CON MATH
    }

    let q1
    let q2
    let q3

const sainz = {
    nombre: "Carlos",
    apellido: "Sainz",
    nacionalidad: "español",
    nombreEscuderia: "Ferrari",
    directorEscuderiaNombre: "Fred",
    directorEscuderiaApellido: "Vasseur",
    color: "rojo",
}

const verstappen = {
    nombre: "Max",
    apellido: "Verstappen",
    nacionalidad: "holandes",
    nombreEscuderia: "Red Bull",
    directorEscuderiaNombre: "Christian",
    directorEscuderiaApellido: "Horner",
    color: "azul",
}

const pilotos = [sainz, verstappen];

for (const piloto of pilotos) {
    for (const propiedad in piloto) {
        console.log(`${propiedad}: ${piloto[propiedad]}`);
    }
    console.log('------------------');
}

console.log()
const usuarioNombre = prompt("Bienvenido Ingeniero/a, ingrese solo su/s nombre/s por favor.");
const usuarioApellido = prompt("Ahora indiqueme su/s Apellido/s.");

alert("Su tarjeta de acceso ha sido emitida " + usuarioNombre + " " + usuarioApellido + ".");
console.log("Su tarjeta de acceso ha sido emitida " + usuarioNombre + " " + usuarioApellido + ".");

alert("Para que piloto estará trabajando?");
console.log("Para que piloto estará trabajando?");

let piloto1 = prompt("Elija la Opcion que desea. 1) Carlos Sainz. 2) Max Verstappen");
if (piloto1 == 1) { //CAMINO CARLOS SAINZ
    let piloto1 = "Carlos Sainz";
    let piloto2 = "Max Verstappen";
    console.log(sainz.nombre + " " + sainz.apellido);
    alert("Bienvenido " + usuarioNombre + " " + usuarioApellido + " dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.");
    console.log("Bienvenido " + usuarioNombre + " " + usuarioApellido + " dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.");
    alert("Lo primero que debes saber es que trabajar con " + piloto1 + " es algo muy importante.");
    console.log("Lo primero que debes saber es que trabajar con " + piloto1 + " es algo muy importante.");
    alert(sainz.nombreEscuderia + " es el sueño de todos.");
    console.log(sainz.nombreEscuderia + " es el sueño de todos.");
    alert("Bueno, acomodate, ya estamos casi listos para ponernos en marcha.");
    console.log("Bueno, acomodate, ya estamos casi listos para ponernos en marcha.");
    alert(piloto1 + " te saluda a lo lejos y se sube a su monoplaza color " + sainz.color + ".");
    console.log(piloto1 + " te saluda a lo lejos y se sube a su monoplaza color " + sainz.color + ".");
    alert("Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.");
    console.log("Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.");
    alert("Debes decidir:");
    alert("A - Sacar a " + piloto1 + ", primero, con pista y aire limpio pero con el asfalto menos engomado.");
    alert("B - Sacar a " + piloto1 + " despues del minuto 5, con más trafico pero con mayor adherencia.");

    let camino1 = prompt("Ingrese A - Para sacar al piloto primero. B - Para sacar al piloto despues del minuto 5.");
    if (camino1 == "A") {
        ; //CAMINO 1
        console.log("Salen primero.")
        alert("Fue una buena idea para esta parte clasificatoria, " + sainz.nombre + " consigue un P2 que fue facil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.");
        console.log("Fue una buena idea para esta parte clasificatoria, " + sainz.nombre + "consigue un P2 que fue facil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.");
        alert("Buen trabajo, " + usuarioNombre + " Sigamos así. Te dice " + sainz.directorEscuderiaNombre + " " + sainz.directorEscuderiaApellido);
        console.log("Buen trabajo, " + usuarioNombre + " Sigamos así. Te dice " + sainz.directorEscuderiaNombre + " " + sainz.directorEscuderiaApellido);
        let q1 = Number(2);
    } else { //CAMINO 2
        console.log("Esperan unos minutos.")
        alert("A " + piloto1 + " se le ha complicado conseguir espacio para hacer una vuelta rapida y limpia. Consigue un P4 que lo coloca comodamente en la Q2. " + sainz.nombre + " se sintió un poco nervioso. Durante estos minutos sentiste la mirada de " + sainz.directorEscuderiaNombre + " en tu espalda varias veces.");
        console.log("A " + piloto1 + " se le ha complicado conseguir espacio para hacer una vuelta rapida y limpia. Consigue un P4 que lo coloca comodamente en la Q2. " + sainz.nombre + " se sintió un poco nervioso. Durante estos minutos sentiste la mirada de " + sainz.directorEscuderiaNombre + " en tu espalda varias veces.");
        let q1 = Number(4);
    }

    alert("Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.");
    console.log("Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.");
    alert("Los especialistas dicen que por lo menos en esta sesion, con seguridad, no lloverá.");
    console.log("Los especialistas dicen que por lo menos en esta sesion, con seguridad, no lloverá.");
    alert("Para la Q3 se utilizaron neumaticos intermedios nuevos. Deseas continuar con esos o cambiar?");

    let camino3 = prompt("Ingrese A - Para continuar con neumaticos intermedios. B - Para cambiar a compuesto blando");
    if (camino3 == "A") {
        console.log("Optaste por seguir con neumaticos intermedios usados.");
        alert("A veces ir por lo seguro es una buena opción, " + sainz.nombre + ", logra controlar el monoplaza, pero no esta consiguiendo el ritmo que desea.");
        console.log("A veces ir por lo seguro es una buena opción, " + sainz.nombre + ", logra controlar el monoplaza, pero no esta consiguiendo el ritmo que desea.");
        alert("Ve a " + piloto2 + " pasarlo muy rapido. En ese momento tu piloto se da cuenta que con una llanta más rápida podría, al menos haber puesto resistencia.");
        console.log("Ve a " + piloto2 + " pasarlo muy rapido. En ese momento tu piloto se da cuenta que con una llanta más rápida podría, al menos haber puesto resistencia.");
        alert("P6 para " + piloto1 + " y sus nervios afloran. " + sainz.directorEscuderiaNombre + " se acerca y pregunta por que no optaste por los blandos y vuelve a su lugar, ya que aun estamos entre los 10 mejores");
        console.log("P6 para " + piloto1 + " y sus nervios afloran. " + sainz.directorEscuderiaNombre + " se acerca y pregunta por que no optaste por los blandos y vuelve a su lugar, ya que aun estamos entre los 10 mejores");
        let q2 = Number(6);
    } else { //CAMINO 4
        console.log("Hora de ir por los blandos.");
        alert(piloto1 + " va volando, siente que puede conseguir ese P1. " + piloto2 + " a cerrado su vuelta en 1.29.17y ha ingresado a boxes. " + sainz.nombre + " se prepara nuevamente para una vuelta rápida y la consigue! P1 para el " + sainz.nacionalidad + ".");
        console.log(piloto1 + " va volando, siente que puede conseguir ese P1. " + piloto2 + " a cerrado su vuelta en 1.29.17y ha ingresado a boxes. " + sainz.nombre + " se prepara nuevamente para una vuelta rápida y la consigue! P1 para el " + sainz.nacionalidad + ".");
        alert("De fondo se escucha a un emocionado " + sainz.directorEscuderiaNombre + " " + sainz.directorEscuderiaApellido + " emocionado, que da cuenta de la ilusión de todo el equipo");
        console.log("De fondo se escucha a un emocionado " + sainz.directorEscuderiaNombre + " " + sainz.directorEscuderiaApellido + " emocionado, que da cuenta de la ilusión de todo el equipo");
        alert(sainz.nombre + " se sintió muy cómodo con tu actuación y con el auto.");
        console.log(sainz.nombre + " se sintió muy cómodo con tu actuación y con el auto.");
        let q2 = Number(1);
    }

    alert("Los monitores de clima marcan que la lluvia llegará de manera progresiva pero logrará mucha instensidad sobre la mitad de la Q3.");
    console.log("Los monitores de clima marcan que la lluvia llegará de manera progresiva pero logrará mucha instensidad sobre la mitad de la Q3.");
    alert("Aún no llueve asi que es momento de comenzar estos últimos 10 minutos.");
    console.log("Aún no llueve asi que es momento de comenzar estos últimos 10 minutos.");
    alert(sainz.nombre + " sale a la pista con los mismo compuesto de la Q2, marca un tiempo medio de 1.29.32, no es el mas rápido y sus neumáticos están sufriendo la degradación.");
    console.log(sainz.nombre + " sale a la pista con los mismo compuesto de la Q2, marca un tiempo medio de 1.29.32, no es el mas rápido y sus neumáticos están sufriendo la degradación.");
    alert("Es hora de llamarlo a boxes. Según lo indicado aún faltan 2 minutos para que comience a llover.");
    console.log("Es hora de llamarlo a boxes. Según lo indicado aún faltan 2 minutos para que comience a llover.");
    alert(sainz.nombre + " avisa por radio que ya se nota la llovizna en la pista y que siente que lloverá muy fuerte proximamente.");
    console.log(sainz.nombre + " avisa por radio que ya se nota la llovizna en la pista y que siente que lloverá muy fuerte proximamente.");
    alert(sainz.apellido + " se siente confiado y dice que puede controlar el monoplaza " + sainz.color + " con los neumáticos full wet.");
    console.log(sainz.apellido + " se siente confiado y dice que puede controlar el monoplaza " + sainz.color + " con los neumáticos full wet.");
    alert("Vos y tus mecánicos habían preparado el compuesto inter wet.");
    console.log("Vos y tus mecánicos habían preparado el compuesto inter wet.");
    alert("Que deseas hacer?")

    let camino5 = prompt("A - Hacer caso al piloto y poner compuesto para mucha lluvia (full wet). B - Seguir tu instinto y utilizar neumáticos intermedios para lluvia (inter wet).");
    if (camino5 == "A") { //CAMINO 5
        console.log(sainz.nombre + "  entra a boxes y le colocan neumáticos full wet.");
        alert("Decides escuchar a tu piloto. Luego de dos curvas, notas que " + piloto1 + " está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.");
        console.log("Decides escuchar a tu piloto. Luego de dos curvas, notas que " + piloto1 + " está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.");
        alert("Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wed comienzan a irse de la pista. " + piloto2 + " con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.");
        console.log("Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wed comienzan a irse de la pista. " + piloto2 + " con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.");
        alert(sainz.nombre + " logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " + sainz.nombreEscuderia + " está conforme. Mañana durante la carrera saldrá en segunda fila.");
        console.log(sainz.nombre + " logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " + sainz.nombreEscuderia + " está conforme. Mañana durante la carrera saldrá en segunda fila.");
        let q3 = Number(3);
    } else { //CAMINO 6
        console.log(sainz.nombre + "  entra a boxes y le colocan neumáticos inter wet.");
        alert(sainz.nombre + " no protesta y respeta tu decisión como ingeniero. Sale a a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vueta rápida, el clima lo acompaña, sigue moderada.");
        console.log(sainz.nombre + " no protesta y respeta tu decisión como ingeniero. Sale a a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vueta rápida, el clima lo acompaña, sigue moderada.");
        alert(piloto1 + " logra marcar un tiempazo ! 1.28.54. De lo más rapido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser mas fuerte.");
        console.log(piloto1 + " logra marcar un tiempazo ! 1.28.54. De lo más rapido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser mas fuerte.");
        alert("Con cuidado " + sainz.nombre + " llega al pit y todos los presentes festejan. " + piloto2 + " no pudo superar el resultado. Mañana " + sainz.nombreEscuderia + " sale desde la primera línea.");
        console.log("Con cuidado " + sainz.nombre + " llega al pit y todos los presentes festejan. " + piloto2 + " no pudo superar el resultado. Mañana " + sainz.nombreEscuderia + " sale desde la primera línea.");
        let q3 = Number(1);
    }

    finalPromedio()

    if (final => 3) { //BUENO
        alert(sainz.directorEscuderiaNombre + " " + sainz.directorEscuderiaApellido + " se te acerca con una sonrisa y abraza alegremente junto a" + sainz.nombre + ". Sabe que mañana será un día con muchas espectativas. Y lo conseguiste todo en un solo día, " + usuarioNombre + " " + usuarioApellido + ".")
        console.log(sainz.directorEscuderiaNombre + " " + sainz.directorEscuderiaApellido + " se te acerca con una sonrisa y abraza alegremente junto a" + sainz.nombre + ". Sabe que mañana será un día con muchas espectativas. Y lo conseguiste todo en un solo día, " + usuarioNombre + " " + usuarioApellido + ".")
    } else { //MALO
        alert("Sabes que estar trabajando para " + sainz.nombreEscuderia + " es una gran responsabilidad." + sainz.nombre + " se baja del auto bastante frustrado, lo deja saber por las expresiones en su cara. " + sainz.directorEscuderiaNombre + " " + sainz.directorEscuderiaApellido + " sigue sentado en su silla frente a su monitor, te dirige una mirada pensativa. Te hace dudar de si estas a la altura de este desafío.")
        console.log("Sabes que estar trabajando para " + sainz.nombreEscuderia + " es una gran responsabilidad." + sainz.nombre + " se baja del auto bastante frustrado, lo deja saber por las expresiones en su cara. " + sainz.directorEscuderiaNombre + " " + sainz.directorEscuderiaApellido + " sigue sentado en su silla frente a su monitor, te dirige una mirada pensativa. Te hace dudar de si estas a la altura de este desafío.")
    }
} else { //CAMINO MAX VERSTAPPEN
    let Piloto1 = "Max Verstappen";
    let Piloto2 = "Carlos Sainz";
    console.log(verstappen.nombre + " " + verstappen.apellido)
    alert("Bienvenido " + usuarioNombre + " " + usuarioApellido + " dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.");
    console.log("Bienvenido " + usuarioNombre + " " + usuarioApellido + " dificil tu primer gran día. Qualy en Suzuka con posibilidades de lluvia. Que desafio.");
    alert("Lo primero que debes saber es que trabajar con " + Piloto1 + " es algo muy importante.");
    console.log("Lo primero que debes saber es que trabajar con " + Piloto1 + " es algo muy importante.")
    let q3 = Number(1)

    alert(verstappen.nombreEscuderia + " es el sueño de todos.");
    console.log(verstappen.nombreEscuderia + " es el sueño de todos.");
    alert("Bueno, acomodate, ya estamos casi listos para ponernos en marcha.");
    console.log("Bueno, acomodate, ya estamos casi listos para ponernos en marcha.");
    alert(Piloto1 + " te saluda a lo lejos y se sube a su monoplaza color " + verstappen.color + ".");
    console.log(Piloto1 + " te saluda a lo lejos y se sube a su monoplaza color" + verstappen.color + ".");
    alert("Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.");
    console.log("Te pones los auriculares y lo saludas. Faltan 3 min para que los primeros 18 minutos de la Q3 empiecen.");
    alert("Debes decidir:");
    console.log("Debes decidir:");

    alert("A - Sacar a " + Piloto1 + ", primero, con pista y aire limpio pero con el asfalto menos engomado.");
    alert("B - Sacar a " + Piloto1 + " despues del minuto 5, con más trafico pero con mayor adherencia.");

    let camino1 = prompt("Ingrese A - Para sacar al piloto primero. B - Para sacar al piloto despues del minuto 5.");
    if (camino1 == "A") {
        ; //CAMINO 1
        console.log("Salen primero.")
        alert("Fue una buena idea para esta parte clasificatoria, " + verstappen.nombre + " consigue un P2 que fue facil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.");
        console.log("Fue una buena idea para esta parte clasificatoria, " + verstappen.nombre + "consigue un P2 que fue facil de sostener durante la Q3. El piloto no sufre estrés durante esta ronda y tus compañeros te han puesto buena cara.");
        alert("Buen trabajo, " + usuarioNombre + " Sigamos así. Te dice " + verstappen.directorEscuderiaNombre + " " + verstappen.directorEscuderiaApellido);
        console.log("Buen trabajo, " + usuarioNombre + " Sigamos así. Te dice " + verstappen.directorEscuderiaNombre + " " + verstappen.directorEscuderiaApellido);
        let q1 = Number("2");
    } else { //CAMINO 2
        console.log("Esperan unos minutos.")
        alert("A " + Piloto1 + " se le ha complicado conseguir espacio para hacer una vuelta rapida y limpia. Consigue un P4 que lo coloca comodamente en la Q2. " + verstappen.nombre + " se sintió un poco nervioso. Durante estos minutos sentiste la mirada de " + verstappen.directorEscuderiaNombre + " en tu espalda varias veces.");
        console.log("A " + Piloto1 + " se le ha complicado conseguir espacio para hacer una vuelta rapida y limpia. Consigue un P4 que lo coloca comodamente en la Q2. " + verstappen.nombre + " se sintió un poco nervioso. Durante estos minutos sentiste la mirada de " + verstappen.directorEscuderiaNombre + " en tu espalda varias veces.");
        let q1 = Number("4");
    }

    alert("Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.");
    console.log("Ya casi estamos listos para la Q2, las nubes se espesan cada vez más.");
    alert("Los especialistas dicen que por lo menos en esta sesion, con seguridad, no lloverá.");
    console.log("Los especialistas dicen que por lo menos en esta sesion, con seguridad, no lloverá.");
    alert("Para la Q3 se utilizaron neumaticos intermedios nuevos. Deseas continuar con esos o cambiar?");
    let camino3 = prompt("Ingrese A - Para continuar con neumaticos intermedios. B - Para cambiar a compuesto blando");
    if (camino3 == "A") {
        console.log("Optaste por seguir con neumaticos intermedios usados.");
        alert("A veces ir por lo seguro es una buena opción, " + verstappen.nombre + ", logra controlar el monoplaza, pero no esta consiguiendo el ritmo que desea.");
        console.log("A veces ir por lo seguro es una buena opción, " + verstappen.nombre + ", logra controlar el monoplaza, pero no esta consiguiendo el ritmo que desea.");
        alert("Ve a " + Piloto2 + " pasarlo muy rapido. En ese momento tu piloto se da cuenta que con una llanta más rápida podría, al menos haber puesto resistencia.");
        console.log("Ve a " + Piloto2 + " pasarlo muy rapido. En ese momento tu piloto se da cuenta que con una llanta más rápida podría, al menos haber puesto resistencia.");
        alert("P6 para " + Piloto1 + " y sus nervios afloran. " + verstappen.directorEscuderiaNombre + " se acerca y pregunta por que no optaste por los blandos y vuelve a su lugar, ya que aun estamos entre los 10 mejores");
        console.log("P6 para " + Piloto1 + " y sus nervios afloran. " + verstappen.directorEscuderiaNombre + " se acerca y pregunta por que no optaste por los blandos y vuelve a su lugar, ya que aun estamos entre los 10 mejores");
        let q2 = Number("6");
    } else { //CAMINO 4
        console.log("Hora de ir por los blandos.");
        alert(Piloto1 + " va volando, siente que puede conseguir ese P1. " + Piloto2 + " a cerrado su vuelta en 1.29.17y ha ingresado a boxes. " + verstappen.nombre + " se prepara nuevamente para una vuelta rápida y la consigue! P1 para el " + verstappen.nacionalidad + ".");
        console.log(Piloto1 + " va volando, siente que puede conseguir ese P1. " + Piloto2 + " a cerrado su vuelta en 1.29.17y ha ingresado a boxes. " + verstappen.nombre + " se prepara nuevamente para una vuelta rápida y la consigue! P1 para el " + verstappen.nacionalidad + ".");
        alert("De fondo se escucha a un emocionado " + verstappen.directorEscuderiaNombre + " " + verstappen.directorEscuderiaApellido + " emocionado, que da cuenta de la ilusión de todo el equipo");
        console.log("De fondo se escucha a un emocionado " + verstappen.directorEscuderiaNombre + " " + verstappen.directorEscuderiaApellido + " emocionado, que da cuenta de la ilusión de todo el equipo");
        alert(verstappen.nombre + " se sintió muy cómodo con tu actuación y con el auto.");
        console.log(verstappen.nombre + " se sintió muy cómodo con tu actuación y con el auto.");
        let q2 = Number("1");
    }

    alert("Los monitores de clima marcan que la lluvia llegará de manera progresiva pero logrará mucha instensidad sobre la mitad de la Q3.");
    console.log("Los monitores de clima marcan que la lluvia llegará de manera progresiva pero logrará mucha instensidad sobre la mitad de la Q3.");
    alert("Aún no llueve asi que es momento de comenzar estos últimos 10 minutos.");
    console.log("Aún no llueve asi que es momento de comenzar estos últimos 10 minutos.");
    alert(verstappen.nombre + " sale a la pista con los mismo compuesto de la Q2, marca un tiempo medio de 1.29.32, no es el mas rápido y sus neumáticos están sufriendo la degradación.");
    console.log(verstappen.nombre + " sale a la pista con los mismo compuesto de la Q2, marca un tiempo medio de 1.29.32, no es el mas rápido y sus neumáticos están sufriendo la degradación.");
    alert("Es hora de llamarlo a boxes. Según lo indicado aún faltan 2 minutos para que comience a llover.");
    console.log("Es hora de llamarlo a boxes. Según lo indicado aún faltan 2 minutos para que comience a llover.");
    alert(verstappen.nombre + " avisa por radio que ya se nota la llovizna en la pista y que siente que lloverá muy fuerte proximamente.");
    console.log(verstappen.nombre + " avisa por radio que ya se nota la llovizna en la pista y que siente que lloverá muy fuerte proximamente.");
    alert(verstappen.apellido + " se siente confiado y dice que puede controlar el monoplaza " + verstappen.color + " con los neumáticos full wet.");
    console.log(verstappen.apellido + " se siente confiado y dice que puede controlar el monoplaza " + verstappen.color + " con los neumáticos full wet.");
    alert("Vos y tus mecánicos habían preparado el compuesto inter wet.");
    console.log("Vos y tus mecánicos habían preparado el compuesto inter wet.");
    alert("Que deseas hacer?")

    let camino5 = prompt("A - Hacer caso al piloto y poner compuesto para mucha lluvia (full wet). B - Seguir tu instinto y utilizar neumáticos intermedios para lluvia (inter wet).");
    if (camino5 == "A") { //CAMINO 5
        console.log(verstappen.nombre + "  entra a boxes y le colocan neumáticos full wet.");
        alert("Decides escuchar a tu piloto. Luego de dos curvas, notas que " + Piloto1 + " está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.");
        console.log("Decides escuchar a tu piloto. Luego de dos curvas, notas que " + Piloto1 + " está batallando para que el auto no derrape. No tiene adherencia, ni estabilidad a pesar de que la lluvia empezó a ser más fuerte.");
        alert("Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wed comienzan a irse de la pista. " + Piloto2 + " con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.");
        console.log("Luego de dos vueltas la lluvia es incontrolable y los autos empiezan a volver a boxes, y quienes aún están con inter wed comienzan a irse de la pista. " + Piloto2 + " con este compuesto ya esta en el pit con un P1 provisorio. Logró hacer la vuelta más rapida con la pista en mejores condiciones.");
        alert(verstappen.nombre + " logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " + verstappen.nombreEscuderia + " está conforme. Mañana durante la carrera saldrá en segunda fila.");
        console.log(verstappen.nombre + " logra hacer un gran tiempo y ponerlos en un P3, suficiente para un podio decente. El garage de " + verstappen.nombreEscuderia + " está conforme. Mañana durante la carrera saldrá en segunda fila.");
        let q3 = Number(3);
    } else { //CAMINO 6
        console.log(verstappen.nombre + "  entra a boxes y le colocan neumáticos inter wet.");
        alert(verstappen.nombre + " no protesta y respeta tu decisión como ingeniero. Sale a a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vueta rápida, el clima lo acompaña, sigue moderada.");
        console.log(verstappen.nombre + " no protesta y respeta tu decisión como ingeniero. Sale a a la pista con la lluvia incipiente, tiene una primer vuelta de calentamiento y abre la vueta rápida, el clima lo acompaña, sigue moderada.");
        alert(Piloto1 + " logra marcar un tiempazo ! 1.28.54. De lo más rapido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser mas fuerte.");
        console.log(Piloto1 + " logra marcar un tiempazo ! 1.28.54. De lo más rapido de lo que va del fin de semana. P1 provisorio y a boxes ya que la lluvia comenzó a ser mas fuerte.");
        alert("Con cuidado " + verstappen.nombre + " llega al pit y todos los presentes festejan. " + Piloto2 + " no pudo superar el resultado. Mañana " + verstappen.nombreEscuderia + " sale desde la primera línea.");
        console.log("Con cuidado " + verstappen.nombre + " llega al pit y todos los presentes festejan. " + Piloto2 + " no pudo superar el resultado. Mañana " + verstappen.nombreEscuderia + " sale desde la primera línea.");
        let q3 = Number(1);
    }

    finalPromedio()

    if (final => 3) { //BUENO
        alert(verstappen.directorEscuderiaNombre + " " + verstappen.directorEscuderiaApellido + " se te acerca con una sonrisa y abraza alegremente junto a" + verstappen.nombre + ". Sabe que mañana será un día con muchas espectativas. Y lo conseguiste todo en un solo día, " + usuarioNombre + " " + usuarioApellido + ".")
        console.log(verstappen.directorEscuderiaNombre + " " + verstappen.directorEscuderiaApellido + " se te acerca con una sonrisa y abraza alegremente junto a" + verstappen.nombre + ". Sabe que mañana será un día con muchas espectativas. Y lo conseguiste todo en un solo día, " + usuarioNombre + " " + usuarioApellido + ".")
    } else { //MALO
        alert("Sabes que estar trabajando para " + verstappen.nombreEscuderia + " es una gran responsabilidad." + verstappen.nombre + " se baja del auto bastante frustrado, lo deja saber por las expresiones en su cara. " + verstappen.directorEscuderiaNombre + " " + verstappen.directorEscuderiaApellido + " sigue sentado en su silla frente a su monitor, te dirige una mirada pensativa. Te hace dudar de si estas a la altura de este desafío.")
        console.log("Sabes que estar trabajando para " + verstappen.nombreEscuderia + " es una gran responsabilidad." + verstappen.nombre + " se baja del auto bastante frustrado, lo deja saber por las expresiones en su cara. " + verstappen.directorEscuderiaNombre + " " + verstappen.directorEscuderiaApellido + " sigue sentado en su silla frente a su monitor, te dirige una mirada pensativa. Te hace dudar de si estas a la altura de este desafío.")
    }
}


