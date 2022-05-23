var audio = document.getElementById("audio"); 
var turnOff = document.getElementsByClassName("turnoff");

window.onload = function() {
    audio.play();
    audio.volume = 0.3;
}

function playAudio() {
    audio.play();
}

function pauseAudio() { 
    audio.pause(); 
} 