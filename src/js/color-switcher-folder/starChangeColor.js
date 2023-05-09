import getRandomHexColor from './colorGenerator.js';
import { startBtn } from '../01-color-switcher.js';
let changeColor = null;

const starChangeColor = () => {
  changeColor = setInterval(() => {
    const color = getRandomHexColor();
    const body = document.body;
    body.style.backgroundColor = color;
  }, 1000);

  startBtn.disabled = true;
};

const stopChangeColor = () => {
  clearInterval(changeColor);
  startBtn.disabled = false;
};

export { starChangeColor, changeColor, stopChangeColor };
