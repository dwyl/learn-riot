var riot  = require('riot');
// by requiring the itterator tag here it becomes available
// as a tag inside hello.tag when rendered by riot below
require('./iterator.tag');
var hello = require('./hello.tag');
var html  = riot.render(hello, { name: "Ava" })
console.log(html); // <hello><p>Hello Ana!</p></hello>
