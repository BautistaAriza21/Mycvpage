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
    // Get all form elements
    const designForm = document.getElementById('form-design');
    const websiteForm = document.getElementById('form-website');
    const bothForm = document.getElementById('form-both');
    
    // Add event listeners to each form
    if (designForm) {
        designForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showModal();
        });
    }
    
    if (websiteForm) {
        websiteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showModal();
        });
    }
    
    if (bothForm) {
        bothForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showModal();
        });
    }
});