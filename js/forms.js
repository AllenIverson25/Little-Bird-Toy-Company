/**
 * Forms JavaScript for Little Bird Toy Company
 * This file handles contact form validation and submission
 * High School Level JavaScript - Uses simple let declarations and basic functions
 */

/**
 * Set up contact form handling when page loads
 * This function runs when the page is ready and adds form submission handling
 */
document.addEventListener('DOMContentLoaded', function() {
    // Find the contact form on the page
    let contactForm = document.getElementById('contact-form');

    // If contact form exists, add submit handling
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});

/**
 * Handle contact form submission
 * This function runs when someone submits the contact form
 * @param {Event} e - The form submission event
 */
function handleContactFormSubmit(e) {
    // Prevent the form from submitting normally (which would reload the page)
    e.preventDefault();

    // Get all the form data from the input fields
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Check if required fields are filled in (name, email, and message are required)
    if (!formData.name || !formData.email || !formData.message) {
        showAlert('Please fill in all required fields.', 'error');
        return; // Stop here, don't submit the form
    }

    // Check if email address is valid using our validation function
    if (!isValidEmail(formData.email)) {
        showAlert('Please enter a valid email address.', 'error');
        return; // Stop here, don't submit the form
    }

    // If we get here, the form is valid - simulate sending the message
    showAlert('Thank you for your message! We will get back to you within 24 hours.', 'success');

    // Clear the form so user can send another message
    document.getElementById('contact-form').reset();
}

/**
 * Check if an email address is valid
 * This function uses a regular expression to validate email format
 * @param {string} email - The email address to check
 * @returns {boolean} - True if email is valid, false if not
 */
function isValidEmail(email) {
    // Regular expression pattern for valid email addresses
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern and return true/false
    return emailRegex.test(email);
}

/**
 * Show an alert message to the user
 * This function creates a Bootstrap alert and displays it above the form
 * @param {string} message - The message to show
 * @param {string} type - The type of alert ('error' or 'success')
 */
function showAlert(message, type) {
    // Create a new div element for the alert
    let alert = document.createElement('div');

    // Set the CSS classes for Bootstrap styling
    let alertClass = 'alert alert-dismissible fade show';
    if (type === 'error') {
        alertClass += ' alert-danger';  // Red for errors
    } else {
        alertClass += ' alert-success'; // Green for success
    }
    alert.className = alertClass;

    // Set the content of the alert with message and close button
    alert.innerHTML = message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';

    // Find the form and insert the alert above it
    let form = document.getElementById('contact-form');
    form.parentNode.insertBefore(alert, form);

    // Automatically remove the alert after 5 seconds
    setTimeout(function() {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000); // 5000 milliseconds = 5 seconds
}
