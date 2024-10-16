// Matriz de productos
const productos = [
    { id: 1, nombre: 'Vino Tinto', precio: 30000, imagen: '../imagenes/vino tinto.jpg' },
    { id: 2, nombre: 'Vino Blanco', precio: 28000, imagen: '../imagenes/vino blanco.jpg' },
    { id: 3, nombre: 'Vino Rosado', precio: 35000, imagen: '../imagenes/vino rosado.jpg' },
    { id: 4, nombre: 'Vino Espumante', precio: 70000, imagen: '../imagenes/espumante.jpeg' }
];

// Selección de contenedores del DOM
const productosContainer = document.getElementById('productos-container');
const listaCarrito = document.getElementById('lista-carrito');
const totalPrecioElement = document.getElementById('total');

// Carrito vacío
let carrito = [];

// Función para renderizar los productos
function renderProductos() {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button class="btn-comprar" onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
        `;
        productosContainer.appendChild(div);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    renderCarrito();
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
    carrito.splice(indice, 1);
    renderCarrito();
}

// Inicializar la tienda
renderProductos();
