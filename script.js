document.addEventListener('DOMContentLoaded', () => {
  const fireworksContainer = document.querySelector('.fireworks');
  const crackersContainer = document.querySelector('.crackers');

  // Create Fireworks
  function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
    fireworksContainer.appendChild(firework);

    setTimeout(() => firework.remove(), 1500);
  }

  setInterval(createFirework, 500);

  // Create Crackers
  function createCracker() {
    const cracker = document.createElement('div');
    cracker.classList.add('cracker');
    cracker.style.left = `${Math.random() * 100}%`;
    cracker.style.animationDuration = `${Math.random() * 2 + 1}s`;
    crackersContainer.appendChild(cracker);

    setTimeout(() => cracker.remove(), 2000);
  }

  setInterval(createCracker, 700);
});
