// Immediately Invoked Function Expression (IIFE)

(function majhi() {
  console.log(`DB connected`);
})();

((name) => {
  console.log(`DB connected TWO ${name}`);
})("majhi");
