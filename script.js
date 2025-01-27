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

// Smooth scrolling for sidebar links
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        // Hide sidebar after clicking a link
        sidebar.classList.remove('active');
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

// Toggle Sidebar Menu
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});
