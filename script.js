var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false

// start

function start () {
    if(!timer) {
        timer = true;
        document.getElementById("start").innerHTML = '<i class="far fa-pause-circle"></i> Pause';
        stopWatch();
    }
    else {
        timer = false;
        document.getElementById("start").innerHTML = '<i class="far fa-play-circle"></i> Start';
    }
}


// reset

function reset() {
    document.getElementById("start").innerHTML = '<i class="far fa-play-circle"></i> Start';

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

let timeoutId;
function stopWatch() {
    clearTimeout(timeoutId);

    if(timer == true) {
        count = count + 1;
    }       
    

    if(count == 99) {
        sec = sec + 1;
        count = 0;
    }

    if(sec == 59) {
        min = min + 1;
        sec = 0;
    }

    if(min == 59) {
        hr = hr + 1;
        min = 0;
        sec = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hr < 10) {
        hrString = "0" + hrString;
    }
    if (min < 10) {
        minString = "0" + minString;
    }
    if (sec < 10) {
        secString = "0" + secString;
    }
    if (count < 10) {
        countString = "0" + countString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    timeoutId = setTimeout("stopWatch()", 10);
}

let date;
setInterval(() => {
    date = new Date().toString();
    document.getElementById('d1').innerHTML = date;
}, 1000);



