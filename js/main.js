/**
 * Main JavaScript for Little Bird Toy Company
 */

// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Little Bird Toy Company - Main JS Loaded');
    
    // Initialize any main functionality here
    initializeAnimations();
    initializeScrollEffects();
});

// Initialize animations - DISABLED
function initializeAnimations() {
    // Disabled floating animations to prevent bugs
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(element => {
        element.style.animation = 'none';
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements that should fade in
    const fadeElements = document.querySelectorAll('.hero-section, .py-5');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}
