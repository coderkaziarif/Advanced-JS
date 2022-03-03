const numbers = [2, 3, 4, 5, 9];
// const nLength = numbers.length;
// const output = [];

// for (let i = 0; i < nLength; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element) {
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function (element) {
//     // console.log(element, index, array);
//     return element * element;
// })

// const result = numbers.map(x => x * x);
// console.log(result);

// const bigger = numbers.filter(x => x < 5);
const bigger = numbers.find(x => x > 5);
console.log(bigger);   