const dogImage = document.getElementById('dogImage');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const fasterBtn = document.getElementById('fasterBtn');
const slowerBtn = document.getElementById('slowerBtn');

let interval = 3000; // начальная задержка 3 секунды
let timer = null;

function loadDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            dogImage.src = data.message;
        })
        .catch(err => {
            console.error("Ошибка загрузки:", err);
        });
}

startBtn.addEventListener('click', () => {
    if (timer === null) {
        loadDog();
        timer = setInterval(loadDog, interval);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

fasterBtn.addEventListener('click', () => {
    if (interval > 500) {
        interval -= 500;
        restartInterval();
    }
});

slowerBtn.addEventListener('click', () => {
    interval += 500;
    restartInterval();
});

function restartInterval() {
    if (timer !== null) {
        clearInterval(timer);
        timer = setInterval(loadDog, interval);
    }
}