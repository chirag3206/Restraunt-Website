/*// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Book Now and Order Now Button Alerts
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function (e) {
        const buttonText = e.target.textContent.trim();
        if (buttonText === 'Book Now' || buttonText === 'Order Now' || buttonText === 'Book') {
            alert(`${buttonText} functionality will be added soon!`);
        }
    });
});

// Contact Form Validation
const form = document.querySelector('footer .contact-form form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const number = form.elements['number'].value.trim();
    const message = form.elements['message'].value.trim();

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
    form.reset();  // Clear form after submission
});

// Dynamic Year in Footer (if desired)
const yearElement = document.createElement("p");
yearElement.textContent = `© ${new Date().getFullYear()} A-One Restaurant. All rights reserved.`;
document.querySelector('footer').appendChild(yearElement);
*/
// Fetch data from JSON and update the homepage
async function loadHomepageData() {
    try {
        // Fetching JSON data
        const response = await fetch('Homepage.json');
        if (!response.ok) {
            throw new Error("Could not fetch JSON data");
        }
        const data = await response.json();
        
        // Populate Hero Section
        const heroSection = document.getElementById('hero-section');
        heroSection.querySelector('img').src = data.hero.image;
        heroSection.querySelector('h1').innerText = data.hero.title;
        
        // Populate Sections
        data.sections.forEach(section => {
            const sectionElement = document.getElementById(section.id);
            if (sectionElement) {
                sectionElement.innerHTML = `
                    <h2>${section.title}</h2>
                    ${section.image ? `<img src="${section.image}" alt="${section.title}">` : ''}
                    <p>${section.content}</p>
                    <a href="${section.link}" class="button">${section.linkText}</a>
                `;
            }
        });

        // Populate Contact Info and Hours
        document.getElementById('contact-info').innerHTML = `
            <h3>Contact Us</h3>
            <p>${data.contactInfo.address}</p>
            <p>Phone: ${data.contactInfo.phone}</p>
            <p>Email: ${data.contactInfo.email}</p>
        `;
        
        document.getElementById('hours').innerHTML = `
            <h3>Hours of Operation</h3>
            <p>Monday, Wednesday-Friday: ${data.hours.monday}</p>
            <p>Saturday-Sunday: ${data.hours.saturdaySunday}</p>
            <p>Tuesday: ${data.hours.tuesday}</p>
        `;
    } catch (error) {
        console.error("Error loading homepage data:", error);
    }
}

// Simple form validation
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !number || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});

// Load homepage data on page load
document.addEventListener('DOMContentLoaded', loadHomepageData);
