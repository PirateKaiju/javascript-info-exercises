//let arr = [1, 2, 3, 4];
//let arr = [1, -1, 1, 1];
let arr = [-1, 2, 3, -9];
maxsum = 0;
sum = 0;

for (let value of arr){
    sum += value;
    if((sum) >= maxsum){
        maxsum = sum;
    }
    if(sum < 0){
        sum = 0;
    }
}

alert(maxsum);