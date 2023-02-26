function unique(arr) {
    let elements = {};
    let output = [];
    arr.forEach((item) => {
        elements[item] = elements.hasOwnProperty(item) ? elements[item]++ : 1;
    });
    for (let key in elements) {
        output.push(key);
    }
    return output;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O