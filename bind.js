const normalPerson = {
    firstName: 'Omar',
    lastName: 'Sharif',
    salary: 20000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary
    }
}

const heroPerson = {
    firstName: 'Hero',
    listName: 'Alom',
    salary: 30000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    }
}

const businessPerson = {
    firstName: 'Salman F',
    listName: 'Rahman',
    salary: 40000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    }
}

normalPerson.chargeBill(1000);


const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);


const businessChargeBill = normalPerson.chargeBill.bind(businessPerson);
businessChargeBill(3000);

normalPerson.getFullName();
console.log(normalPerson.salary);

heroPerson.getFullName();
console.log(heroPerson.salary);

businessPerson.getFullName();
console.log(businessPerson.salary);

