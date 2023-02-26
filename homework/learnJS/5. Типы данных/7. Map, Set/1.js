function unique(arr) {
    let elements = new Set();
    let output = [];
    arr.forEach((item) => {
        elements.add(item);
    });
    for (let key of elements) {
        output.push(key);
    }
    return output;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare,Krishna,:-O