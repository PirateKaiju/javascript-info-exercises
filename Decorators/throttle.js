function throttle(f, ms) {

  let isCooldown = false;
  let lastCall;
  let lastThis;
  let runOnce = false;

  return function bb() {
    if (isCooldown){ 
        lastCall = arguments;
        lastThis = this;
        runOnce = true;
        return;
    }

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => {
        isCooldown = false;
        if(runOnce){
            bb.apply(lastThis, lastCall);
            runOnce = false;
        }
    }, ms);
  };

}

function f(a) {
  alert(a)
};

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored
