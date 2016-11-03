var time = 0;
var newTime = 0;
var running = 0;
var timeLap = 0;
var runningLap = 0;
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("startPause");
var resetButton = document.getElementById("reset");

pauseButton.onclick = function startPause() {
    if (running == 0) {
        running = 1;
        runningLap = 1;
        increment();
        incrementLap();
        startButton.innerHTML = "Стоп";
        pauseButton.style.backgroundColor = "white";
        pauseButton.style.color = "red";
        resetButton.innerHTML = "Круг";

    } else {
        running = 0;
        runningLap = 0;
        startButton.innerHTML = "Старт";
        pauseButton.style.backgroundColor = "white";
        pauseButton.style.color = "green";
        resetButton.innerHTML = "Сброс";
    }
}

var counter = 0;

resetButton.onclick = function reset() {
    if (resetButton.innerHTML == "Сброс") {
        results.innerHTML = "";
        resetButton.innerHTML = "Круг";
        counter = 0;
        time = 0;
        newTime = 0;
        timeLap = 0;
        document.getElementById("output").innerHTML = "00:00,00";
        document.getElementById("lap").innerHTML = "00:00,00";
        return;
    } else {
        counter++;
        timeLap = 0;
        var p = document.createElement("p");
        var mins = Math.floor(newTime / 10 / 60);
        var secs = Math.floor(newTime / 10 % 60);
        var milisecs = Math.floor(newTime % 10)
        if (mins < 10) {
            mins = "0" + mins;
        }
        if (secs < 10) {
            secs = "0" + secs;
        }
       
        p.innerText = "Круг " + counter + "= " + mins + ":"+ secs + "," + milisecs + "0";
        results.appendChild(p);
        newTime = 0;
    } if (counter >=11) {
  results.innerHTML = "";
}
} 
 

function increment() {
    if (running == 1) {
        setTimeout(function() {
            time++;
            newTime++;
            var mins = Math.floor(time / 10 / 60);
            var secs = Math.floor(time / 10 % 60);
            var milisecs = Math.floor(time % 10);
            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = mins + ":" + secs + "," + milisecs + "0";
            increment();
        }, 100)

    }
}

function incrementLap() {
    if (runningLap == 1) {
        setTimeout(function() {
            timeLap++;
            var mins = Math.floor(timeLap / 10 / 60);
            var secs = Math.floor(timeLap / 10 % 60);
            var milisecs = Math.floor(timeLap % 10);
            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
         
            document.getElementById("lap").innerHTML = mins + ":" + secs + "," + milisecs + "0";
            incrementLap();
        }, 100)
    }
}