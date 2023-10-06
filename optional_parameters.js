// Optional Parameters in TypeScript
function proclaim(status) {
    console.log("I'm ".concat(status || 'not ready...'));
}
proclaim(); //optional parameter skip and call
proclaim('getting ready');
proclaim('ready!');
