const saved = localStorage.getItem('theme');
const link = document.getElementById('theme-stylesheet');
if (saved && saved !== '/style.css') {
  link.href = saved;
}
setTimeout(() => document.body.style.visibility = 'visible', 500);
window.onbeforeunload = () => localStorage.getItem('confirmExit') === 'true' ? true : null;
window.dataLayer = window.dataLayer || [];
function gtag() {
    window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-C631H8J5QD');
const script = document.createElement('script');
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-C631H8J5QD';
script.async = true;
document.head.appendChild(script);