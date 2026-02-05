const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainGif = document.getElementById('mainGif');
const title = document.querySelector('.title');

let noClickCount = 0;
const messages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
];

// Direct GIF URLs
const sadGif = "https://media1.tenor.com/m/9Ev4_pF1p5MAAAAC/bh187-minions.gif";
const happyGif = "https://media1.tenor.com/m/gDfUt8Kry48AAAAC/yay-minions.gif";

noBtn.addEventListener('click', handleNoInteraction);
noBtn.addEventListener('mouseover', handleNoInteraction);

function handleNoInteraction() {
    noClickCount++;

    // Shrink the No button
    const currentScale = 1 - (noClickCount * 0.1);
    if (currentScale > 0) {
        noBtn.style.transform = `scale(${currentScale})`;
    } else {
        noBtn.style.display = 'none';
    }

    // Grow the Yes button
    const yesScale = 1 + (noClickCount * 0.2);
    yesBtn.style.transform = `scale(${yesScale})`;

    // Change No button text 
    if (noClickCount < messages.length) {
        noBtn.innerText = messages[noClickCount];
    }
}

yesBtn.addEventListener('click', () => {
    // Change visuals with specific success message
    title.innerText = "yay happy valentines 💘";
    mainGif.src = happyGif;

    // Hide buttons
    document.querySelector('.buttons').style.display = 'none';

    // Launch Confetti
    launchConfetti();
});

function launchConfetti() {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInOut(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInOut(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInOut(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
