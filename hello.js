'use strict'

const s='Hello'

function greet(name) {
  console.log(s+','+name+'!');
}

function test() {
  console.log('test')
}
module.exports = {
  greet,
  test
}
