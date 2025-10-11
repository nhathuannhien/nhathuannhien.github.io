// Mobile Menu Toggle
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

// Language Switcher
function switchLanguage(lang) {
    // Placeholder for language switching functionality
    console.log('Switching to language:', lang);
    alert('Chức năng đa ngôn ngữ sẽ được cập nhật sớm!');
}

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function () {
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleFormSubmit(this, 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        });
    }

    // Admission Form
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleFormSubmit(this, 'Đăng ký của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.');
        });
    }

    // Career Form
    const careerForm = document.getElementById('careerForm');
    if (careerForm) {
        careerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleFormSubmit(this, 'Hồ sơ của bạn đã được gửi thành công! Chúng tôi sẽ xem xét và liên hệ sớm.');
        });
    }

    // Feedback Form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleFormSubmit(this, 'Cảm ơn bạn đã gửi đánh giá! Ý kiến của bạn rất quan trọng với chúng tôi.');
        });
    }
});

// Generic Form Submit Handler
function handleFormSubmit(form, successMessage) {
    // Get form data
    const formData = new FormData(form);
    const data = {};

    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    console.log('Form submitted:', data);

    // Show success message
    showNotification(successMessage, 'success');

    // Reset form
    form.reset();

    // In production, you would send this data to your server
    // Example:
    // fetch('/api/submit-form', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#2196f3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification && notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        font-size: 1.2rem;
        opacity: 0.8;
        transition: opacity 0.3s;
    }

    .notification-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
    const nav = document.getElementById('mainNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (nav && nav.classList.contains('active')) {
        if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
            nav.classList.remove('active');
        }
    }
});

// Scroll to Top Button
window.addEventListener('scroll', function () {
    // You can add a scroll to top button here if needed
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 300) {
        // Show scroll to top button
        const scrollBtn = document.getElementById('scrollTopBtn');
        if (scrollBtn) {
            scrollBtn.style.display = 'block';
        }
    } else {
        const scrollBtn = document.getElementById('scrollTopBtn');
        if (scrollBtn) {
            scrollBtn.style.display = 'none';
        }
    }
});

// Image Lazy Loading Fallback
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// FAQ Accordion (if needed)
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Close other FAQs
        document.querySelectorAll('.faq-answer').forEach(item => {
            item.style.maxHeight = null;
        });
        document.querySelectorAll('.faq-icon').forEach(item => {
            item.style.transform = 'rotate(0deg)';
        });

        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    }
}

// Form Validation Enhancement
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10,11}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Add real-time validation to forms
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function () {
        if (this.value && !validateEmail(this.value)) {
            this.setCustomValidity('Vui lòng nhập địa chỉ email hợp lệ');
            this.reportValidity();
        } else {
            this.setCustomValidity('');
        }
    });
});

document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('blur', function () {
        if (this.value && !validatePhone(this.value)) {
            this.setCustomValidity('Vui lòng nhập số điện thoại hợp lệ (10-11 số)');
            this.reportValidity();
        } else {
            this.setCustomValidity('');
        }
    });
});

console.log('Nhà Thuận Nhiên - Waldorf School website loaded successfully!');
