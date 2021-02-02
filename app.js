const timer = document.getElementById('stopwatch');

var min = 0;
var sec = 0;
var milisec = 0;



var displayMin = document.getElementById("min") ;
var displaySec = document.getElementById("sec") ;
var displayMilisec = document.getElementById("milisec") ;


function stopwatch(){
milisec++;
displayMilisec.innerHTML = milisec
if(milisec>=100){
    sec++;
    displaySec.innerHTML = sec;

    milisec = 0;
}
else if(sec>=60){
    min++;
    sec =0;
    displayMin.innerHTML = min
}
}


//  interval = setInterval(stopwatch,10)


function startTimer(){
    interval = setInterval(stopwatch,10)   
}

function stopTimer(){
    clearInterval(interval)   
}

function resetTimer(){


min = 0;
sec = 0;
milisec = 0;

displayMin.innerHTML = min;
displaySec.innerHTML = sec;
displayMilisec.innerHTML = milisec;

stopTimer()
}
