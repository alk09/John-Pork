const ringtone = document.getElementById('ringtone');
const status = document.getElementById('status');
const timerElem = document.getElementById('timer');
let timerInterval;
let seconds = 0;

function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function startRingtone() {
    if (ringtone) {
        ringtone.currentTime = 0;
        ringtone.play().catch(() => {});
    }
}

function stopRingtone() {
    if (ringtone) {
        ringtone.pause();
        ringtone.currentTime = 0;
    }
}

function startTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    timerElem.textContent = '00:00';
    timerInterval = setInterval(() => {
        seconds++;
        timerElem.textContent = formatTime(seconds);
    }, 1000);
}

function createConfetti() {
    const card = document.querySelector('.caller-card');
    if (!card) return;
    for (let i = 0; i < 30; i++) {
        const conf = document.createElement('div');
        conf.classList.add('confetti');
        conf.style.background = `hsl(${Math.random() * 360},70%,60%)`;
        conf.style.left = Math.random() * 100 + '%';
        conf.style.top = Math.random() * 100 + '%';
        card.appendChild(conf);
        setTimeout(() => conf.remove(), 2200);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
}

// page load
window.addEventListener('DOMContentLoaded', () => {
    startRingtone();
    startTimer(); // timer increases from start
});

document.getElementById('acceptBtn').addEventListener('click', () => {
    status.textContent = 'Get Wrecked Nerd';
    status.style.color = '#6328a7af';
    document.querySelector('.caller-card').classList.remove('ringing');
    stopRingtone();
    startTimer();
    createConfetti();
});

document.getElementById('hangupBtn').addEventListener('click', () => {
    status.textContent = 'Call ended.';
    status.style.color = '#dc3545';
    document.querySelector('.caller-card').classList.remove('ringing');
    stopRingtone();
    stopTimer();
    // redirect to Rickroll
    window.location.href = 'https://www.youtube.com/watch?v=oHg5SJYRHA0';
});

document.getElementById('messageBtn').addEventListener('click', () => {
    alert('YOU FOR REAL THOUGHT YOU CAN MESSAGE JOHN PORK HIMSELF WHO DO YOU THINK YOU ARE? what a loser');
});

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('themeToggle');
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
