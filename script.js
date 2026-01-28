// 1. INTRO TRANSITION
window.addEventListener('load', () => {
    // Get duration from CSS variable (converted to milliseconds)
    const introDuration = 3000; 

    setTimeout(() => {
        const intro = document.getElementById('intro-overlay');
        intro.style.opacity = '0';
        
        // Remove from DOM after fade out to save resources
        setTimeout(() => {
            intro.style.display = 'none';
        }, 800);
    }, introDuration);
});

// 2. SCROLL REVEAL ANIMATION
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
