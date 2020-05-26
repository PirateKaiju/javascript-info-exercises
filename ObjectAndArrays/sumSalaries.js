function sumSalaries(obj){
    let arr = Object.values(obj);
    res = 0;
    for(let item of arr){
        res += item;
    }
    return res;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) );
