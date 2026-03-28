// Dynamic Cursor Glow
const cursor = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Interactive elements hover logic (enlarge cursor glow)
const interactiveElements = document.querySelectorAll('a, button, input, textarea');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '600px';
        cursor.style.height = '600px';
        cursor.style.background = 'radial-gradient(circle, rgba(255, 0, 85, 0.1) 0%, rgba(0, 0, 0, 0) 70%)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '400px';
        cursor.style.height = '400px';
        cursor.style.background = 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, rgba(0, 0, 0, 0) 70%)';
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: unobserve after reveal to only trigger once
            // observer.unobserve(entry.target); 
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.03)';
        navbar.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)';
    }
});
