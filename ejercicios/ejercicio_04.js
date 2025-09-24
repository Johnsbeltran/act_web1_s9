let header1 = document.querySelector('h1');
header1.textContent = 'New title';

// Segundo párrafo 
let secondParagraph = document.querySelector('p:last-of-type');
secondParagraph.innerHTML = 'Este es un texto modificado';

// Cambio
let newButton = document.createElement('button');
newButton.textContent = 'Haz clic para cambiar el contenido';
document.body.appendChild(newButton); // Añade el botón al final del body

// Evento
newButton.addEventListener('click', () => {
    let firstParagraph = document.querySelector('p');
    firstParagraph.textContent = 'cambio después de un clic.';
    
    // other element after click
    let newElement = document.createElement('p');
    newElement.textContent = 'Párrafo nuevo!';
    document.body.appendChild(newElement);
});
