// Select the hamburger button and navigation links
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// Add click event listener to the hamburger button
menuToggle.addEventListener('click', () => {
    // Toggle the "active" class on the navigation links container
    navLinks.classList.toggle('active');

    // Stagger animations for each link
    links.forEach((link, index) => {
        if (navLinks.classList.contains('active')) {
            link.style.animation = `slideIn 0.3s ease-in-out forwards ${index * 0.1}s`;
        } else {
            link.style.animation = ''; // Reset animation when menu closes
        }
    });
});

// Add submit event listener for the contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
    this.reset();
});
