function count(obj){
    let arr = Object.keys(obj);
    res = arr.length;
    return res;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( count(salaries) );
