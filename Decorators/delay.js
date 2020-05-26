function f(x, y, z) {
  alert(x);
  
}

function delay(func, time){
    
    
    return(function(){
        
        //setTimeout(func, time, ...arguments);
        
        /*function wrapper(){
            
            func.apply(this, ...arguments);
        }*/
        
        //wrapper(arguments);
        
        //setTimeout(wrapper, time, arguments);
        
        setTimeout(()=>(func.apply(this, arguments)), time)
        
    });
    
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms
