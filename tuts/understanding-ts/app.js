var person = {
    name: 'John',
    age: 30,
    hobbies: ['football', 'chess']
};
var favActivities;
favActivities = ['Sports'];
console.log(person.name);
console.log(person.age);
console.log("hobbies:");
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("\t" + hobby.toUpperCase());
}
