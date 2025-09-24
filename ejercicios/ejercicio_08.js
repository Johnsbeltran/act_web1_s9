let button = document.getElementById('interactiveButton');
let colorBox = document.getElementById('interactiveBox');

// Botón
button.addEventListener('click', () => {
    //Cambio
    if (button.textContent === 'Haz clic') {
        button.textContent = '¡Clickeado!';
        button.classList.add('active');
    } else {
        button.textContent = 'Haz clic';
        button.classList.remove('active');
    }
});

// Mouse Sobre 
colorBox.addEventListener('mouseover', () => {
    colorBox.classList.add('highlight');
});

// Mouse fuera
colorBox.addEventListener('mouseout', () => {
    colorBox.classList.remove('highlight');
});
