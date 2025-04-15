
let hasScrolledTo80 = false;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;

  if (scrolled > 80 && !hasScrolledTo80) {
    gtag('event', 'scroll_80');
    hasScrolledTo80 = true;
  }
});
