document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Dark Mode';
    toggleButton.id = 'dark-mode-toggle'; // Set button id for targeting
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Toggle logo based on mode
        const logo = document.getElementById('logo');
        if (document.body.classList.contains('dark-mode')) {
            logo.src = './static/images/logo-renan-black.png';
        } else {
            logo.src = './static/images/logo-renan.png';
        }
    });
  
    // Insert button after navbar
    const nav = document.querySelector('.nav');
    nav.insertAdjacentElement('afterend', toggleButton);
  });
  