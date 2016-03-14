/**
 * Created by ivan.datsiv on 3/14/2016.
 */

var min = document.getElementById("min");
var sec = document.getElementById("sec");
var mili = document.getElementById("mili");
var interval;


var start = document.getElementById("start");
var pause = document.getElementById("pause");
var cont = document.getElementById("cont");
var clear = document.getElementById("clear");

start.addEventListener('click', handlerStart);
pause.addEventListener('click', handlerPause);
cont.addEventListener('click', handlerCont);
clear.addEventListener('click', handlerStop);

function handlerStart() {
    interval = setInterval(write, 5);
    if (start.className == "button_show"){
        changeStartToPause();
    }
}

function handlerPause (){
    clearInterval(interval);
    changePauseToCont();
}

function handlerCont (){
    handlerStart();
    changeContToPause();
}

function handlerStop (){
    clearInterval(interval);
    mili.innerHTML = "000";
    sec.innerHTML = "00";
    min.innerHTML = "00";
    changeButtonToStart();
}

function write () {
    var ms = parseInt(mili.firstChild.nodeValue);
    var s = parseInt(sec.firstChild.nodeValue);
    var m = parseInt(min.firstChild.nodeValue);
    ms +=5;
    if (ms >= 999){
        ms = 0;
        s += 1;
        if (s >= 59) {
            s = 0;
            m += 1;
            min.innerHTML = m;
        }
        sec.innerHTML = s;
    }
    mili.innerHTML = ms;
}

function changeStartToPause(){
    start.classList.add("button_hide");
    start.classList.remove("button_show");
    pause.classList.add("button_show");
    pause.classList.remove("button_hide");
}


function changePauseToCont () {
    pause.classList.add("button_hide");
    pause.classList.remove("button_show");
    cont.classList.add("button_show");
    cont.classList.remove("button_hide");
}

function changeContToPause (){
    cont.classList.add("button_hide");
    cont.classList.remove("button_show");
    pause.classList.add("button_show");
    pause.classList.remove("button_hide");
}
function changeButtonToStart (){
    start.classList.add("button_show");
    start.classList.remove("button_hide");
    pause.classList.add("button_hide");
    pause.classList.remove("button_show");
    cont.classList.add("button_hide");
    cont.classList.remove("button_show");
}