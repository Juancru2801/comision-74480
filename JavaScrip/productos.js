let productos = [];

// Función para cargar productos desde un archivo JSON
async function cargarProductos() {
    try {
        const response = await fetch('./productos.json');
        if (!response.ok) throw new Error('No se pudo cargar el archivo JSON');
        productos = await response.json();
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}

// Función para renderizar los productos en el DOM
function renderProductos() {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = '';

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

