function unique(arr){
    let setArr = new Set(arr);
    
    /*for(let item of arr){
        setArr.add(item);
    }*/
    
    
    return(Array.from(setArr.values()));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values));