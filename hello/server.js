var riot  = require('riot');
var fs    = require('fs');
var hello = fs.readFileSync(__dirname + '/hello.tag', 'utf8'); // CANNOT require('hello.tag') !!

var html  = riot.render(hello, { name: "Ana" })
console.log(html);

/****** Output of console.log(html) is:

<<hello>
<p>hello {name}</p>
</hello>
></<hello>
<p>hello {name}</p>
</hello>
>

************************************ >> WHY?! **/
