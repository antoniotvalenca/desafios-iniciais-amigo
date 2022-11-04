         // variaveis e constantes//
//// ______________________________________ ////
const redHTML = document.querySelector(".red");
const yellowHTML = document.querySelector(".yellow");
const greenHTML = document.querySelector(".green");
const timerHTML = document.querySelector(".timer");
const btn = document.querySelector(".btn");

let currentState;
let counter;
let btnAllowance = true;

const colorRed = "#FF0000";
const colorYellow = "#FFFF00";
const colorGreen = "#00FF00";
const colorNone = "#FFFFFF";

const TIME_OPENED = 7;
const TIME_WAITING = 10;
const TIME_CLOSED = 25;

   // funçoes especificas de funcionamento //
//// ____________________________________ ////
const openTraffic = () => {
    timerHTML.innerHTML = `0${counter}`;
    redHTML.style.background = colorNone;
    greenHTML.style.background = colorGreen;
};

const waitTraffic = () => {
    timerHTML.innerHTML = '';
    greenHTML.style.background = colorNone;
    yellowHTML.style.background = colorYellow
};

const closeTraffic = () => {
    timerHTML.innerHTML = counter < 20 ? `0${counter - 10}` : counter - 10;
    yellowHTML.style.background = colorNone;
    redHTML.style.background = colorRed;
};

        // funçao geral do semaforo //
//// ______________________________________ ////
const trafficLight = () => {

    counter = 0;

    let counterGeneral = setInterval(() => {
        counter++;

        if (counter <= TIME_OPENED) {
            openTraffic();
            currentState = "opened";

        } else if (counter > TIME_OPENED && counter <= TIME_WAITING) {
            waitTraffic()
            currentState = "waiting";

        } else if (counter > TIME_WAITING && counter <=TIME_CLOSED) {
            closeTraffic()
            currentState = "closed";

        } else if (counter > TIME_CLOSED) {
            setTimeout(clearInterval(counterGeneral), 0)
            trafficLight() // recursivando
        }

    }, 1000);
};

trafficLight();

       //   addEventListener do botão   //
//// ______________________________________ ////
btn.addEventListener("click", () => {
    setInterval(() => {btnAllowance = true}, 60000);

    if (currentState !== "opened" || btnAllowance === false) {
        return;
    } else {
        counter = 4;
    };

    btnAllowance = false;
});