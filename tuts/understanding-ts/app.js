// object
var person = {
    name: 'John',
    age: 30,
    hobbies: ['football', 'chess'],
    roles: [2, 'author'] // tuple
};
// NOTE: `push` method is unique in terms of adding element with any defined length of tuple
person.roles.push('admin'); // add an element
// person.roles[1] = 1;    // update the element  ERROR!!!
var favActivities;
favActivities = ['Sports'];
console.log(person.name);
console.log(person.age);
console.log("hobbies:");
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("\t" + hobby.toUpperCase());
}
console.log("roles:");
for (var _b = 0, _c = person.roles; _b < _c.length; _b++) {
    var role = _c[_b];
    console.log("\t" + role);
}
