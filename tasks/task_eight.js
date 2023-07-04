// Use closure

function outerFunction () {
  const outerVariable = 'I am the outer variable from the outer function'
  function innerFunction () {
    console.log(`${outerVariable} currently in the inner function`)
  }
  return innerFunction
}
const closure = outerFunction()
closure()
