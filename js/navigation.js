/**
 * Simple Navigation JavaScript for Little Bird Toy Company
 * Full-screen navigation menu system - Uses modern let declarations
 */

// Global variables to track menu state
let menuToggle = null;        // The hamburger menu button
let fullscreenNav = null;     // The full-screen navigation overlay
let isMenuOpen = false;       // Track if menu is currently open

/**
 * Initialize the navigation system when page loads
 * This function sets up all the event listeners
 */
function initNavigation() {
    // Find the menu button and navigation overlay in the HTML
    menuToggle = document.getElementById('menuToggle');
    fullscreenNav = document.getElementById('fullscreenNav');

    // Make sure both elements exist before continuing
    if (!menuToggle || !fullscreenNav) {
        console.warn('Navigation elements not found');
        return;
    }

    // When user clicks the hamburger button, toggle the menu
    menuToggle.addEventListener('click', function() {
        toggleMenu();
    });

    // When user clicks any navigation link, close the menu
    let navLinks = fullscreenNav.querySelectorAll('.nav-links a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            closeMenu();
        });
    }

    // When user presses Escape key, close the menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });

    // Prevent page scrolling when menu is open
    fullscreenNav.addEventListener('wheel', function(e) {
        if (isMenuOpen) {
            e.preventDefault(); // Stop the scroll
        }
    }, { passive: false });
}

/**
 * Toggle the menu open or closed
 * This function decides whether to open or close the menu
 */
function toggleMenu() {
    if (isMenuOpen) {
        closeMenu();  // If menu is open, close it
    } else {
        openMenu();   // If menu is closed, open it
    }
}

/**
 * Open the full-screen navigation menu
 * This function shows the menu and prevents page scrolling
 */
function openMenu() {
    // Update our tracking variable
    isMenuOpen = true;

    // Add CSS classes to show the menu and animate the hamburger
    menuToggle.classList.add('active');
    fullscreenNav.classList.add('active');

    // Prevent the page from scrolling behind the menu
    document.body.style.overflow = 'hidden';

    // Set accessibility attributes for screen readers
    menuToggle.setAttribute('aria-expanded', 'true');
    fullscreenNav.setAttribute('aria-hidden', 'false');

    // After animation completes, focus on first menu link
    setTimeout(function() {
        var firstLink = fullscreenNav.querySelector('.nav-links a');
        if (firstLink) {
            firstLink.focus(); // Help keyboard users navigate
        }
    }, 300); // Wait 300ms for animation to finish
}

/**
 * Close the full-screen navigation menu
 * This function hides the menu and restores page scrolling
 */
function closeMenu() {
    // Update our tracking variable
    isMenuOpen = false;

    // Remove CSS classes to hide the menu and reset hamburger
    menuToggle.classList.remove('active');
    fullscreenNav.classList.remove('active');

    // Allow the page to scroll again
    document.body.style.overflow = '';

    // Set accessibility attributes for screen readers
    menuToggle.setAttribute('aria-expanded', 'false');
    fullscreenNav.setAttribute('aria-hidden', 'true');

    // Return focus to the menu button
    menuToggle.focus();
}

/**
 * Add smooth scrolling to anchor links
 * This makes clicking on links that go to sections on the same page scroll smoothly
 */
function initSmoothScrolling() {
    // Find all links that start with # (anchor links)
    let anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Add smooth scrolling to each anchor link
    for (let i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function(e) {
            e.preventDefault(); // Stop the normal jump behavior

            // Find the target section
            let targetId = this.getAttribute('href');
            let target = document.querySelector(targetId);

            // If target exists, scroll to it smoothly
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',  // Smooth animation
                    block: 'start'       // Align to top
                });
            }
        });
    }
}

/**
 * Initialize everything when the page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSmoothScrolling();
});
