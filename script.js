/* ================================ */
/* CONFIGURATION SETTINGS */
/* ================================ */

// Logo Intro Settings - EASY TO EDIT
const SHOW_INTRO = true;           // Set to false to disable intro
const INTRO_DURATION = 3500;       // Duration in milliseconds (3500 = 3.5 seconds)

/* ================================ */
/* LOGO INTRO ANIMATION */
/* ================================ */
document.addEventListener('DOMContentLoaded', () => {
    const logoIntro = document.getElementById('logoIntro');
    
    if (SHOW_INTRO && logoIntro) {
        // Show intro
        logoIntro.classList.add('active');
        
        // Hide intro after duration
        setTimeout(() => {
            logoIntro.classList.remove('active');
            
            // Remove from DOM after fade out
            setTimeout(() => {
                logoIntro.style.display = 'none';
            }, 500);
        }, INTRO_DURATION);
    } else if (logoIntro) {
        // If intro is disabled, hide immediately
        logoIntro.style.display = 'none';
    }
});

/* ================================ */
/* NAVIGATION FUNCTIONALITY */
/* ================================ */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Active link highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

/* ================================ */
/* SMOOTH SCROLL FOR ANCHOR LINKS */
/* ================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ================================ */
/* SCROLL ANIMATIONS */
/* ================================ */
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in-scroll class
document.querySelectorAll('.fade-in-scroll').forEach(element => {
    fadeObserver.observe(element);
});

/* ================================ */
/* GALLERY TABS FUNCTIONALITY */
/* ================================ */
const galleryTabs = document.querySelectorAll('.gallery-tab');
const galleryContents = document.querySelectorAll('.gallery-content');

galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        galleryTabs.forEach(t => t.classList.remove('active'));
        galleryContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const targetContent = document.getElementById(`${targetTab}-content`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

/* ================================ */
/* PERFORMANCE OPTIMIZATIONS */
/* ================================ */

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(highlightNavLink, 50));

/* ================================ */
/* ACCESSIBILITY ENHANCEMENTS */
/* ================================ */

// Add keyboard navigation for gallery tabs
galleryTabs.forEach((tab, index) => {
    tab.addEventListener('keydown', (e) => {
        let targetTab;
        
        if (e.key === 'ArrowRight') {
            targetTab = galleryTabs[index + 1] || galleryTabs[0];
        } else if (e.key === 'ArrowLeft') {
            targetTab = galleryTabs[index - 1] || galleryTabs[galleryTabs.length - 1];
        }
        
        if (targetTab) {
            targetTab.click();
            targetTab.focus();
        }
    });
});

// Skip to main content functionality
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
        const mainContent = document.querySelector('main') || document.querySelector('#home');
        if (mainContent) {
            mainContent.focus();
        }
    }
});

/* ================================ */
/* CONSOLE MESSAGE */
/* ================================ */
console.log('%c🎓 Rahmaniya Group of Institutions', 'color: #2d6a4f; font-size: 20px; font-weight: bold;');
console.log('%cWebsite built with care for the Rahmaniya community', 'color: #0a2463; font-size: 14px;');
console.log('%cTo edit the logo intro duration, change INTRO_DURATION in script.js', 'color: #666; font-size: 12px;');
console.log('%cTo disable the logo intro, set SHOW_INTRO = false in script.js', 'color: #666; font-size: 12px;');
