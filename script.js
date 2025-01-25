// JavaScript for Parallax Effect
document.addEventListener('scroll', function() {
    requestAnimationFrame(applyParallax);
});

function applyParallax() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        const background = section.querySelector('.parallax-background');
        if (background) {
            const scrollPosition = window.pageYOffset;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPercent = (scrollPosition - sectionTop) / sectionHeight;
            const parallaxOffset = scrollPercent * 50; // Adjust the multiplier for speed
            background.style.transform = `translateY(${parallaxOffset}px)`;
        }
    });
}
