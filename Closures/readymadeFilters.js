function inBetween(a, b){
        return(function(item, index){
            if(item > a && item < b){
                return true;
            }
            return false;
        });
    }

function inArray(arr){
    return(function(item, index){
        
        if(arr.find((arri) => (arri == item))){
            return true;
        }
        return false;
    });
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) );
