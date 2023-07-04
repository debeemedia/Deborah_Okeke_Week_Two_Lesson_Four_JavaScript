// Understand function scope

// Declare a variable outside a function and try to access it inside the function.
const var1 = 'You can view this global variable; it is accessible from anywhere'
function func1 () {
  console.log(var1.toUpperCase())
}
func1()

// Create a variable inside a function and try to access it outside the function.
// WILL THROW AN ERROR
function func2 () {
  const var2 = 'This is a local variable; you can\'t view it from outside because it is inaccessible from outside the function'
}
func2()
console.log(var2)
