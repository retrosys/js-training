'use strict'

/*
 * Create a `getFirst` function that takes an array or a string
 * and return the first element
 *
 * @notions Data-Structures, Get
 */

// Your code :

const getFirst = (array) => {
	return array[0] 
}





getFirst([42, 3])

//* Begin of tests
const assert = require('assert')

assert.strictEqual(getFirst([ 2, 42 ]), 2)
assert.strictEqual(getFirst([ 'pouet', 4, true ]), 'pouet')
assert.strictEqual(getFirst([ getFirst ]), getFirst)
assert.strictEqual(getFirst('salut'), 's')
assert.strictEqual(getFirst([]), undefined)
// End of tests */
