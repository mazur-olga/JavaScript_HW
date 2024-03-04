function sumOfNumbersThatAreNotMultipleOf3() {
    let sum = 0;
  
    for (let i = 1; i <= 100; i++) {
      if (i % 3 !== 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  console.log(sumOfNumbersThatAreNotMultipleOf3());  