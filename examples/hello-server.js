var riot  = require('riot');
console.log(__dirname + '/hello.tag \n')
var hello = require('./hello.tag'); // sync
var html  = riot.render(hello, { name: "Ana" });
console.log(html);
