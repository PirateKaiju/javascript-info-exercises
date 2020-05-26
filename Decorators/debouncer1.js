//let a1 = (new Date()).getTime();
//let x = 0;

//alert((new Date()).getTime() - a1);
function debounce(func, time){
    let start;
    
    function delayed(){
        
        if((start === undefined) || (new Date()).getTime() - (start + time) >= 0){
            start = (new Date()).getTime();
            return(func.apply(this, arguments));
            
        }
        
        return("Nao")
        
    }
    
    return delayed;


}

let fn = function(a){
    alert(a);
};

let f1 = debounce(fn, 3000);
//alert(f1(1));
//alert(f1(2));
f1(1);
f1(2);
setTimeout(f1, 6000, 3);
//setTimeout(fn, 8000, 4);

/*
f(1); // runs immediately
f(2); // ignored

setTimeout( () => f(3), 100); // ignored ( only 100 ms passed )
setTimeout( () => f(4), 1100); // runs
setTimeout( () => f(5), 1500); // ignored (less than 1000 ms from the last run)*/

