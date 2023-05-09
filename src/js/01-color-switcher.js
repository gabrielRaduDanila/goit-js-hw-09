// imports
import getElement from './getElement.js';
import { starChangeColor } from './color-switcher-folder/starChangeColor.js';
import { stopChangeColor } from './color-switcher-folder/starChangeColor.js';
// exports
export const startBtn = getElement('button[data-start]');
const stopBtn = getElement('button[data-stop]');

startBtn.addEventListener('click', starChangeColor);
stopBtn.addEventListener('click', stopChangeColor);
