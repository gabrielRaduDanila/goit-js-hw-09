import getElement from './getElement.js';
import eventHandler from './promises/eventHandler.js';

const form = getElement('.form');

form.addEventListener('submit', eventHandler);
