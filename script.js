document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq h3');
    
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.nextElementSibling.classList.toggle('active');
        });
    });
});
