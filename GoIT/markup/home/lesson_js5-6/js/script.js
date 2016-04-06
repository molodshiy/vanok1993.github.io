/**
 * Created by ivan.datsiv on 3/14/2016.
 */

var time = document.getElementById("time");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var clear = document.getElementById("clear");
var interval;

start.addEventListener('click', handlerStart);

function handlerStart() {
    interval = setInterval(write, 5);

    pause.addEventListener('click', handlerPause);
    clear.addEventListener('click', handlerStop);
    start.removeEventListener('click', handlerStart);
}

function handlerPause() {
    clearInterval(interval);
    changeButton("Continue", handlerPause, handlerCont);
}

function handlerCont() {
    interval = setInterval(write, 5);
    changeButton("Pause", handlerCont, handlerPause);
}

function handlerStop() {
    clearInterval(interval);
    pause.innerHTML = "Pause";
    pause.removeEventListener('click', handlerPause);
    pause.removeEventListener('click', handlerCont);
    time.innerHTML = "00 : 00 : 000";
    start.addEventListener('click', handlerStart);
}

function changeButton(innerHTML, pre, next) {
    pause.innerHTML = innerHTML;
    pause.removeEventListener('click', pre);
    pause.addEventListener('click', next);
}

function write() {
    var arrTime = time.firstChild.nodeValue.split(" : ");
    var ms = parseInt(arrTime[2]);
    var s = parseInt(arrTime[1]);
    var m = parseInt(arrTime[0]);

    ms += 5;
    if (ms >= 999) {
        ms = 0;
        s += 1;
        if (s >= 59) {
            s = 0;
            m += 1;
            (m < 10) ? arrTime[0] = "0" + m : arrTime[0] = m;
        }
        (s < 10) ? arrTime[1] = "0" + s : arrTime[1] = s;
    }

    if (ms < 10) {
        arrTime[2] = "00" + ms;
    } else if (ms >= 10 && ms < 100) {
        arrTime[2] = "0" + ms;
    } else {
        arrTime[2] = ms;
    }

    time.innerHTML = arrTime.join(" : ");
}