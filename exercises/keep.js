'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = string1 => {
	return string1.slice(0, 2)
}

const keepLast = string2 => {
	return string2.slice(5, string2.length)
}

const keepFirstLast = string3 => {
	return string3.slice(2, 4)
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.deepStrictEqual(keepFirst('string1'),('st'))
assert.deepStrictEqual(keepLast('string2'),('g2'))
assert.deepStrictEqual(keepFirstLast('string3'),('ri'))

//assert.fail('You must write your own tests')
// End of tests */
