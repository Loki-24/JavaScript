let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");
let stopButtonElement = document.getElementById("stopButton");
let readyButtonElement = document.getElementById("readyButton");
let goButtonElement = document.getElementById("goButton");

function Stop() {
    stopButtonElement.style.backgroundColor = "#cf1124";
    stopLightElement.style.backgroundColor = "#cf1124";
    readyLightElement.style.backgroundColor = "#4b5069";
    readyButtonElement.style.backgroundColor = "#1f1d41";
    goLightElement.style.backgroundColor = "#4b5069";
    goButtonElement.style.backgroundColor = "#1f1d41";
}

function Ready() {
    readyButtonElement.style.backgroundColor = "#f7c948";
    readyLightElement.style.backgroundColor = "#f7c948";
    goLightElement.style.backgroundColor = "#4b5069";
    goButtonElement.style.backgroundColor = "#1f1d41";
    stopLightElement.style.backgroundColor = "#4b5069";
    stopButtonElement.style.backgroundColor = "#1f1d41";

}

function Go() {
    goButtonElement.style.backgroundColor = "#199473";
    goLightElement.style.backgroundColor = "#199473";
    stopLightElement.style.backgroundColor = "#4b5069";
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyLightElement.style.backgroundColor = "#4b5069";
    readyButtonElement.style.backgroundColor = "#1f1d41";
}