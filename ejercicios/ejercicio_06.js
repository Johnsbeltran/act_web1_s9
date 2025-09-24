// Seleccionar
const miCaja = document.getElementById('miCaja');
const btnAgregar = document.getElementById('btn-agregar');
const btnQuitar = document.getElementById('btn-quitar');
const btnAlternar = document.getElementById('btn-alternar');

// Eventos 

btnAgregar.addEventListener('click', () => {
  miCaja.classList.add('resaltado');
  console.log('Clase "resaltado" agregada. Clases actuales:', miCaja.classList);
});


btnQuitar.addEventListener('click', () => {
  miCaja.classList.remove('resaltado');
  console.log('Clase "resaltado" quitada. Clases actuales:', miCaja.classList);
});


btnAlternar.addEventListener('click', () => {
  miCaja.classList.toggle('borde-redondo');
  console.log('Clase "borde-redondo" alternada. Clases actuales:', miCaja.classList);
});
