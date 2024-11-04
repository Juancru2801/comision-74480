// carrito.js

// Carrito vacío o cargado desde `localStorage`
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Selección de contenedores del DOM
const listaCarrito = document.getElementById('lista-carrito');
const totalPrecioElement = document.getElementById('total');

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    try {
        const producto = productos.find(p => p.id === id);
        if (!producto) throw new Error("Producto no encontrado");

        carrito.push(producto);
        actualizarCarrito(); // Actualiza el carrito y guarda en `localStorage`
    } catch (error) {
        listaCarrito.innerHTML = `<p style="color: red;">Error al agregar producto al carrito: ${error.message}</p>`;
    }
}

// Función para renderizar el carrito
function renderCarrito() {
    listaCarrito.innerHTML = ''; // Limpiar el contenido del carrito
    let total = 0;

    carrito.forEach((producto, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${producto.nombre} - $${producto.precio} 
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button></p>
        `;
        listaCarrito.appendChild(div);
        total += producto.precio;
    });

    totalPrecioElement.textContent = total;
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(indice) {
    try {
        carrito.splice(indice, 1);
        actualizarCarrito(); // Actualiza el carrito y guarda en `localStorage`
    } catch (error) {
        listaCarrito.innerHTML = `<p style="color: red;">Error al eliminar producto del carrito: ${error.message}</p>`;
    }
}

// Función para actualizar el carrito y guardarlo en `localStorage`
function actualizarCarrito() {
    renderCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guarda el carrito en `localStorage`
}

// Renderizar el carrito al cargar la página con los datos de `localStorage`
actualizarCarrito();
