// object
const person: {
    name: string,
    age: number,
    hobbies: string[],
    roles: [number, string]
} = {
    name: 'John',
    age: 30,
    hobbies: ['football', 'chess'],     // array
    roles: [2, 'author']                // tuple
};

// NOTE: `push` method is unique in terms of adding element with any defined length of tuple
person.roles.push('admin'); // add an element inspite of defining it of length as 2 above.

// person.roles[1] = 1;    // update the element  ERROR!!!

let favActivities: string[];
favActivities = ['Sports'];

console.log(person.name);
console.log(person.age);

console.log("hobbies:");
for (const hobby of person.hobbies) {
    console.log(`\t${hobby.toUpperCase()}`);
}

console.log("roles:")
for (const role of person.roles) {
    console.log(`\t${role}`);
}

