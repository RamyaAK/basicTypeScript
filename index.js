function printOperations(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers!');
    }
    console.log(a + b, a / b);
}
// The function call below should print: 12 1 
printOperations(6, 6);
function exclaim(name, count) {
    for (var i = 0; i < count; i += 1) {
        console.log("".concat(name, "!"));
    }
}
// Exclaim 'Muriel!' six times
exclaim('Muriel', 6);
