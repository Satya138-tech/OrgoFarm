document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.classList.remove('hidden');
            return;
        }

        // Simple email validation (for demonstration purposes)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.remove('hidden');
            return;
        }

        formMessage.textContent = 'Thank you for your message!';
        formMessage.classList.remove('hidden');

        // Clear the form fields
        form.reset();
    });
});
