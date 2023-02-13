const arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
const letters = arr.concat(arr2);
console.log(letters);

console.log(letters.join(' - '));
console.log(arr.join(', ')); // a, b, c, d, e
console.log(arr);

// const index = arr.findIndex();
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const arr3 = [1, 2, 3, 4];
console.log(arr3.reduce((acc, curr) => acc + curr, 0));

const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr4.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const arr5 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x); // [empty × 7]

let a = 10;
console.log(a++); // 10
console.log(++a); // 12
console.log(a); // 12
