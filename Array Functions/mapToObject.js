function User(id, fullname){
    this.id = id;
    this.fullname = fullname;
    
    }

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };


let users = [ john, pete, mary ];

let names = users.map((index)=>(new User(index.id, index.name + " " + index.surname)));

alert(names[0].fullname);