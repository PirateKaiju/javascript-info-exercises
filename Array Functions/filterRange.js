function filterRange(arr, a, b){
    
    return (arr.filter((item)=>(item > a && item < b)));
    
    
    }
    
alert(filterRange([1, 4, 8, 3, 10], 2, 6));