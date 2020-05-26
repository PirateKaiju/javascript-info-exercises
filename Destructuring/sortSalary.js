function topSalaries(salaries){
    
    let [topsalary =  null, ...others] = (Object.entries(salaries).sort((a,b)=>(b[1]-a[1])));
    
    return topsalary;
}

//UM FORMATO MAIS VERBOSE TALVEZ SEJA MAIS DESEJAVEL
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Irin": 460
};

alert(topSalaries(salaries));
