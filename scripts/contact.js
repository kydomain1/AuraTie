// Contact page functionality

document.addEventListener('DOMContentLoaded', function() {
    setupContactForm();
    setupFAQs();
});

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
}

function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonContent = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        showFormMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitButton.innerHTML = originalButtonContent;
        submitButton.disabled = false;
        
        // Subscribe to newsletter if checkbox is checked
        if (formData.get('newsletter')) {
            subscribeToNewsletter(formData.get('email'));
        }
        
    }, 2000);
}

function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        ${message}
    `;
    
    // Insert message at the top of the form
    const form = document.getElementById('contactForm');
    form.insertBefore(messageElement, form.firstChild);
    
    // Add styles for form message
    if (!document.getElementById('form-message-styles')) {
        const style = document.createElement('style');
        style.id = 'form-message-styles';
        style.textContent = `
            .form-message {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem;
                border-radius: 6px;
                margin-bottom: 1.5rem;
                font-weight: 500;
            }
            
            .form-message.success {
                background-color: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }
            
            .form-message.error {
                background-color: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

function subscribeToNewsletter(email) {
    // Simulate newsletter subscription
    console.log(`Subscribing ${email} to newsletter...`);
    
    // You would typically make an API call here
    // fetch('/api/newsletter/subscribe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email })
    // });
}

function setupFAQs() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => toggleFAQ(question));
    });
}

function toggleFAQ(questionElement) {
    const faqItem = questionElement.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else {
            clearFieldError(field);
        }
    });
    
    // Validate email format
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            showFieldError(emailField, 'Please enter a valid email address');
            isValid = false;
        }
    }
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    
    field.style.borderColor = '#dc3545';
    field.parentNode.appendChild(errorElement);
    
    // Add error styles if not already present
    if (!document.getElementById('field-error-styles')) {
        const style = document.createElement('style');
        style.id = 'field-error-styles';
        style.textContent = `
            .field-error {
                color: #dc3545;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                display: block;
            }
        `;
        document.head.appendChild(style);
    }
}

function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '';
}

// Character counter for textarea
function setupCharacterCounter() {
    const textarea = document.getElementById('message');
    if (textarea) {
        const maxLength = 1000;
        
        // Create counter element
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.textContent = `0 / ${maxLength}`;
        
        textarea.parentNode.appendChild(counter);
        
        // Update counter on input
        textarea.addEventListener('input', function() {
            const currentLength = this.value.length;
            counter.textContent = `${currentLength} / ${maxLength}`;
            
            if (currentLength > maxLength * 0.9) {
                counter.style.color = '#dc3545';
            } else {
                counter.style.color = '#6c757d';
            }
        });
        
        // Add counter styles
        const style = document.createElement('style');
        style.textContent = `
            .character-counter {
                font-size: 0.875rem;
                color: #6c757d;
                text-align: right;
                margin-top: 0.25rem;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize character counter
document.addEventListener('DOMContentLoaded', function() {
    setupCharacterCounter();
});

// Auto-resize textarea
function setupAutoResize() {
    const textarea = document.getElementById('message');
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    }
}

// Initialize auto-resize
document.addEventListener('DOMContentLoaded', function() {
    setupAutoResize();
});

// Form field focus effects
document.addEventListener('DOMContentLoaded', function() {
    const formFields = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            this.parentNode.classList.remove('focused');
            if (this.value.trim()) {
                this.parentNode.classList.add('filled');
            } else {
                this.parentNode.classList.remove('filled');
            }
        });
        
        // Check if field is pre-filled
        if (field.value.trim()) {
            field.parentNode.classList.add('filled');
        }
    });
    
    // Add focus styles
    const style = document.createElement('style');
    style.textContent = `
        .form-group.focused label {
            color: var(--secondary-color);
        }
        
        .form-group.focused input,
        .form-group.focused select,
        .form-group.focused textarea {
            border-color: var(--secondary-color);
            box-shadow: 0 0 0 3px rgba(139, 69, 19, 0.1);
        }
    `;
    document.head.appendChild(style);
});

// Add to global scope for onclick handlers
window.toggleFAQ = toggleFAQ;
