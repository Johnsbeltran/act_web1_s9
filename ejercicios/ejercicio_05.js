// read
let imagenElemento = document.getElementById('miImagen');
let enlaceElemento = document.getElementById('miEnlace');

// Getters
let srcOriginal = imagenElemento.getAttribute('src');
let hrefOriginal = enlaceElemento.getAttribute('href');

console.log('El src original de la imagen es: ' + srcOriginal);
console.log('El href original del enlace es: ' + hrefOriginal);

// Imagen 
imagenElemento.setAttribute('src', 'https://placehold.co/400x400/png?text=Nueva+Imagen');

// Link
enlaceElemento.setAttribute('href', 'https://www.gemini.com');
