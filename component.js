// <hello-world>
//   <p>Hello {what}!</p>
//   this.what = "World";
// </hello-world>

(function(){
  var one = 1;
  console.log(one);
})();

var html = '<h1>Hello {opts.title}</h1> <form onsubmit="{add}"><input name="item" type="text"></input></form> <ul><li each="{opts.items}"><p onclick="{parent.delete}">{title}</p></li></ul>';
riot.tag('hello', html, function(opts){

  this.add = function(event) {
    console.log(event.keyCode);
    console.log("target",this.item.value);
    opts.items.push({title: this.item.value});
  };

  this.delete = function () {
    var index = opts.items.map(function(element){
      return element.title;
    }).indexOf(this.title);
    console.log('index', index);
    opts.items.splice(index, 1);
    console.log('Delete', this.title);
  };

  console.log('ops', opts);
  console.log("Arguments", arguments);
});
