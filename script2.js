console.log(parseInt('2.5rem'));
console.log(Number.isFinite('20')); // false
console.log(isFinite('20')); // true
console.log(Number.isInteger(23)); // true
console.log(isFinite(parseInt('20x'))); // true
console.log(parseInt('20x')); //true
console.log(Math.PI * Number.parseFloat('10px') ** 2);
const randomInt = (min, max) =>
  // NOTE: The Math.floor() function returns the largest integer less than or equal to a given number.
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt(10, 20));
console.log(randomInt(11, 20));
console.log(randomInt(11, 20));
console.log(randomInt(11, 20));

console.log(Math.round(-23.3)); // -23
console.log(Math.round(-23.9)); // -24
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24
console.log(typeof +(2.345).toFixed(2)); // 2.35
console.log(typeof Number((2.345).toFixed(2))); // '2.35'
console.log(typeof (2.345).toFixed(2)); // '2.35'

const PI = 3.14_15;
console.log(PI);
console.log(Number('2300_00')); // NaN
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(3243253254324534543656465465645645n);
console.log(BigInt(3243253254324534543656465465645645));
const huge = 34254234624365462546435234n;
// const num = 23;
// console.log(huge * BigInt(num));
console.log(32423524356234542353424564326563454236243n * 100000000n);
console.log(20n === 20); // false
console.log(20 == 20n); // true: JS does type coercion
console.log(Number.parseInt('   2.5rem  ')); // 2
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+1100 (Australian Eastern Daylight Time)
console.log(new Date(2037, 10, 33, 15, 23, 5)); // Thu Dec 03 2037 15:23:05 GMT+1100 (Australian Eastern Daylight Time)
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future.getDay()); // 4
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));
console.log(+future);
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

const num = 3884764.23;
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};
console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log(...ingredients);
console.log('Waiting...');

// setInterval(function () {
//   const nowHour = new Date().getHours();
//   const nowMinute = new Date().getMinutes();
//   const nowSecond = new Date().getSeconds();
//   console.log(`${nowHour}:${nowMinute}:${nowSecond}`);
// }, 1000);

// console.log('first');
// setTimeout(() => {
//   console.log('second');
// }, 0);
// console.log('third');
