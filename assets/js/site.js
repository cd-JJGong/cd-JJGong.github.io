const toggle = document.querySelector('.navbar-toggler');
const navigation = document.querySelector('#navbarResponsive');
function closeMenu() {
  navigation.classList.remove('show');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle?.addEventListener('click', () => {
  const open = navigation.classList.toggle('show');
  toggle.setAttribute('aria-expanded', String(open));
});
navigation?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation?.classList.contains('show')) {
    closeMenu();
    toggle.focus();
  }
});
