var test  = require('tape');

var dir     = __dirname.split('/')[__dirname.split('/').length-1];
var file    = dir + __filename.replace(__dirname, '') + " -> ";

var riot  = require('riot');

test(file + "Hello World test", function(t) {
  var hello = require('../examples/hello.tag'); // sync
  var html  = riot.render(hello, { name: "Ana" });
  t.ok(html.match(/Hello Ana/), "Hello renders to: "+html)
  t.end()
});
