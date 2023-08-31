// seleção de elementos 
const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
const startbtn = document.querySelector("#startbnt")
const pausebtn = document.querySelector("#pausebnt")
const resumebtn = document.querySelector("#resumebnt")
const resetbtn = document.querySelector("#resetbnt")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let ispaused = false;

// função de rodar o temporizador do cronometro
startbtn.addEventListener("click", startTimer)
pausebtn.addEventListener("click", pauseTime)
resumebtn.addEventListener("click", resumeTime)
resetbtn.addEventListener("click", resetTime)

function startTimer() {

    interval = setInterval(() => {

        if (!ispaused) {
            miliseconds += 10;
            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            milisecondsEl.textContent = formatmiliseconds(miliseconds);
            secondsEl.textContent = formatTime(seconds);
        }

    }, 10);

    startbtn.style.display = "none";
    pausebtn.style.display = "block";

}

function resetTime() {
    clearInterval(interval);

    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesEl.textContent = "00";
    milisecondsEl.textContent = "000";
    secondsEl.textContent = "00";

    startbtn.style, display = "block";
    pausebtn.style, display = "none";
    resumebtn.style.display = "none";
}

function resumeTime() {
    ispaused = false;
    pausebtn.style.display = "block";
    resumebtn.style.display = "none";
}

function pauseTime() {
    ispaused = true;
    pausebtn.style.display = "none";
    resumebtn.style.display = "block";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatmiliseconds(time) {
    return time < 100 ? `${time}`.padstart(3, "0") : time;
}