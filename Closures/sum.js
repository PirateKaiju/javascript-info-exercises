function sum(val1){
    return(function(val2){return(+val1 + val2)});
    }
alert(sum(1)(2));
