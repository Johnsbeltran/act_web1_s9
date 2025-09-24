const form = document.getElementById('validationForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Ocultar mensajes previos
    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');

    // GET
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    // Valida
    if (nameValue === '' || emailValue === '') {
        errorMessage.textContent = 'Por favor, completa todos los campos.';
        errorMessage.classList.remove('hidden');
    } else {
        successMessage.textContent = `¡Formulario enviado con éxito! Nombre: ${nameValue}, Email: ${emailValue}`;
        successMessage.classList.remove('hidden');
    }
    form.reset();
});
