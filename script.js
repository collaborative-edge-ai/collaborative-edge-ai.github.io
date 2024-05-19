document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq h3');
    
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const content = faq.nextElementSibling;
            const symbol = faq.querySelector('.toggle-symbol');
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
                symbol.textContent = '+';
            } else {
                content.style.display = 'block';
                symbol.textContent = '−';
            }
        });
    });
});
