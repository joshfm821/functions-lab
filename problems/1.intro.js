/**
 * Console logs the string "hello world"
 * 
 * @returns undefined
 */
function helloWorld() {
  console.log('hello world');//works
}


/**
 * Console logs the string "hello ${name}"
 * 
 * @param {string} name - the name to be added to the console log 
 * @returns undefined
 */
function helloName(name) {
  console.log(`hello ${name}`);//works
}

/**
 * Returns the string "hello world"
 * 
 * @returns {string} - the string "hello world"
 */
function returnHelloWorld() {
  return 'hello world';//works
}

/**
 * Returns the string "Hello ${name}!"
 * Hint: note the capitalization and !
 * 
 * @param {string} name - the name to added to the return string
 * @returns {string} A greeting in the form of "Hello ${name}!"
 */
function returnHelloName(name) {
  return `Hello ${name}!`;
}

module.exports = {
  helloWorld,
  helloName,
  returnHelloWorld,
  returnHelloName
}