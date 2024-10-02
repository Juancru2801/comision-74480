// Declaración de constantes
const nombreTienda = "La Cepa";
const direccion = "Calle Viñas 123, Madrid";
const horarioApertura = "De lunes a viernes: 10:00 AM - 8:00 PM";

// Declaración de variables
let cliente;
let pedido = [];
let continuarComprando = true;

// Array de vinos disponibles
const vinos = [
    { nombre: "Vino Tinto", precio: 12, descripcion: "Cuerpo completo con notas de frutos rojos." },
    { nombre: "Vino Blanco", precio: 10, descripcion: "Fresco, ideal para mariscos y pescados." },
    { nombre: "Vino Rosado", precio: 9, descripcion: "Suave y refrescante, perfecto para el verano." },
];

// Mensaje de bienvenida con Prompt para obtener el nombre del cliente
cliente = prompt("¡Bienvenido a " + nombreTienda + "! ¿Cuál es tu nombre?");
if (cliente) {
    alert("Hola " + cliente + ", ¡esperamos que disfrutes de nuestra selección de vinos!");
    console.log("Cliente: " + cliente);
}

// Confirmar si el cliente desea ver los vinos disponibles
if (confirm("¿Te gustaría ver los vinos disponibles?")) {
    // Iteramos sobre el array de vinos y los mostramos en la consola
    console.log("Lista de vinos disponibles:");
    vinos.forEach((vino, index) => {
        console.log((index + 1) + ". " + vino.nombre + " - Precio: " + vino.precio + "€ - " + vino.descripcion);
    });
} else {
    alert("¡Esperamos verte pronto, " + cliente + "!");
    continuarComprando = false;
}

// Función para agregar vinos al pedido
function agregarVinoAlPedido(vino) {
    pedido.push(vino);
    alert(vino.nombre + " ha sido añadido a tu pedido.");
    console.log("Pedido actual: ", pedido);
}

// Función para mostrar el pedido total
function mostrarPedido() {
    if (pedido.length > 0) {
        let total = 0;
        console.log("Pedido de " + cliente + ":");
        pedido.forEach(vino => {
            console.log(vino.nombre + " - " + vino.precio + "$");
            total += vino.precio;
        });
        console.log("Total a pagar: " + total + "$");
        alert("Gracias por tu compra, " + cliente + "! El total es " + total + "$.");
    } else {
        alert("No has agregado ningún vino a tu pedido.");
    }
}

// Ciclo de compra
while (continuarComprando) {
    let seleccion = prompt("¿Qué vino te gustaría comprar? (Escribe el número correspondiente): \n1. Vino Tinto\n2. Vino Blanco\n3. Vino Rosado\n4. Terminar pedido");

    if (seleccion === "1" || seleccion === "2" || seleccion === "3") {
        let vinoSeleccionado = vinos[parseInt(seleccion) - 1];
        agregarVinoAlPedido(vinoSeleccionado);
    } else if (seleccion === "4") {
        continuarComprando = false;
        mostrarPedido();
    } else {
        alert("Por favor, selecciona una opción válida.");
    }
}
