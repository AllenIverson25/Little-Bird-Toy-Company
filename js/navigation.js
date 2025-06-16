/**
 * Full-Screen Navigation for Little Bird Toy Company
 * Inspired by dacoit.design navigation overlay
 */

class FullScreenNavigation {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.fullscreenNav = document.getElementById('fullscreenNav');
        this.isOpen = false;
        this.init();
    }

    init() {
        if (!this.menuToggle || !this.fullscreenNav) {
            console.warn('Navigation elements not found');
            return;
        }

        // Bind events
        this.menuToggle.addEventListener('click', () => this.toggleMenu());
        
        // Close menu when clicking on navigation links
        const navLinks = this.fullscreenNav.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });

        // Prevent body scroll when menu is open
        this.fullscreenNav.addEventListener('wheel', (e) => {
            if (this.isOpen) {
                e.preventDefault();
            }
        }, { passive: false });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (this.isOpen && window.innerWidth > 768) {
                // Optionally close menu on desktop resize
                // this.closeMenu();
            }
        });
    }

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.isOpen = true;
        this.menuToggle.classList.add('active');
        this.fullscreenNav.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add accessibility attributes
        this.menuToggle.setAttribute('aria-expanded', 'true');
        this.fullscreenNav.setAttribute('aria-hidden', 'false');
        
        // Focus management
        setTimeout(() => {
            const firstLink = this.fullscreenNav.querySelector('.nav-links a');
            if (firstLink) {
                firstLink.focus();
            }
        }, 300);
    }

    closeMenu() {
        this.isOpen = false;
        this.menuToggle.classList.remove('active');
        this.fullscreenNav.classList.remove('active');
        document.body.style.overflow = '';
        
        // Add accessibility attributes
        this.menuToggle.setAttribute('aria-expanded', 'false');
        this.fullscreenNav.setAttribute('aria-hidden', 'true');
        
        // Return focus to menu button
        this.menuToggle.focus();
    }

    // Public method to check if menu is open
    isMenuOpen() {
        return this.isOpen;
    }
}

// Enhanced scroll behavior for navbar
class NavbarScrollEffect {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        if (!this.navbar) return;

        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when scrolling down
        if (scrollTop > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        this.lastScrollTop = scrollTop;
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize full-screen navigation
    window.fullScreenNav = new FullScreenNavigation();

    // Disabled navbar scroll effects
    // window.navbarScroll = new NavbarScrollEffect();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FullScreenNavigation, NavbarScrollEffect };
}
