function sum(a){
    sum.res = a;
    function insideSum(b){
        sum.res += b;
        return(insideSum);
    }
    return(insideSum);
}

sum(1)(2);
alert(sum.res)
sum(1)(2)(5)(20)(-10);
alert(sum.res)

