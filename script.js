document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-dark-mode');
  const body = document.body;
  const localStorageKey = 'darkModeEnabled';

  const isDarkMode = localStorage.getItem(localStorageKey) === 'true';

  if (isDarkMode) {
    body.classList.add('dark-mode');
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      const isCurrentlyDark = body.classList.contains('dark-mode');
      localStorage.setItem(localStorageKey, isCurrentlyDark);
    });
  } else {
    console.error('El botón con el ID "toggle-dark-mode" no fue encontrado.');
  }
});