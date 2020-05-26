function printNumbers(from, to){
    if(from > to){
        return 0;
    }
    /*for(let i = from; i <= to; i++){
        
        setTimeout(() => (alert(i)), 1000);
    }   */
    alert(from);
    
    setTimeout(printNumbers, 1000, (from + 1), to);
    
}

printNumbers(1, 10);


function printNumbers2(from, to){
    
   setInterval(function(){
       if(from > to){
           return;
       }
       alert(from);
       from++;
   }, 1000);
    
    
}

printNumbers2(1, 5);
