'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 first characters
 * Create the function `cutLast` that takes a string and remove the 2 last charcters
 * Create the function `cutFirstLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 const cutFirst = string1 => {
 	return string1.slice(2, string1.length)

 }
 const cutLast = string2 => {
 	return string2.slice(0, string2.length -2)

 }
 const cutFirstLast = string3 => {
 	return string3.slice(2, string3.length -2)
 }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.deepStrictEqual(cutFirst('string1'),('ring1'))
assert.deepStrictEqual(cutLast('string2'),('strin'))
assert.deepStrictEqual(cutFirstLast('string3'),('rin'))





//assert.fail('You must write your own tests')
// End of tests */
