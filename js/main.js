document.addEventListener('DOMContentLoaded', () => {
    // Variables y elementos del DOM
    const botonesComprar = document.querySelectorAll('.btn-comprar');
    const totalElemento = document.getElementById('total');
    const botonComprar = document.getElementById('comprar');

    // Cargar carrito desde localStorage o iniciar vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
    actualizarTotal();

    // Evento para añadir productos al carrito
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const producto = obtenerDatosProducto(e.target);
            agregarProductoAlCarrito(producto);
            guardarCarritoEnLocalStorage();
            actualizarTotal();
        });
    });

    // Evento para finalizar la compra
    botonComprar.addEventListener('click', () => {
        if (carrito.length > 0) {
            alert(`Gracias por tu compra. El total es de ${formatearMoneda(calcularTotal())}`);
            carrito = []; // Vaciar el carrito
            guardarCarritoEnLocalStorage(); // Actualizar el localStorage
            actualizarTotal(); // Refrescar la interfaz
        } else {
            alert('Tu carrito está vacío');
        }
    });

    // Función para obtener los datos de un producto desde el botón
    function obtenerDatosProducto(boton) {
        const productoDiv = boton.parentElement;
        const nombre = productoDiv.querySelector('h3').textContent;
        const precio = parseFloat(boton.getAttribute('data-precio'));
        return { nombre, precio };
    }

    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(producto) {
        carrito.push(producto);
    }

    // Función para guardar el carrito en el localStorage
    function guardarCarritoEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // Función para calcular el total de los productos en el carrito
    function calcularTotal() {
        return carrito.reduce((total, producto) => total + producto.precio, 0);
    }

    // Función para actualizar el total mostrado en la interfaz
    function actualizarTotal() {
        const total = calcularTotal();
        totalElemento.textContent = formatearMoneda(total);
    }

    // Función para formatear el total con símbolo de pesos y puntos para miles
    function formatearMoneda(valor) {
        return `$${valor.toLocaleString('es-CO')}`;
    }
});
