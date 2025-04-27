document.getElementById('formulario').addEventListener('submit', function(event) {
    let nombre = document.getElementById('nombre').value.trim();
    let correo = document.getElementById('correo').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    if(nombre === '' || correo === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else if(!correo.includes('@') || !correo.includes('.')) {
        alert('Por favor, ingresa un correo electrónico válido.');
        event.preventDefault();
    }
});