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

// Initialize animations
function initializeAnimations() {
    // Add floating animation to elements with floating class
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(element => {
        element.style.animation = 'float 3s ease-in-out infinite';
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
