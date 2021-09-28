import colorSwatches from './color-data/color-swatches.js';
import { randomIntegerFromInterval } from './js/randomIntegerFromInterval.js';
import rf from './js/rf.js';

rf.btnStart.addEventListener('click', onBtnStartClick);
rf.btnStop.addEventListener('click', onBtnStopClick);

let timerId = null;

function onBtnStartClick({ target }) {
    target.disabled = true;
    switchBodyColorWithInterval();
}

function onBtnStopClick() {
    rf.btnStart.disabled = false;
    clearTimeout(timerId);
}

function switchBodyColorWithInterval() {
    setTimeout(function setBodyColor() {
        document.body.style.backgroundColor =
            colorSwatches[randomIntegerFromInterval(0, colorSwatches.length - 1)];
        timerId = setTimeout(setBodyColor, 1000);

    }, 0);
}
