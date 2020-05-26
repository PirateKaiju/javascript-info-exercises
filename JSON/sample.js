let user = {
  name: "John Smith",
  age: 35
};

let temp = JSON.stringify(user);

let re_user = JSON.parse(temp);

alert(re_user.name);

