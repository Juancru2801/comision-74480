async function inicializarApp() {
    try {
        await cargarProductos(); // Cargar productos desde JSON
        renderProductos(); // Renderizar productos
        actualizarCarrito(); // Renderizar carrito con datos de localStorage
    } catch (error) {
        console.error("Error al inicializar la aplicación:", error);
    }
}

// Inicialización de la aplicación
inicializarApp();
