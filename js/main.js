/**
 * Main JavaScript for Little Bird Toy Company
 * This file handles scroll effects for the website
 */

/**
 * Initialize scroll effects when page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollEffects();
});

/**
 * Initialize scroll effects
 * This makes elements fade in when they come into view while scrolling
 */
function initializeScrollEffects() {
    // Settings for when to trigger the fade-in effect
    let observerOptions = {
        threshold: 0.1,                    // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px'    // Trigger 50px before element enters view
    };

    // Create an observer that watches for elements entering the viewport
    let observer = new IntersectionObserver(function(entries) {
        // Check each element that entered or left the viewport
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];

            // If element is now visible, add fade-in class
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        }
    }, observerOptions);

    // Find all sections that should fade in when scrolled to
    let fadeElements = document.querySelectorAll('.hero-section, .py-5');

    // Start watching each element
    for (let i = 0; i < fadeElements.length; i++) {
        observer.observe(fadeElements[i]);
    }
}
