document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.secretImg').forEach(img => {
        img.addEventListener('click', () => {
            img.style.transition = 'opacity 2s ease';
            img.style.opacity = '0';

            setTimeout(() => {
                img.style.transition = 'opacity 2s ease';
                img.style.opacity = '1';
            }, 3000);
        });
    });
});
