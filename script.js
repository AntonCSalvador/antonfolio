function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.getElementById('nightModeToggle').addEventListener('click', function() {
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
