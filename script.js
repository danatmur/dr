// Typing effect for birthday message
const text = "Мне очень с тобой повезло, с Днем Рождения! Люблю тебя бесконечно. ❤️❤️❤️";
const messageElement = document.querySelector('.message');
let index = 0;

function typeWriter() {
  if (index < text.length) {
    messageElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
    index++;
    setTimeout(typeWriter, 100);
  } else {
    messageElement.innerHTML = text;
  }
}

// Rainbow confetti effect
function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const colors = ['#ff69b4', '#ffb6c1', '#ffe4e1', '#ffc0cb', '#ff1493', '#c71585', '#dc143c', '#ff4500', '#ffa500', '#ffd700'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 8000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
  createConfetti();
});
