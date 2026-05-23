// Gallery Section Navigation
document.querySelectorAll('.gallery-section button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.textContent} page loading...`);
        // The button already links to the specified page in HTML, so this is an additional notification.
    });
});

// Contact Form Validation in Footer
const contactForm = document.querySelector('footer .contact-form form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm.elements['name'].value.trim();
    const email = contactForm.elements['email'].value.trim();
    const number = contactForm.elements['number'].value.trim();
    const message = contactForm.elements['message'].value.trim();

    if (!name || !email || !number || !message) {
        alert("Please fill out all fields.");
        return;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert("Please enter a valid name.");
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!/^\d{10}$/.test(number)) {
        alert("Please enter a 10-digit phone number.");
        return;
    }

    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();  // Clear form after submission
});

// Dynamic Gallery Image Loading Notification
document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.addEventListener('click', () => {
        alert("Viewing larger version coming soon!");
        // Add future functionality here to view larger versions of images if needed.
    });
});
