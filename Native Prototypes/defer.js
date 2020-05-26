Function.prototype.defer = function(time){
    setTimeout(this, time, arguments);
}

function f() {
  alert("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 second
