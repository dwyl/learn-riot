var riot  = require('riot');
// by requiring the itterator tag here it becomes available
// as a tag inside hello.tag when rendered by riot below
require('./list-iterator.tag');
var hello = require('./list.tag');
var html  = riot.render(hello, { name: "Ava" })
console.log(html); // <hello><p>Hello Ana!</p></hello>

module.exports = hello;
