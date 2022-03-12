// const normalPerson = {
//     fName: 'Rahim',
//     lName: 'Uddin',
//     salary: 15000,
//     getFullName: function () {
//         console.log(this.fName, this.lName);
//     },
//     chargeBill: function (amount) {
//         this.salary = this.salary - amount;
//         return this.salary;
//     }
// }

// normalPerson.chargeBill(200);
// console.log(normalPerson.salary);

// const normalPerson = {
//     fName: 'Sakib',
//     lName: 'Khan',
//     salary: 1500,
//     getFullName: function () {
//         console.log(this.fName, this.lName);
//     },
//     chargeBill: function (amount) {
//         this.salary = this.salary - amount;
//         return this.salary;
//     }
// }

// normalPerson.chargeBill(500);
// console.log(normalPerson.salary);
// normalPerson.getFullName();
// console.log(normalPerson.getFullName);

// ==========New=============

const normalPerson = {
    firstName: 'Shorif',
    lastName: 'Molla',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function (amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
        return this.salary;

    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 20000,
}

const policePerson = {
    firstName: 'Ghushkhor',
    lastName: 'Aslam',
    salary: 30000,
}

normalPerson.getFullName();
console.log(normalPerson.salary);

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);

// const policeChargeBill = normalPerson.chargeBill.bind(policePerson);
// policeChargeBill(2000);

normalPerson.chargeBill.call(heroPerson, 2000, 200, 300);
normalPerson.chargeBill.apply(policePerson, [5000, 500, 400])



console.log(heroPerson.salary);
console.log(policePerson.salary);