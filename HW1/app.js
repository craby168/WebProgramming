/**
 * Homepage App - Dynamic Top Navigation & Mobile Menu
 * Simple JavaScript for mobile menu toggle and navigation
 */

class HomepageApp {
    constructor() {
        this.mobileToggle = document.getElementById('mobileToggle');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.navBrand = document.getElementById('navBrand');
        this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        this.init();
    }

    init() {
        this.attachEventListeners();
        this.setupScrollSpy();
        this.setupMediaQueryListener();
    }

    attachEventListeners() {
        // Mobile menu toggle
        this.mobileToggle?.addEventListener('click', () => this.toggleMobileMenu());

        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                // Only prevent default for anchor links
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    this.navigateTo(href);
                    this.closeMobileMenu();
                } else {
                    // For external page links, just close the menu
                    this.closeMobileMenu();
                }
            });
        });

        // Brand click to go home
        this.navBrand?.addEventListener('click', (e) => {
            e.preventDefault();
            // Navigate to home page
            window.location.href = 'index.html';
        });
    }

    toggleMobileMenu() {
        this.mobileMenu?.classList.toggle('active');
    }

    closeMobileMenu() {
        this.mobileMenu?.classList.remove('active');
    }

    navigateTo(href) {
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            this.updateActiveLink(href);
        }
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - 100) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    updateActiveLink(href) {
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === href) {
                link.classList.add('active');
            }
        });
    }

    setupMediaQueryListener() {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        
        mediaQuery.addEventListener('change', (e) => {
            if (!e.matches) {
                // Desktop - ensure mobile menu is closed
                this.closeMobileMenu();
            }
        });
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new HomepageApp();
});
