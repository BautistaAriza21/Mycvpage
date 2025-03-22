// Show modal function
function showModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Initialize all forms when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Configurar botón de cerrar
    const closeButton = document.querySelector('#successModal button');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Configuración de formularios existente
    const forms = ['form-diseño', 'form-sitioweb', 'form-ambos'];
    
    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                showModal();
                this.reset();
            });
        }
    });
});