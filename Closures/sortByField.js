let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field){
    return(function(a, b){
        if(a[field] > b[field]){
            return 1;
        }
        return -1;
    });
    
}

users.sort(byField('name'));

for (let user of users){
    alert(user.name);
}
