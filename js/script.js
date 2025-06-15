// Mobile Menu Toggle Functionality
document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
    
    // Toggle aria-expanded for accessibility
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('main-nav').classList.remove('active');
        }
    });
});

// Form Submission Handling
document.getElementById('tuition-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic validation
    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    
    if (!nameInput.value.trim()) {
        alert('Please enter your name');
        return;
    }
    
    if (!emailInput.value.includes('@')) {
        alert('Please enter a valid email');
        return;
    }
    
    // Success message
    alert('Thank you for your enquiry! We will contact you within 24 hours.');
    this.reset();
});

// PDF Download Placeholders
function downloadPaper(paperId) {
    alert(`[Demo] Would download: ${paperId}.pdf\n\nIn a full implementation, this would fetch from /resources/past-papers/${paperId}.pdf`);
}

function downloadResource(resourceId) {
    alert(`[Demo] Would download: ${resourceId}.pdf\n\nIn a full implementation, this would fetch from /resources/notes/${resourceId}.pdf`);
}

// YouTube Channel Notification
document.getElementById('yt-link').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Our YouTube channel will launch soon! Subscribe to get notified.');
});

// Social Media Link Handlers
document.getElementById('youtube-social').addEventListener('click', function(e) {
    e.preventDefault();
    alert('YouTube channel coming soon!');
});