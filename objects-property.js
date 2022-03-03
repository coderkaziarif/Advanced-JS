const student = [
    { id: 2, name: "Omar" },
    { id: 5, name: "Korim" },
    { id: 7, name: "jorina" }
];

// const sLength = student.length;
// const sName = [];

// for (let i = 0; i < sLength; i++) {
//     const element = student[i];
//     sName.push(element["name"]);
// }

const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 5);
const biggerOne = student.find(s => s.id > 5);
// console.log(names);
console.log(biggerOne);