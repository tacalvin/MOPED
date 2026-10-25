// Adapted interactions from the Academic Project Page Template.
const topButton = document.querySelector('.scroll-to-top');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' }));
window.addEventListener('scroll', () => topButton.classList.toggle('visible', window.scrollY > 300), { passive: true });
document.querySelector('.copy-bibtex-btn').addEventListener('click', async () => {
  const code = document.getElementById('bibtex-code');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(code.textContent);
    status.textContent = 'Citation copied.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(code);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C (or Command+C) to copy.';
  }
});
