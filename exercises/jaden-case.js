'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = str => {
   str = 'How are you ?'
   str = str.split(' ')
   for (let i=0, x=str.length; i<x; i++){
   	str[i] = str[i][0].toUpperCase() + str[i].substr(1)
   }
	return str.join(' ')
}

console.log (jadenCase())


//* Begin of tests
 const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')

// assert.fail('You must write your own tests')
// // End of tests */
