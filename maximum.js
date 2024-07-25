let numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
let max = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]; 
  }
}

console.log("The maximum number is " + max);