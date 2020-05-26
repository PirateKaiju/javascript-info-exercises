function sumTo(n){
    if(n == 1){
        return 1;
    }
    return(sumTo(n - 1) + n);
    
    
}

alert(sumTo(1));
alert(sumTo(3));
alert(sumTo(4));
