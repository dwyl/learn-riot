var riot  = require('riot');
console.log(__dirname + '/hello.tag \n')
var hello = require(__dirname + '/hello.tag'); // CANNOT require('hello.tag') !!
var tag = riot.tag(hello);
console.log(tag);
// var html  = riot.render(tag, { name: "Ana" })
// console.log(html);

/****** Output of console.log(html) is:

<<hello>
<p>hello {name}</p>
</hello>
></<hello>
<p>hello {name}</p>
</hello>
>

************************************ >> WHY?! **/
