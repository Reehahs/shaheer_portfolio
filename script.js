// Tabbing feature
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links and tabs
            navLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            // Add active class to the clicked link and corresponding tab
            this.classList.add('active');
            const targetTab = document.querySelector(this.getAttribute('href'));
            targetTab.classList.add('active');
        });
    });
});