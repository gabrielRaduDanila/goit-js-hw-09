import Notiflix from 'notiflix';
import getElement from '../getElement.js';
const delay = getElement("input[name = 'delay']");
const step = getElement("input[name = 'step']");
const amount = getElement("input[name = 'amount']");
import createPromise from './createPromise.js';

const eventHandler = e => {
  e.preventDefault();
  const delayVal = parseInt(delay.value);
  const stepVal = parseInt(step.value);
  const amountVal = parseInt(amount.value);
  let currentDelay = delayVal;
  for (let i = 0; i < amountVal; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position + 1} in ${delay} ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position + 1} in ${delay} ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position + 1} in ${delay} ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position + 1} in ${delay} ms`
        );
      });
    currentDelay += stepVal;
  }
};

export default eventHandler;
