// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al botón y al campo de entrada
    const botonSaludar = document.getElementById('saludar');
    const campoNombre = document.getElementById('nombre');
    const mensajeRespuesta = document.getElementById('mensaje-respuesta');
    
    botonSaludar.addEventListener('click', function() {
        // Obtener el valor del nombre
        const nombre = campoNombre.value.trim();
    
        if (nombre) {
            mensajeRespuesta.innerHTML = `¡Hola, ${nombre}! Gracias por contactarme. Estaré en contacto pronto`;
            // Limpiar el campo después de enviar
            campoNombre.value = '';
        } else {
            mensajeRespuesta.innerHTML = 'Por favor, ingresa tu nombre.';
        }
    });
    
    campoNombre.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevenir el envío del formulario
            botonSaludar.click(); // Simular clic en el botón
        }
    });
});