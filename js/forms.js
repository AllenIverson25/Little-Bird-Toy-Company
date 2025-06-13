/**
 * Forms JavaScript for Little Bird Toy Company
 */

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
        showAlert('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(formData.email)) {
        showAlert('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showAlert('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
    
    // Reset form
    document.getElementById('contact-form').reset();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlert(message, type) {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type === 'error' ? 'danger' : 'success'} alert-dismissible fade show`;
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert at top of form
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(alert, form);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}
