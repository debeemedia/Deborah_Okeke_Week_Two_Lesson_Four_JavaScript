// Use immediately invoked function expressions (IIFE)

(function myFunc () {
  console.log('I am self-invoking and I load immediately')
})()

const add = (function (a, b) {
  console.log(`I immediately invoke ${a + b}`)
})(2, 3)
