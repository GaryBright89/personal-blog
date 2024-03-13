const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", function () {
  window.location.href = "index.html";
});

const modeButton = document.querySelector('.modeBtn');
const body = document.body;

modeButton.addEventListener('click', function() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    modeButton.textContent = '☀️'; // Change button text for light mode
  } else {
    body.classList.add('dark-mode');
    modeButton.textContent = '🌙'; // Change button text for dark mode
  }
});
