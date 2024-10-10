// immediately invoked function expression (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
})();

// FIRST () => definition
// SECOND () => execution

( (name) => {
    console.log(`The name is ${name}`);
})('agastya')