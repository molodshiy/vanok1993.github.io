/**
 * Created by ivan.datsiv on 1/12/2016.
 */
var hour = 0,
    min  = 0,
    sec  = 0,
    ms   = 0,
    startInterval,
    startButton,
    pauseButton;

function countMs() {
    if (ms >= 945) {
        ms = 0;
        countSec();
    } else {
        ms+= 63;
    }
};

function countSec() {
    if (sec >= 59) {
        sec = 0;
        countMin();
    } else {
        sec++;
    }
};

function countMin() {
    if (min >= 59) {
        min = 0;
        countHour();
    } else {
        min++;
    }
};

function countHour() {
    if (hour >= 23) {
        hour = 0;
    } else {
        hour++;
    }
};

function paintTimer() {
    var elem     = document.body.querySelector('#timer'),
        elemHour = '0' + hour,
        elemMin  = '0' + min,
        elemSec  = '0' + sec;

    if (sec >= 10) {
        elemSec = sec;
    }

    if (min >= 10) {
        elemMin = min;
    }

    if (hour >= 10) {
        elemHour = hour;
    }

    elem.innerHTML = elemHour + ':' + elemMin + ':' + elemSec + ':' + ms;
};

function initTimer() {
    countMs();
    paintTimer();
};

function startTimer() {
    startInterval = setInterval(initTimer, 63);
};

function pauseTimer() {
    clearInterval(startInterval);
    startButton.innerHTML = 'start';
};

function resetTimer() {
    pauseTimer();
    hour = 0;
    min  = 0;
    sec  = 0;
    ms = 0;
    paintTimer();
};

function changeButton() {
    if (startButton.innerHTML !== 'pause') {
        startButton.innerHTML = 'pause';
        startTimer();
    } else {
        startButton.innerHTML = 'start';
        pauseTimer();
    }
};

var startButton = document.body.querySelector('#startButton');
startButton.addEventListener('click', changeButton);

var resetButton = document.body.querySelector('#resetButton');
resetButton.addEventListener('click', resetTimer);