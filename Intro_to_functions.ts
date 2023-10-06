function printOperations(a: number, b: number) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers!');
    }
  
    console.log(a + b, a / b);
  }
  
  // The function call below should print: 12 1 
  printOperations(6, 6);
  