// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const header = document.querySelector('header');
const topBar = document.querySelector('.top-bar');
const mainMenu = document.querySelector('.main-nav');
const trending = document.querySelector('.trending');
const mainContent = document.querySelector('.main-content');
const newsCards = document.querySelectorAll('.news-card');
const extrasDivs = document.querySelectorAll('.extras div');
const footer = document.querySelector('footer');

// Function to apply the dark theme
function enableDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    topBar.classList.add('dark-mode');
    mainMenu.classList.add('dark-mode');
    trending.classList.add('dark-mode');
    mainContent.classList.add('dark-mode');
    newsCards.forEach(card => card.classList.add('dark-mode'));
    extrasDivs.forEach(div => div.classList.add('dark-mode'));
    footer.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
}

// Function to apply the light theme
function enableLightMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    topBar.classList.remove('dark-mode');
    mainMenu.classList.remove('dark-mode');
    trending.classList.remove('dark-mode');
    mainContent.classList.remove('dark-mode');
    newsCards.forEach(card => card.classList.remove('dark-mode'));
    extrasDivs.forEach(div => div.classList.remove('dark-mode'));
    footer.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'dark') {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

// Check for the theme preference on page load
if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
}


// Hover effect (on news cards)
const newsCardsHover = document.querySelectorAll('.news-card');
newsCardsHover.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.03)';
        card.style.transition = '0.3s ease-in-out';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Bonus: Double-click for a secret message
const logo = document.getElementById('logo');
logo.addEventListener('dblclick', () => {
    alert("🎉 You've discovered a hidden feature! Stay sporty! 🏆");
});

// Form Submission Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Basic form validation (you can enhance this)
    const nameInput = contactForm.querySelector('input[type="text"]');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const messageInput = contactForm.querySelector('textarea');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate sending the message (replace with actual backend logic if needed)
    console.log('Form submitted!');
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
    console.log('Message:', messageInput.value);

    // You can add code here to send the data to a server
    // ...

    // Clear the form after submission
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert('Message sent successfully!');
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    //  In a real app, you would filter the news articles here
    console.log(`Searching for: ${query}`);
});