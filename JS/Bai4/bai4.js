// Arrow Function trong JS

// 1. function truyền thống
function test() {
  console.log("Test");
}

test();

// 2. Arrow function
test = () => {
  console.log("Test");
};

test = () => console.log("Test");

hello = () => {
  return "Hello World!";
};

hello = (value) => {
  return "Hello World!, " + value;
};

console.log(hello("Sơn"));
