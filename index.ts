function printOperations(a: number, b: number) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers!');
    }
  
    console.log(a + b, a / b);
  }
  
  // The function call below should print: 12 1 
  printOperations(6, 6);
  
  function exclaim(name: string, count: number) {
    for (let i = 0; i < count; i += 1) {
      console.log(`${name}!`);
    }
  }
  
  // Exclaim 'Muriel!' six times
  exclaim('Muriel',6);
  
// Parameter Type Annotations:
  function triple(value:number) {
    return value * 3;
  }
  
  function greetTripled(greeting:string, value:number) {
    console.log(`${greeting}, ${triple(value)}!`);
  }
  
  greetTripled('Hiya',5);


