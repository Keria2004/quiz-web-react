const Person = { name: "Võ Huỳnh Sơn", age: 21, like: "girl" };

// Cách cũ

// console.log(Person.name);
// console.log(Person.age);

// console.log(city[0]);
// console.log(city[1]);
// console.log(city[2]);

// Cách mới
const { name, age } = Person;

const city = ["DaNang", "HCM", "HaNoi", "CaMau"];

const [DaNang, HCM, HaNoi] = city;

// console.log(name);
// console.log(age);

// console.log(DaNang);

const [x, y, , z] = city;
console.log(x, y, z);

const dev = { tool: "laptop", like: "bugs" };

// Cách 1
let { like } = dev;
console.log(like);

// Cách 2
let { like: son } = dev; // => son = bugs
console.log(son);
