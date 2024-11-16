let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    try {
        const producto = productos.find(p => p.id === id);
        if (!producto) throw new Error("Producto no encontrado");

        const itemCarrito = carrito.find(p => p.id === id);
        if (itemCarrito) {
            itemCarrito.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }

        actualizarCarrito();
    } catch (error) {
        console.error("Error al agregar producto:", error);
    }
}

// Función para renderizar el carrito
function renderCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalPrecioElement = document.getElementById('total');
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${producto.nombre} - $${producto.precio} (Cantidad: ${producto.cantidad})
            <button onclick="cambiarCantidad(${producto.id}, -1)">-</button>
            <button onclick="cambiarCantidad(${producto.id}, 1)">+</button>
            <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
            </p>
        `;
        listaCarrito.appendChild(div);
        total += producto.precio * producto.cantidad;
    });

    totalPrecioElement.textContent = `Total: $${total}`;
}

// Función para cambiar la cantidad de un producto en el carrito
function cambiarCantidad(id, cambio) {
    const itemCarrito = carrito.find(p => p.id === id);
    if (itemCarrito) {
        itemCarrito.cantidad += cambio;
        if (itemCarrito.cantidad <= 0) {
            carrito = carrito.filter(p => p.id !== id);
        }
        actualizarCarrito();
    }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    actualizarCarrito();
}

// Función para actualizar el carrito y guardarlo en localStorage
function actualizarCarrito() {
    renderCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para procesar el checkout
function procesarCheckout() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    alert("¡Compra realizada con éxito!");
    carrito = [];
    actualizarCarrito();
}

