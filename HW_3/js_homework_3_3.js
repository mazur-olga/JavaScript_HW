function pow(x, y) {
    let result = 1;
  
    for (let i = 0; i < y; i++) {
      result *= x;
    }
  
    return result;
  }
  
 
  const result = pow(5, 3);
  console.log(result); 