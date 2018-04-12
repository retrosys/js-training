'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 * and wrapped by `*`
 *
 */
const whisper = str => {
	return (str.toLowerCase())
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof whisper, 'function')
assert.deepStrictEqual(whisper('HELLO'),('hello'))



//assert.fail('You must write your own tests')
// End of tests */
