var riot  = require('riot');
console.log(__dirname + '/hello.tag \n')
var hello = require(__dirname + '/hello.tag'); // CANNOT require('hello.tag') !!

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
