
function sortByAge(arr){
    
    return(arr.sort(function(a, b){return(a.age - b.age)}))
    
    }

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ john, pete, mary ];

sortByAge(arr);

alert(arr[1].name);