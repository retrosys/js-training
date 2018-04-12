'use strict'

/*
 * Create a constant variables named `escapeStr` that contains specials
 * characters: /\`"'
 *
 * @notions Primitive and Operators, Variables
 */

// Your code :

const escapeStr = 'C\'est la \"Wild\" `Code School`/\\'

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof escapeStr, 'string')
assert.strictEqual(escapeStr.includes("'"), true)
assert.strictEqual(escapeStr.includes('"'), true)
assert.strictEqual(escapeStr.includes('`'), true)
assert.strictEqual(escapeStr.includes('/'), true)
assert.strictEqual(escapeStr.includes('\\'), true)
// End of tests */
