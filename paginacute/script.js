// Cargar el historial guardado al cargar la página
window.addEventListener('load', function() {
    // Cargar historial de textos
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const historyContainer = document.getElementById('history-container');

    // Mostrar historial de escritos
    historyContainer.innerHTML = '';
    history.forEach(function(text, index) {
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.textContent = text;
        historyContainer.appendChild(historyItem);
    });
});

// Guardar el texto al hacer clic en el botón
document.getElementById('save-text').addEventListener('click', function() {
    const text = document.getElementById('text-area').value;
    
    if (text.trim()) {
        // Recuperar el historial del localStorage
        const history = JSON.parse(localStorage.getItem('history')) || [];
        
        // Añadir el nuevo texto al historial
        history.push(text);
        
        // Guardar el historial actualizado en localStorage
        localStorage.setItem('history', JSON.stringify(history));
        
        // Limpiar el área de texto
        document.getElementById('text-area').value = '';
        
        // Mostrar el mensaje de éxito
        const successMessage = document.getElementById('success-message');
        successMessage.classList.remove('hidden');
        
        // Ocultar el mensaje de éxito después de 3 segundos
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 3000);
        
        // Cargar el historial actualizado
        const historyContainer = document.getElementById('history-container');
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.textContent = text;
        historyContainer.appendChild(historyItem);
    } else {
        alert("Por favor, escribe algo antes de guardar.");
    }
});

// Borrar el historial al hacer clic en el botón "Borrar Historial"
document.getElementById('clear-history').addEventListener('click', function() {
    // Eliminar historial de localStorage
    localStorage.removeItem('history');
    
    // Limpiar el contenedor del historial en la página
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '';

    // Opcionalmente, mostrar un mensaje de confirmación
    alert("El historial ha sido borrado.");
});



