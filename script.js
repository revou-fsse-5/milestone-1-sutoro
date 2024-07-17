document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
});

if (localStorage.getItem('darkMode')) {
  var element = document.body;
  element.classList.add('dark-mode');
  document.getElementById('themeButton').textContent = '🌞';
}

function myFunction() {
  var element = document.body;
  element.classList.toggle('dark-mode');

  if (element.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', true);
    document.getElementById('themeButton').textContent = '🌞';
  }
  else {
    localStorage.removeItem('darkMode');
    document.getElementById('themeButton').textContent = '🌒';
  }
}
