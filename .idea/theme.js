const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(savedTheme);

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');

    const theme = body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});
