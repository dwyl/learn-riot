// <hello-world>
//   <p>Hello {what}!</p>
//   this.what = "World";
// </hello-world>

(function(){
  var one = 1;
  console.log(one);
})();

var html = '<h1>Hello {opts.title}</h1> <ul><li each="{opts.items}"><p onclick="{parent.delete}">{title}</p></li></ul>';
riot.tag('hello', html, function(opts){
  opts.title = "hello";
  this.title = "moon";
  this.delete = function () {
    console.log('Delete', this);
  }.bind(this);
  console.log('ops', opts);
  console.log("Arguments", arguments);
});
