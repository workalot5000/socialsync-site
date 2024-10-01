// Script for handling login and signup form validation

// Login form validation
document.querySelector('.btn-login').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting automatically
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // If validation passes, pretend to log in (just a demo)
    alert('Login successful!');
});

// Sign-up form validation
document.querySelector('.btn-signup').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting automatically
    
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (fullName.trim() === '') {
        alert('Please enter your full name.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // If validation passes, pretend to create an account (just a demo)
    alert('Account created successfully!');
});

// Email validation function
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Placeholder functionality for the "Fund Now" button
document.querySelector('.funding .cta-btn').addEventListener('click', function() {
    alert('Redirecting to account funding page (this is a demo).');
});
