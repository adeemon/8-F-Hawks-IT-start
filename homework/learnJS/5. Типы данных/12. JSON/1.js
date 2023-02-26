let user = {
    name: "Василий Иванович",
    age: 35
};

let userJson = JSON.stringify(user);
console.log(JSON.parse(userJson));