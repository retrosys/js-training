'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */
const yell = (str) => {
	 
	return (str.toUpperCase())
}
console.log (yell('hello'))

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof yell, 'function')
assert.deepStrictEqual(yell('hello'),('HELLO'))

//assert.fail('You must write your own tests')
// End of tests */

