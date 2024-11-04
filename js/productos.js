// productos.js

// Matriz de productos
const productos = [
    { id: 1, nombre: 'Vino Tinto', precio: 30000, imagen: '../imagenes/vino tinto.jpg' },
    { id: 2, nombre: 'Vino Blanco', precio: 28000, imagen: '../imagenes/vino blanco.jpg' },
    { id: 3, nombre: 'Vino Rosado', precio: 35000, imagen: '../imagenes/vino rosado.jpg' },
    { id: 4, nombre: 'Vino Espumante', precio: 70000, imagen: '../imagenes/espumante.jpeg' }
];

// Función para renderizar los productos
function renderProductos() {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = ''; // Limpiar el contenedor
    try {
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
    } catch (error) {
        productosContainer.innerHTML = `<p style="color: red;">Error al cargar los productos: ${error.message}</p>`;
    }
}
