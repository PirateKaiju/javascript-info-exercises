function unique2(arr){
    myarr = [];
    for(let i = 0; i < arr.length; i++){
        if(!(myarr.find((item) => (item == arr[i])))){
            myarr.push(arr[i]);
        }
    }
    return myarr;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

alert( "ANSWER: " + unique2(strings) ); // Hare, Krishna, :-O