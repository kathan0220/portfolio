document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const messageDiv = document.getElementById('form-message');
    
    // Clear any previous messages
    messageDiv.textContent = '';

    // Simple validation
    if (!email || !phone) {
        messageDiv.textContent = 'Please fill out all fields.';
        return;
    }
    
    // Check if phone number is valid (10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        messageDiv.textContent = 'Please enter a valid 10-digit phone number.';
        return;
    }

    // If validation passes
    alert('Form submitted successfully!');

    // Optionally, you could handle form submission here (e.g., send data to a server)
});
