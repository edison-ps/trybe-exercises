const assert = require('assert')

// escreva sum abaixo
function sum(...params) { 
  return params.reduce((accumulator, value) =>  accumulator + value, 0); 
}

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)