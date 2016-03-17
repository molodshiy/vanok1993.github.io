/**
 * Created by ivan.datsiv on 3/14/2016.
 */

var time = document.getElementById("time");
var start = document.getElementById("start");
var clear = document.getElementById("clear");
var interval;

start.addEventListener('click', handlerStart);
clear.addEventListener('click', handlerStop);

function handlerStart() {
    interval = setInterval(write, 5);
    if (start.firstChild.nodeValue == "Start") {
        changeFirstButton("Pause", handlerStart, handlerPause);
    }
}

function handlerPause() {
    clearInterval(interval);
    changeFirstButton("Continue", handlerPause, handlerCont);
}

function handlerCont() {
    handlerStart();
    changeFirstButton("Pause", handlerCont, handlerPause);
}

function handlerStop() {
    clearInterval(interval);
    time.innerHTML = "00 : 00 : 000";
    changeFirstButton.apply("Start", [handlerPause, handlerCont]);
    (time.firstChild.nodeValue == "Pause") ? (changeFirstButton("Start", handlerPause, handlerStart)) : (changeFirstButton("Start", handlerCont, handlerStart));
}

function changeFirstButton(innerHTML, pre, next) {
    start.innerHTML = innerHTML;
    start.removeEventListener('click', pre);
    start.addEventListener('click', next);
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