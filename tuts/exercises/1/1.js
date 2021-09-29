"use strict";
exports.__esModule = true;
exports.users = [
    {
        name: 'Abhjit Roy',
        age: 28,
        occupation: 'Programmer'
    },
    {
        name: 'Ramesh Kumar',
        age: 24,
        occupation: 'Engineer'
    }
];
function logPerson(user) {
    console.log("- " + user.name + ", " + user.age);
}
exports.logPerson = logPerson;
console.log('Users:');
exports.users.forEach(logPerson);
