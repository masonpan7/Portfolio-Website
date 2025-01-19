function toggleMenu() {
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    // Function to check if section is visible in the viewport
    function checkVisibility() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the section's top position is within the viewport
            if (sectionTop < windowHeight - 200) {
                section.classList.add('fade-in');
            }
        });
    }

    // Trigger the visibility check on scroll and initial load
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "0UaQWLeStlhIzBfc4";
const serviceID = "service_mgps5ab";
const templateID = "template_rgzk0gu";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
    e.preventDefault;
    submitBtn.innerText = "Just A Moment...";

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }
    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        submitBtn.innerText = "Message Sent Successfully";

        nameInput.value="";
        emailInput.value="";
        messageInput.value="";
    }, (error) => {
        console.log(error)
        submitBtn.innerText = "Something went wrong";
    });
});




