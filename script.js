// JavaScript for Horizontal Scroll on Vertical Scroll
const container = document.querySelector('.horizontal-scroll-container');
let isScrolling;

container.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        // Snap to the nearest section
        const sections = document.querySelectorAll('.horizontal-section');
        let closestSection = null;
        let closestDistance = Infinity;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.left);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = section;
            }
        });

        if (closestSection) {
            closestSection.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    }, 100); // Adjust the timeout for smoother snapping
});

// Optional: Add touch swipe support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

container.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50) {
        // Swipe right (go to previous section)
        container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    } else if (swipeDistance < -50) {
        // Swipe left (go to next section)
        container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
}
