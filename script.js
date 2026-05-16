const scene = document.querySelector('.scene');

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    const size = Math.random() * 5 + 4;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${Math.random() * 90 + 5}%`;
    sparkle.style.top = `${Math.random() * 70 + 10}%`;
    sparkle.style.background = `hsla(${Math.random() * 50 + 280}, 100%, 85%, 1)`;
    sparkle.style.boxShadow = `0 0 14px rgba(255, 255, 255, 0.9), 0 0 28px rgba(255, 183, 93, 0.35)`;
    scene.appendChild(sparkle);
    sparkle.addEventListener('animationend', () => sparkle.remove());
}

function burstSparkles() {
    for (let i = 0; i < 16; i += 1) {
        setTimeout(createSparkle, i * 120);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    burstSparkles();
    setInterval(burstSparkles, 2600);
});
