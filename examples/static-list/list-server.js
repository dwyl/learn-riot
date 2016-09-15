var riot = require('riot');
// by requiring the itterator tag here it becomes available
// as a tag inside list.tag when rendered by riot below
require('./list-iterator.tag');
var list = require('./list.tag');
var html = riot.render(list, { name: 'My List' });
console.log(html);
