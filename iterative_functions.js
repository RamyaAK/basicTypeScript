function exclaim(name, count) {
    for (var i = 0; i < count; i += 1) {
        console.log("".concat(name, "!"));
    }
}
// Exclaim 'Muriel!' six times
exclaim('Muriel', 6);
