// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Scroll functionality for the down arrow button
    const scrollBtn = document.querySelector('.scroll-btn');
    const aboutSection = document.getElementById('about');
    
    if (scrollBtn && aboutSection) {
        scrollBtn.addEventListener('click', (e: Event) => {
            e.preventDefault();
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

});
