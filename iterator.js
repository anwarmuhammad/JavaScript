let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);
console.log(longCities);
// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);
console.log(smallerNums);
// Choose a method that will return a boolean value
nums.every(num => num > 0);
console.log(nums.every(num => num > 0));