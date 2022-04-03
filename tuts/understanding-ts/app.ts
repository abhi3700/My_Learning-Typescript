const person = {
    name: 'John',
    age: 30,
    hobbies: ['football', 'chess']
};

let favActivities: string[];
favActivities = ['Sports'];

console.log(person.name);
console.log(person.age);

console.log("hobbies:");
for (const hobby of person.hobbies) {
    console.log(`\t${hobby.toUpperCase()}`);
}