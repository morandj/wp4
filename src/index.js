console.log(`I'm a silly entry point`);
const arr = [1, 2, 3];
const iAmES6 = () => console.log(...arr);
window.iAmES6 = iAmES6;