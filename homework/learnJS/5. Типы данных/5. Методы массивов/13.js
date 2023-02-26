let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

const groupById = (usersArray) => {
    let output = {};
    usersArray.forEach((user) => {
        output[user.id] = {
            id: user.id,
            name: user.name,
            age: user.age
        }
    })
    return output;
}

let usersById = groupById(users);