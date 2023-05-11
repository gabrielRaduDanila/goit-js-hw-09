import { selectedTime, countdown } from '../02-timer.js';
import convertMs from './convertMs.js';
import { items } from '../02-timer.js';
import Notiflix from 'notiflix';
import { startBtn } from '../02-timer.js';

const onCloseHandler = () => {
  let currentTime = new Date().getTime();
  const remainTime = selectedTime - currentTime;
  const values = convertMs(remainTime);
  const displayValues = [
    values.days,
    values.hours,
    values.minutes,
    values.seconds,
  ];
  items.forEach((item, index) => {
    let value = displayValues[index];
    item.innerHTML = addLeadingZero(value);
  });
  if (remainTime < 1) {
    clearInterval(countdown);
    items.forEach(item => (item.innerHTML = '00'));
    Notiflix.Notify.success('your time has come :)');
    startBtn.disabled = true;
  }
};

function addLeadingZero(value) {
  value = value.toString();
  if (value.length > 2) {
    return value;
  }
  return value.padStart(2, '0');
}
export default onCloseHandler;
