// DOM Elements
const header = document.querySelector('header');
const text = document.querySelector('#text');
const sun = document.querySelector('#sun');
const clouds = document.querySelector('#clouds');
const birds = document.querySelector('#birds');
const mountains = document.querySelector('#mountains');
const buildings = document.querySelector('#buildings');
const storefront = document.querySelector('#storefront');
const morningsteam = document.querySelector('#morning-steam');
const ground = document.querySelector('#ground');
const explore = document.querySelector('#explore');

// Character Elements
const characters = document.querySelectorAll('.floating');
const storyPanels = document.querySelectorAll('.story-panel');

// Animation Variables
let lastScrollY = 0;
let ticking = false;
const characterStartPositions = new Map();

// Store initial character positions
characters.forEach(char => {
    characterStartPositions.set(char.id, {
        left: parseFloat(getComputedStyle(char).left),
        top: parseFloat(getComputedStyle(char).top)
    });
});

// Parallax Scroll Effect
function updateParallax() {
    const scrolled = window.scrollY;

    // Update parallax elements
    text.style.transform = `translateY(${scrolled * -0.2}px)`;
    sun.style.transform = `translateY(${scrolled * 0.5}px)`;
    clouds.style.transform = `translateX(${scrolled * 0.3}px)`;
    birds.style.transform = `translate(${scrolled * 0.4}px, ${scrolled * -0.1}px)`;
    mountains.style.transform = `translateY(${scrolled * 0.15}px)`;
    buildings.style.transform = `translateY(${scrolled * 0.1}px)`;
    morningsteam.style.transform = `translateY(${scrolled * -0.2}px)`;

    // Update character positions
    characters.forEach(char => {
        const startPos = characterStartPositions.get(char.id);
        if (startPos) {
            const offsetX = (scrolled - char.offsetTop) * 0.1;
            char.style.transform = `translate(${offsetX}px, ${Math.sin(scrolled * 0.002) * 20}px)`;
        }
    });

    // Reveal story panels on scroll
    storyPanels.forEach(panel => {
        const panelTop = panel.getBoundingClientRect().top;
        if (panelTop < window.innerHeight * 0.75) {
            panel.classList.add('active');
        }
    });

    ticking = false;
}

// Optimized scroll handler
function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Social Media Links
const socialLinks = {
    instagram: 'https://www.instagram.com/tegusbagelco',
    facebook: 'https://www.facebook.com/tegusbagelco',
    whatsapp: 'https://wa.me/yournumber',
    store: 'https://tegusbagelco.zobaze.shop/catalog'
