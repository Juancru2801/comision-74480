 // Declaración de constantes
 const direccion = "Calle Viñas 123, Madrid";
 const telefono = "+34 600 123 456";
 const email = "info@lacepa.com";

 // Variables
 let nombreVinoteca = "Vinoteca La Cepa";
 let horarioApertura = "De lunes a viernes: 10:00 AM - 8:00 PM";

 // Array de vinos
 const vinos = [
     {
         nombre: "Vino Tinto",
         descripcion: "Un exquisito vino tinto con cuerpo y notas afrutadas.",
         imagen: "https://via.placeholder.com/200x300"
     },
     {
         nombre: "Vino Blanco",
         descripcion: "Fresco y afrutado, perfecto para acompañar pescados y mariscos.",
         imagen: "https://via.placeholder.com/200x300"
     },
     {
         nombre: "Vino Rosado",
         descripcion: "Delicado, suave y refrescante, ideal para tardes de verano.",
         imagen: "https://via.placeholder.com/200x300"
     }
 ];

 // Mostrar la información en la consola
 console.log("Nombre de la vinoteca:", nombreVinoteca);
 console.log("Horario de Apertura:", horarioApertura);
 console.log("Dirección:", direccion);
 console.log("Teléfono:", telefono);
 console.log("Email:", email);
 console.log("Catálogo de vinos:", vinos);

 // Prompt: Pedir el nombre del visitante y mostrarlo en la consola
 let visitante = prompt("¡Bienvenido a La Cepa! ¿Cuál es tu nombre?");
 if (visitante) {
     console.log(`Hola, ${visitante}. ¡Esperamos que disfrutes tu experiencia!`);
     alert(`Hola, ${visitante}, bienvenido a la Vinoteca La Cepa`);
 }

 // Confirm: Preguntar si desean ver el horario de apertura
 let verHorario = confirm("¿Quieres ver el horario de apertura?");
 if (verHorario) {
     alert(`El horario de apertura es: ${horarioApertura}`);
 }

 // Función para mostrar detalles del vino seleccionado
 function mostrarDetalle(nombre, descripcion) {
     document.getElementById('detalle-nombre').innerText = nombre;
     document.getElementById('detalle-descripcion').innerText = descripcion;
     console.log(`Mostrando detalles de: ${nombre}`);
 }

 // Función para manejar el envío del formulario
 function enviarFormulario(event) {
     event.preventDefault(); // Evita el envío del formulario para mostrar una alerta
     const nombre = document.getElementById('nombre').value;
     const mensaje = document.getElementById('mensaje').value;
     
     alert(`Gracias por contactarnos, ${nombre}. Hemos recibido tu mensaje: "${mensaje}"`);
     
     // Confirmar envío del mensaje en la consola
     console.log(`Mensaje recibido de ${nombre}: "${mensaje}"`);
     
     // Limpiar el formulario
     document.getElementById('formulario-contacto').reset();   }