// JavaScript for Parallax Effect
window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        const background = section.querySelector('::before');
        if (background) {
            background.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Adjust the multiplier for speed
        }
    });
});
