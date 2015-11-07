var test  = require('tape');

var dir     = __dirname.split('/')[__dirname.split('/').length-1];
var file    = dir + __filename.replace(__dirname, '') + " -> ";

var riot  = require('riot');

test(file + "Nested Tag test", function(t) {
  require('../examples/list-iterator.tag'); // resolve nested tag
  var list = require('../examples/list.tag'); // sync
  var html  = riot.render(list, { name: "Ana" });
  // console.log(html);
  t.ok(html.match(/Smoothie/), "List contains smoothie.");
  t.end()
});
