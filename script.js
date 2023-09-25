function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.getElementById('nightModeToggle').addEventListener('click', function() {
    var moonIcon = document.getElementById('moonIcon');
    var sunIcon = document.getElementById('sunIcon');

    // Check which icon is currently displayed and toggle accordingly
    if(getComputedStyle(moonIcon).display !== 'none') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        // Additional logic for enabling night mode
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        // Additional logic for disabling night mode
    }

    document.body.classList.toggle('night-mode');
    
    // Save the current mode to local storage
    if (document.body.classList.contains('night-mode')) {
        localStorage.setItem('night-mode', 'enabled');
    } else {
        localStorage.setItem('night-mode', 'disabled');
    }
});

// Check local storage for theme preference
document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('night-mode') === 'enabled') {
        document.body.classList.add('night-mode');
    } else {
        document.body.classList.remove('night-mode');
    }
});
