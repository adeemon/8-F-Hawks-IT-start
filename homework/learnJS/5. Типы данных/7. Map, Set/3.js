let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

//keys - это объект, нужно получить из него массив через Array.from, чтобы работать с ним через методы массивов