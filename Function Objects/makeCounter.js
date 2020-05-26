function makeCounter(){
    
    counter.count = 0;
    counter.set = function(value){
        counter.count = value;
    };
    counter.decrease = function(){
        counter.count--;  
    };
    
    function counter(){
        return(++counter.count);
    }
    
    return(counter);
    
    }

counter = makeCounter();

alert(counter());
alert(counter());
alert(counter());
counter.set(10);
alert(counter.count);
counter.decrease();
alert(counter.count);
