const saved = localStorage.getItem('theme');
    const link = document.getElementById('theme-stylesheet');
    if (saved && saved !== '/style.css') {
      link.href = saved;
    }
    setTimeout(() => document.body.style.visibility = 'visible', 500);
    window.onbeforeunload = () => localStorage.getItem('confirmExit') === 'true' ? true : null;