function filterRangeInPlace(arr, a, b){
    
    for(let index = 0; index < arr.length; index++){
        
        let item = arr[index];
        
        if(item < a || item > b){
            arr.splice(index,1);
            index--;
        }
    }
    
    return arr;
}