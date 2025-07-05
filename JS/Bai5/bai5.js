// Method trong Array JS

// 1.map
const myArray = [1, 2, 3, 4, 5];

const myList = myArray.map((item, index) => {
  console.log(item, index);
  return item * 2;
});

//console.log(myList);

// 2.filter

const ages = [16, 24, 32, 45];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

const result = ages.filter((item) => {
  return item >= 18;
});

console.log(result);
