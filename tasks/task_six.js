// Use arrow functions

const greet = (name) => `I'm ${name}`
console.log(greet('Debby'))
console.log(greet('deBee'))
console.log(greet('D.O'))

const compare = (a, b) => {
  if (a > b) {
    return `${a} is greater than ${b}`
  } else {
    return `${a} is less than ${b}`
  }
}
console.log(compare(2, 3))
console.log(compare(12, 3))
