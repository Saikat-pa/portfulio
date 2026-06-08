// Typed.js for dynamic text
const typed = new Typed('.text', {
    strings: ['Frontend Web Developer', 'Full-Stack WeB Developer', 'Web Designer', 'Cyber Security Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Smooth scrolling and active link highlighting
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact form submit feedback
const contactForm = document.getElementById('contact-form');
const submitFeedback = document.getElementById('submit-feedback');

if (contactForm && submitFeedback) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        submitFeedback.textContent = 'Submit successful. Thank you for your message!';
        submitFeedback.classList.add('success');

        contactForm.reset();

        setTimeout(() => {
            submitFeedback.textContent = '';
            submitFeedback.classList.remove('success');
        }, 5000);
    });
}
