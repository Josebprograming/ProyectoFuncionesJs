
document.getElementById("runFunctionsBtn").addEventListener("click", function() {
    alert("Bienvenido a la aplicación de consola. A continuación se mostrará un menú de opciones en el cual podrá elegir una función para ejecutar. Todas las funciones se ejecutarán en la consola del navegador.");
    menuPrincipal();
});

function menuPrincipal() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt(
            "=== MENÚ PRINCIPAL ===\n" +
            "1. Operaciones Aritméticas\n" +
            "2. Operaciones con Arreglos\n" +
            "3. Operaciones con Objetos\n" +
            "4. Terminar Aplicación\n" +
            "\nSeleccione una opción (1-4):"
        );

        switch (opcion) {
            case "1":
                menuOperacionesAritmeticas();
                break;
            case "2":
                menuOperacionesArreglos();
                break;
            case "3":
                menuOperacionesObjetos();
                break;
            case "4":
                continuar = false;
                alert("¡Gracias por usar la aplicación! ¡Hasta luego!");
                console.log("Aplicación terminada.");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    }
}

// ============= OPERACIONES ARITMÉTICAS =============

function menuOperacionesAritmeticas() {
    let volver = false;
    while (!volver) {
        let opcion = prompt(
            "=== OPERACIONES ARITMÉTICAS ===\n" +
            "1. Suma\n" +
            "2. Resta\n" +
            "3. Multiplicación\n" +
            "4. División\n" +
            "5. Potenciación\n" +
            "6. Valor Absoluto\n" +
            "7. Volver al Menú Anterior\n" +
            "\nSeleccione una opción (1-7):"
        );

        switch (opcion) {
            case "1":
                suma();
                break;
            case "2":
                resta();
                break;
            case "3":
                multiplicacion();
                break;
            case "4":
                division();
                break;
            case "5":
                potenciacion();
                break;
            case "6":
                valorAbsoluto();
                break;
            case "7":
                volver = true;
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    }
}

function suma() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Debe ingresar números válidos.");
        return;
    }
    
    let resultado = num1 + num2;
    console.log(`Suma: ${num1} + ${num2} = ${resultado}`);
    alert(`Resultado: ${num1} + ${num2} = ${resultado}`);
}

function resta() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Debe ingresar números válidos.");
        return;
    }
    
    let resultado = num1 - num2;
    console.log(`Resta: ${num1} - ${num2} = ${resultado}`);
    alert(`Resultado: ${num1} - ${num2} = ${resultado}`);
}

function multiplicacion() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Debe ingresar números válidos.");
        return;
    }
    
    let resultado = num1 * num2;
    console.log(`Multiplicación: ${num1} × ${num2} = ${resultado}`);
    alert(`Resultado: ${num1} × ${num2} = ${resultado}`);
}

function division() {
    let num1 = parseFloat(prompt("Ingrese el dividendo:"));
    let num2 = parseFloat(prompt("Ingrese el divisor:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Debe ingresar números válidos.");
        return;
    }
    
    if (num1 < 0 || num2 < 0) {
        alert("Error: No se permiten números negativos en la división.");
        console.log("Error: División rechazada - Se intentaron usar números negativos.");
        return;
    }
    
    if (num2 === 0) {
        alert("Error: No se puede dividir por cero.");
        console.log("Error: División por cero no permitida.");
        return;
    }
    
    let resultado = num1 / num2;
    console.log(`División: ${num1} ÷ ${num2} = ${resultado}`);
    alert(`Resultado: ${num1} ÷ ${num2} = ${resultado}`);
}

function potenciacion() {
    let base = parseFloat(prompt("Ingrese la base:"));
    let exponente = parseFloat(prompt("Ingrese el exponente:"));
    
    if (isNaN(base) || isNaN(exponente)) {
        alert("Error: Debe ingresar números válidos.");
        return;
    }
    
    let resultado = Math.pow(base, exponente);
    console.log(`Potenciación: ${base}^${exponente} = ${resultado}`);
    alert(`Resultado: ${base}^${exponente} = ${resultado}`);
}

function valorAbsoluto() {
    let num = parseFloat(prompt("Ingrese el número:"));
    
    if (isNaN(num)) {
        alert("Error: Debe ingresar un número válido.");
        return;
    }
    
    let resultado = Math.abs(num);
    console.log(`Valor Absoluto: |${num}| = ${resultado}`);
    alert(`Resultado: |${num}| = ${resultado}`);
}

// ============= OPERACIONES CON ARREGLOS =============

function menuOperacionesArreglos() {
    let volver = false;
    while (!volver) {
        let opcion = prompt(
            "=== OPERACIONES CON ARREGLOS ===\n" +
            "1. Crear Arreglo\n" +
            "2. Crear Arreglo de Números\n" +
            "3. Crear Arreglo de Strings\n" +
            "4. Eliminar el Último Valor\n" +
            "5. Eliminar el Primer Valor\n" +
            "6. Realizar Unión de Arreglos\n" +
            "7. Recorrer Arreglo\n" +
            "8. Mostrar Longitud del Arreglo\n" +
            "9. Buscar Parcial\n" +
            "10. Buscar Absoluto\n" +
            "11. Volver al Menú Anterior\n" +
            "\nSeleccione una opción (1-11):"
        );

        switch (opcion) {
            case "1":
                crearArreglo();
                break;
            case "2":
                crearArregloNumeros();
                break;
            case "3":
                crearArregloStrings();
                break;
            case "4":
                eliminarUltimo();
                break;
            case "5":
                eliminarPrimero();
                break;
            case "6":
                unionArreglos();
                break;
            case "7":
                recorrerArreglo();
                break;
            case "8":
                mostrarLongitudArreglo();
                break;
            case "9":
                buscarParcial();
                break;
            case "10":
                buscarAbsoluto();
                break;
            case "11":
                volver = true;
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    }
}

// Arreglo global para operaciones
let arregloGlobal = [];

function crearArreglo() {
    let cantidad = prompt("¿Cuántos elementos desea crear en el arreglo?");
    cantidad = parseInt(cantidad);
    
    if (isNaN(cantidad) || cantidad < 0) {
        alert("Error: Ingrese un número válido.");
        return;
    }
    
    arregloGlobal = [];
    for (let i = 0; i < cantidad; i++) {
        let valor = prompt(`Ingrese el elemento ${i + 1}:`);
        arregloGlobal.push(valor);
    }
    
    console.log("Arreglo creado:", arregloGlobal);
    alert(`Arreglo creado con ${cantidad} elementos. Revise la consola.`);
}

function crearArregloNumeros() {
    let cantidad = prompt("¿Cuántos números desea crear en el arreglo?");
    cantidad = parseInt(cantidad);
    
    if (isNaN(cantidad) || cantidad < 0) {
        alert("Error: Ingrese un número válido.");
        return;
    }
    
    arregloGlobal = [];
    for (let i = 0; i < cantidad; i++) {
        let valor = prompt(`Ingrese el número ${i + 1}:`);
        valor = parseFloat(valor);
        
        if (isNaN(valor)) {
            alert("Error: Debe ingresar solo números.");
            return;
        }
        
        arregloGlobal.push(valor);
    }
    
    console.log("Arreglo de números creado:", arregloGlobal);
    alert(`Arreglo de números creado con ${cantidad} elementos. Revise la consola.`);
}

function crearArregloStrings() {
    let cantidad = prompt("¿Cuántos strings desea crear en el arreglo?");
    cantidad = parseInt(cantidad);
    
    if (isNaN(cantidad) || cantidad < 0) {
        alert("Error: Ingrese un número válido.");
        return;
    }
    
    arregloGlobal = [];
    for (let i = 0; i < cantidad; i++) {
        let valor = prompt(`Ingrese el texto ${i + 1}:`);
        arregloGlobal.push(valor);
    }
    
    console.log("Arreglo de strings creado:", arregloGlobal);
    alert(`Arreglo de strings creado con ${cantidad} elementos. Revise la consola.`);
}

function eliminarUltimo() {
    if (arregloGlobal.length === 0) {
        alert("Error: El arreglo está vacío.");
        console.log("Error: Intento de eliminar del arreglo vacío.");
        return;
    }
    
    let eliminado = arregloGlobal.pop();
    console.log(`Último elemento eliminado: ${eliminado}`);
    console.log("Arreglo actualizado:", arregloGlobal);
    alert(`Elemento eliminado: ${eliminado}. Revise la consola.`);
}

function eliminarPrimero() {
    if (arregloGlobal.length === 0) {
        alert("Error: El arreglo está vacío.");
        console.log("Error: Intento de eliminar del arreglo vacío.");
        return;
    }
    
    let eliminado = arregloGlobal.shift();
    console.log(`Primer elemento eliminado: ${eliminado}`);
    console.log("Arreglo actualizado:", arregloGlobal);
    alert(`Elemento eliminado: ${eliminado}. Revise la consola.`);
}

function unionArreglos() {
    if (arregloGlobal.length === 0) {
        alert("Error: El arreglo principal está vacío.");
        return;
    }
    
    let cantidad = prompt("¿Cuántos elementos desea agregar al arreglo?");
    cantidad = parseInt(cantidad);
    
    if (isNaN(cantidad) || cantidad < 0) {
        alert("Error: Ingrese un número válido.");
        return;
    }
    
    let arregloSecundario = [];
    for (let i = 0; i < cantidad; i++) {
        let valor = prompt(`Ingrese el elemento ${i + 1}:`);
        arregloSecundario.push(valor);
    }
    
    let arregloUnido = arregloGlobal.concat(arregloSecundario);
    console.log("Primer arreglo:", arregloGlobal);
    console.log("Segundo arreglo:", arregloSecundario);
    console.log("Arreglo unido:", arregloUnido);
    alert("Unión realizada. Revise la consola para ver los detalles.");
}

function recorrerArreglo() {
    if (arregloGlobal.length === 0) {
        alert("Error: El arreglo está vacío.");
        return;
    }
    
    console.log("=== Recorriendo Arreglo ===");
    arregloGlobal.forEach((elemento, indice) => {
        console.log(`Índice ${indice}: ${elemento}`);
    });
    alert("Arreglo recorrido. Revise la consola.");
}

function mostrarLongitudArreglo() {
    let longitud = arregloGlobal.length;
    console.log(`Longitud del arreglo: ${longitud}`);
    alert(`La longitud del arreglo es: ${longitud}`);
}

function buscarParcial() {
    if (arregloGlobal.length === 0) {
        alert("Error: El arreglo está vacío.");
        return;
    }
    
    let busqueda = prompt("Ingrese el texto a buscar (búsqueda parcial):");
    let resultados = arregloGlobal.filter(elemento => 
        String(elemento).toLowerCase().includes(busqueda.toLowerCase())
    );
    
    console.log(`Búsqueda parcial de "${busqueda}":`, resultados);
    if (resultados.length > 0) {
        alert(`Se encontraron ${resultados.length} coincidencia(s). Revise la consola.`);
    } else {
        alert("No se encontraron coincidencias.");
    }
}

function buscarAbsoluto() {
    if (arregloGlobal.length === 0) {
        alert("Error: El arreglo está vacío.");
        return;
    }
    
    let busqueda = prompt("Ingrese el valor exacto a buscar:");
    let indice = arregloGlobal.indexOf(busqueda);
    
    if (indice !== -1) {
        console.log(`Búsqueda exacta de "${busqueda}": Encontrado en índice ${indice}`);
        alert(`Elemento encontrado en índice ${indice}. Revise la consola.`);
    } else {
        console.log(`Búsqueda exacta de "${busqueda}": No encontrado`);
        alert("No se encontró el elemento.");
    }
}

// ============= OPERACIONES CON OBJETOS =============

function menuOperacionesObjetos() {
    let volver = false;
    while (!volver) {
        let opcion = prompt(
            "=== OPERACIONES CON OBJETOS ===\n" +
            "1. Crear Objeto\n" +
            "2. Agregar Propiedad\n" +
            "3. Eliminar Propiedad\n" +
            "4. Mostrar Todas las Propiedades\n" +
            "5. Recorrer Propiedades\n" +
            "6. Buscar Propiedad\n" +
            "7. Mostrar Valores\n" +
            "8. Contar Propiedades\n" +
            "9. Volver al Menú Anterior\n" +
            "\nSeleccione una opción (1-9):"
        );

        switch (opcion) {
            case "1":
                crearObjeto();
                break;
            case "2":
                agregarPropiedad();
                break;
            case "3":
                eliminarPropiedad();
                break;
            case "4":
                mostrarPropiedades();
                break;
            case "5":
                recorrerObjeto();
                break;
            case "6":
                buscarPropiedad();
                break;
            case "7":
                mostrarValores();
                break;
            case "8":
                contarPropiedades();
                break;
            case "9":
                volver = true;
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    }
}

// Objeto global para operaciones
let objetoGlobal = {};

function crearObjeto() {
    let cantidad = prompt("¿Cuántas propiedades desea crear en el objeto?");
    cantidad = parseInt(cantidad);
    
    if (isNaN(cantidad) || cantidad < 0) {
        alert("Error: Ingrese un número válido.");
        return;
    }
    
    objetoGlobal = {};
    for (let i = 0; i < cantidad; i++) {
        let clave = prompt(`Ingrese el nombre de la propiedad ${i + 1}:`);
        let valor = prompt(`Ingrese el valor de la propiedad "${clave}":`);
        objetoGlobal[clave] = valor;
    }
    
    console.log("Objeto creado:", objetoGlobal);
    alert(`Objeto creado con ${cantidad} propiedades. Revise la consola.`);
}

function agregarPropiedad() {
    let clave = prompt("Ingrese el nombre de la nueva propiedad:");
    let valor = prompt(`Ingrese el valor para "${clave}":`);
    
    objetoGlobal[clave] = valor;
    console.log(`Propiedad agregada: "${clave}" = "${valor}"`);
    console.log("Objeto actualizado:", objetoGlobal);
    alert("Propiedad agregada. Revise la consola.");
}

function eliminarPropiedad() {
    let propiedades = Object.keys(objetoGlobal);
    
    if (propiedades.length === 0) {
        alert("Error: El objeto está vacío.");
        return;
    }
    
    let clave = prompt(`Ingrese el nombre de la propiedad a eliminar:\n${propiedades.join(", ")}`);
    
    if (clave in objetoGlobal) {
        delete objetoGlobal[clave];
        console.log(`Propiedad eliminada: "${clave}"`);
        console.log("Objeto actualizado:", objetoGlobal);
        alert("Propiedad eliminada. Revise la consola.");
    } else {
        alert("Error: La propiedad no existe.");
    }
}

function mostrarPropiedades() {
    let propiedades = Object.keys(objetoGlobal);
    
    if (propiedades.length === 0) {
        alert("El objeto está vacío.");
        console.log("Objeto vacío.");
        return;
    }
    
    console.log("=== Propiedades del Objeto ===");
    console.log(propiedades);
    alert(`El objeto tiene las siguientes propiedades: ${propiedades.join(", ")}`);
}

function recorrerObjeto() {
    let propiedades = Object.keys(objetoGlobal);
    
    if (propiedades.length === 0) {
        alert("Error: El objeto está vacío.");
        return;
    }
    
    console.log("=== Recorriendo Objeto ===");
    for (let clave in objetoGlobal) {
        console.log(`${clave}: ${objetoGlobal[clave]}`);
    }
    alert("Objeto recorrido. Revise la consola.");
}

function buscarPropiedad() {
    let clave = prompt("Ingrese el nombre de la propiedad a buscar:");
    
    if (clave in objetoGlobal) {
        console.log(`Propiedad encontrada: "${clave}" = "${objetoGlobal[clave]}"`);
        alert(`Propiedad encontrada: "${clave}" = "${objetoGlobal[clave]}"`);
    } else {
        console.log(`Propiedad no encontrada: "${clave}"`);
        alert("La propiedad no existe en el objeto.");
    }
}

function mostrarValores() {
    let valores = Object.values(objetoGlobal);
    
    if (valores.length === 0) {
        alert("El objeto está vacío.");
        console.log("Objeto vacío.");
        return;
    }
    
    console.log("=== Valores del Objeto ===");
    console.log(valores);
    alert(`Los valores del objeto son: ${valores.join(", ")}`);
}

function contarPropiedades() {
    let cantidad = Object.keys(objetoGlobal).length;
    console.log(`Cantidad de propiedades: ${cantidad}`);
    alert(`El objeto tiene ${cantidad} propiedad(es).`);
}
