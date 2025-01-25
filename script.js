// JavaScript for Horizontal Scroll on Vertical Scroll
const container = document.querySelector('.horizontal-scroll-container');

// Add event listener for vertical scroll
window.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent default vertical scroll
    if (e.deltaY > 0) {
        // Scroll down (move right)
        container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    } else {
        // Scroll up (move left)
        container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
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

// Debugging: Log scroll events
container.addEventListener('scroll', () => {
    console.log('Scroll position:', container.scrollLeft);
});
