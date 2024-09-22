var typed = new Typed('.typing', {
    strings: ["Front end Development" ],
    typeSpeed: 110,
    BackSpeed: 60,
    loop: true
})

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                    if (navItem.getAttribute('href').substring(1) === entry.target.id) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


(function() {
    emailjs.init('o1yezWjeVjVYr3-Xu'); // Replace 'GWbNmnXzdkXtyMcIM' with your EmailJS user ID
})();

// Function to send email
function sendEmail(event) {
    event.preventDefault();  // Prevent form from submitting the default way
    
    // Collect form data
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Send email using EmailJS
    emailjs.send('service_e3jesyq', 'template_f0cluk8', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send email.');
        });
}

