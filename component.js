// <hello-world>
//   <p>Hello {what}!</p>
//   this.what = "World";
// </hello-world>

(function(){
  var one = 1;
  console.log(one);
})();

riot.tag('hello', '<h1>Hello {opts.title}</h1> <button onclick="{one(1)}"></button>', function(opts){
  opts.title = "hello";
  this.title = "moon";
  this.one = function(one, two){
    console.log('hi');
    console.log(arguments);
  }.bind(this);
  console.log("Arguments", arguments);
});
