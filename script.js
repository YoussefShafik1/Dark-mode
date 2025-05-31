document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the theme
    function applyTheme(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            themeToggleBtn.textContent = 'Switch to Light Mode'; // Update button text
        } else {
            body.classList.remove('dark-mode');
            themeToggleBtn.textContent = 'Switch to Dark Mode'; // Update button text
        }
    }

    // 1. Check localStorage for preferred theme on page load
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
        applyTheme(true);
    } else {
        // Default to light mode if nothing is stored or if it's 'light'
        applyTheme(false);
    }

    // 2. Add event listener to the toggle button
    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        if (isDarkMode) {
            applyTheme(false); // Switch to light
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme(true); // Switch to dark
            localStorage.setItem('theme', 'dark');
        }
    });
});