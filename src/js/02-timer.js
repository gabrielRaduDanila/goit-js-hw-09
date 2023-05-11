import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import getElement from './getElement.js';
import onCloseHandler from './timer-task/onCloseHandler.js';
import eventTrigger from './timer-task/eventTrigger.js';

let selectedTime;
let countdown = null;
export const items = document.querySelectorAll('.value');
export const startBtn = getElement('button[data-start]');
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedDate = selectedDates[0];
    selectedDate = selectedDate.getTime();
    selectedTime = selectedDate;
    eventTrigger(selectedDate);
  },
};
const timePicker = getElement('input[type="text"]');

const fp = flatpickr(timePicker, options);

const clickEventHandler = () => {
  startBtn.disabled = true;
  countdown = setInterval(onCloseHandler, 1000);
  onCloseHandler();
};

startBtn.addEventListener('click', clickEventHandler);

export { selectedTime, countdown };
