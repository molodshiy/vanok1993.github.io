/**
 * Created by ivan.datsiv on 1/12/2016.
 */
var startButton = document.querySelector(".startPause");
startButton.addEventListener("click", startPause);

var resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);

var time = 0;
var run = 0;

function startPause(){
    if(run == 0){
        run = 1;
        increment();
        var startPause = document.querySelector(".startPause");
        startPause.innerHTML = "Pause";
    }else{
        run = 0;
        startPause = document.querySelector(".startPause");
        startPause.innerHTML = "Resume";
    }
}

function reset(){
    run = 0;
    time = 0;
    var startPause = document.querySelector(".startPause");
    startPause.innerHTML = "Start";
    var timer = document.querySelector(".timer");
    timer.innerHTML = "00:00:00:00";
}

function increment(){
    if(run == 1) {
        setTimeout(function(){
            time++;
            var hours = Math.floor(time/100/60/60);
            var minutes = Math.floor(time/100/60);
            var seconds = Math.floor(time/100);
            var milliseconds = time % 100;

            if(hours > 24){
                hours = (hours%24);
            }
            if(hours < 10){
                hours = "0" + hours;
            }
            if(minutes > 59){
                minutes = (minutes%60);
            }
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            if(seconds > 59){
                seconds = (seconds%60);
            }
            if(seconds < 10){
                seconds = "0" + seconds;
            }
            if(milliseconds < 10){
                milliseconds = "0" + milliseconds;
            }
            var timer = document.querySelector(".timer");
            timer.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
            increment();
        },10);
    }
}