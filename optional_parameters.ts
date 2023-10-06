// Optional Parameters in TypeScript
function proclaim(status?: string) {
    console.log(`I'm ${status || 'not ready...'}`);
  }
  
  proclaim(); //optional parameter skip and call
  proclaim('getting ready');
  proclaim('ready!');

