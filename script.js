// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Remove active class from all links
        document.querySelectorAll('header ul li a').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to the clicked link
        this.classList.add('active');
    });
});

// Toggle Mobile Menu
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('active');
});

// Close Sidebar on Link Click or Tap Outside
document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// Back-to-Top Button and Order Button
const backToTopButton = document.getElementById('top');
const orderButton = document.querySelector('.order-btn');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    const footerRect = footer.getBoundingClientRect();
    const bottomOffset = 30;
    
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        backToTopButton.classList.add('show');
        if (footerRect.top <= window.innerHeight) {
            const newPosition = window.innerHeight - footerRect.top + bottomOffset;
            backToTopButton.style.bottom = `${newPosition}px`;
            orderButton.style.bottom = `${newPosition + 50}px`;
        }
    } else {
        backToTopButton.classList.remove('show');
        backToTopButton.style.bottom = `${bottomOffset}px`;
        orderButton.style.bottom = '80px';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// First, let's get all our floating characters
const floatingCharacters = document.querySelectorAll('.floating-character');

// This function calculates how far the mouse is from the character
function getDistance(mouseX, mouseY, characterX, characterY) {
    const dx = mouseX - characterX;
    const dy = mouseY - characterY;
    return Math.sqrt(dx * dx + dy * dy);
}

// This function moves the character away from the mouse
function moveAway(character, mouseX, mouseY, strength = 100) {
    // Get the character's position
    const rect = character.getBoundingClientRect();
    const characterX = rect.left + rect.width / 2;
    const characterY = rect.top + rect.height / 2;

    // Calculate the distance
    const distance = getDistance(mouseX, characterY, characterX, characterY);
    
    // Only move if the mouse is close (within 200 pixels)
    if (distance < 200) {
        // Calculate how much to move (closer = move more)
        const moveScale = (200 - distance) / 200;
        
        // Calculate the direction to move
        const moveX = (characterX - mouseX) * moveScale * strength;
        const moveY = (characterY - mouseY) * moveScale * strength;
        
        // Apply the movement with a smooth transition
        character.style.transition = 'transform 0.3s ease-out';
        character.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
        // If mouse is far away, return to original position
        character.style.transform = 'translate(0, 0)';
    }
}

// Add mouse move listener to the document
document.addEventListener('mousemove', (e) => {
    // For each character, calculate and apply the movement
    floatingCharacters.forEach(character => {
        moveAway(character, e.clientX, e.clientY);
    });
});

// When mouse leaves, return characters to original positions
document.addEventListener('mouseleave', () => {
    floatingCharacters.forEach(character => {
        character.style.transform = 'translate(0, 0)';
    });
});
