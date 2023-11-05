// Advanced Arrays
const array = [1,2,10,16];
// make a newArray called 'double' which takes a copy of the array, and multiplies it by 2
const double = [];
const newArray = array.forEach(num => {
  double.push(num * 2);
})
console.log('forEach', double);
// map, filter, reduce

// forEach: iterate a collection of items
// use map when you want to return a collection of elements

// MAP - method 1
// const mapArray = array.map((num) => {
//   return num * 2
// })

// MAP - method 2
const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

// filter results based on output (TRUE/return  - it's inside, FALSE - not inside)
// FILTER - method 1
// const filterArray = array.filter(num => {
  //   return num > 5
  // })
  
// FILTER - method 2
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);


// reduce  - will always return an array (reduce/sum)
// accumulator - value that was there previously (starts with 0)
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num
}, 5); // will output 34 --> sum of nums + 5 = 29 + 5 = 34

console.log('reduce', reduceArray);

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames


//Create an array using map that has all the usernames with a "? to each of the usernames


//Filter the array to only include users who are on team: red


//Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
