let countdownTime; // Countdown time in seconds
let intervalId;
let isRunning = false;

// Update the countdown display
function updateDisplay() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;

    document.getElementById('minutes').value = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').value = seconds < 10 ? `0${seconds}` : seconds;
}

// Start the countdown
function startCountdown() {
    if (!isRunning) {
        intervalId = setInterval(() => {
            if (countdownTime <= 0) {
                clearInterval(intervalId);
                isRunning = false;
            } else {
                countdownTime--;
                updateDisplay();
            }
        }, 1000);
        isRunning = true;
    }
}

// Stop the countdown
function stopCountdown() {
    clearInterval(intervalId);
    isRunning = false;
}

// Reset the countdown
function resetCountdown() {
    stopCountdown();
    const setMinutes = parseInt(document.getElementById('setMinutes').value) || 0;
    const setSeconds = parseInt(document.getElementById('setSeconds').value) || 0;
    countdownTime = setMinutes * 60 + setSeconds;
    updateDisplay();
}

document.getElementById('startButton').addEventListener('click', startCountdown);
document.getElementById('stopButton').addEventListener('click', stopCountdown);
document.getElementById('resetButton').addEventListener('click', resetCountdown);

// Initial display update with default values
resetCountdown();
