// 1. Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        console.log("Menu clicked");
    });
}

// 2. Book Now
const bookBtn = document.getElementById('bookBtn');
if(bookBtn){
    bookBtn.addEventListener('click', () => {
        alert("Thanks for choosing FlyGo! Booking feature coming soon.");
    });
}

// 3. Plan Your Trip - scroll
const planBtn = document.querySelector('.hero-content button');
const placeSection = document.querySelector('.place');

if(planBtn && placeSection){
    planBtn.addEventListener('click', () => {
        placeSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// 4. Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50){
        navbar.style.background = "rgba(255,255,255,0.98)";
    } else {
        navbar.style.background = "rgba(255,255,255,0.9)";
    }
});