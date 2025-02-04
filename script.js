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

// Smooth scrolling for navigation links
document.querySelectorAll('.sticky-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top button
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add floating characters animation
document.addEventListener("mousemove", (event) => {
    let floatingCharacters = document.querySelectorAll(".floating-char");
    floatingCharacters.forEach((char) => {
        let x = (event.clientX / window.innerWidth) * 10;
        let y = (event.clientY / window.innerHeight) * 10;
        char.style.transform = `translate(${x}px, ${y}px)`;
    });
});
