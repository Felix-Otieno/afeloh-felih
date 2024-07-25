function findMax(io) {
    let max = io[0]; 
    for (let i = 1; i < io.length; i++) {
      if (io[i] > max) {
        max = io[i];
      }
    }
    return max;
  }
  
  const myArr = [3, 8, 1, 10, 4];
  const maxNumber = findMax(myArray);
  console.log("The maximum number in the array is:", maxNumber);