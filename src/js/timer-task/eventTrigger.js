import Notiflix from 'notiflix';
import { startBtn } from '../02-timer.js';

function eventTrigger(selectedDate) {
  const today = new Date().getTime();
  if (selectedDate < today) {
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    startBtn.disabled = false;
  }
}

export default eventTrigger;
