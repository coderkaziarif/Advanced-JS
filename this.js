// const myObj = {
//     name: 'Sbdur Raham',
//     getFullName: function () {
//         console.log(this);
//         return 'Mr.' + this.name;
//     }

// }

// const anotherObj = {
//     name: 'Billal Ali'
// }

// anotherObj.getFullName = myObj.getFullName;
// console.log(anotherObj.getFullName);
// myObj.getFullName();
// anotherObj.getFullName();

const myObj = {
    name: 'Abdur Rahman',
    getFullName: function () {
        return 'Mr' + this.name;
    }
}

const anotherObj = {
    name: 'Mizanur Rahman'
}

anotherObj.getFullName = myObj.getFullName;
// console.log(anotherObj.getFullName);


myObj.getFullName();
anotherObj.getFullName();
