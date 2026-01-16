const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(savedTheme);

setTimeout(() => {
    window.location.href = 'index.html';
}, 2200);
